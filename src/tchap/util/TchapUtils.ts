import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";
import SdkConfig from "~tchap-web/src/SdkConfig";
import AutoDiscoveryUtils from "~tchap-web/src/utils/AutoDiscoveryUtils";
import { ValidatedServerConfig } from "~tchap-web/src/utils/ValidatedServerConfig";
import { findMapStyleUrl } from "~tchap-web/src/utils/location";
import { logger } from "matrix-js-sdk/src/logger";

import TchapApi from "./TchapApi";
import { ClientConfig } from "matrix-js-sdk/src/autodiscovery";

/**
 * Tchap utils.
 */

export default class TchapUtils {
    /**
     * Return a short value for getDomain().
     * @returns {string} The shortened value of getDomain().
     */
    static getShortDomain(): string {
        const cli = MatrixClientPeg.safeGet();
        const baseDomain = cli.getDomain();
        const domain = baseDomain?.split(".tchap.gouv.fr")[0].split(".").reverse().filter(Boolean)[0];

        return this.capitalize(domain) || "Tchap";
    }

    /**
     * For the current user, get the room federation options.
     *
     * @returns { showForumFederationSwitch: boolean, forumFederationSwitchDefaultValue?: boolean } options
     */
    public static getRoomFederationOptions(): {
        showForumFederationSwitch: boolean;
        forumFederationSwitchDefaultValue?: boolean;
    } {
        const cli = MatrixClientPeg.safeGet();
        const baseDomain = cli.getDomain();

        // Show for all but default to false only for intradef
        return {
            showForumFederationSwitch: true,
            forumFederationSwitchDefaultValue: baseDomain !== "agent.intradef.tchap.gouv.fr",
        };
    }

    /**
     * Capitalize a string.
     * @param {string} s The sting to capitalize.
     * @returns {string} The capitalized string.
     * @private
     */
    static capitalize(s: string): string {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    static findHomeServerNameFromUrl = (url: string): string => {
        const homeServerList = SdkConfig.get()["homeserver_list"];
        const homeserver = homeServerList.find((homeServer) => homeServer.base_url === url);
        return homeserver.server_name;
    };

    static randomHomeServer = () => {
        const homeServerList = SdkConfig.get()["homeserver_list"];
        return homeServerList[Math.floor(Math.random() * homeServerList.length)];
    };

    /**
     * Find the homeserver corresponding to the given email.
     * @param email Note : if email is invalid, this function still works and returns the externs server. (todo : fix)
     * @returns
     */
    static fetchHomeserverForEmail = async (
        email: string,
    ): Promise<void | { base_url: string; server_name: string }> => {
        const randomHomeServer = this.randomHomeServer();
        const infoUrl = "/_matrix/identity/api/v1/info?medium=email&address=";
        // TODO for dev only, to remove when mas is fixed with sydent
        // return Promise.resolve({
        //     base_url: "https://matrix.dev01.tchap.incubateur.net",
        //     server_name: "Agents 1",
        // })
        return fetch(randomHomeServer.base_url + infoUrl + email)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Could not find homeserver for this email");
                }
                return response.json();
            })
            .then((response) => {
                // Never returns error : anything that doesn't match a homeserver (even invalid email) returns "externe".
                const serverUrl = "https://matrix." + response.hs;
                return {
                    base_url: serverUrl,
                    server_name: this.findHomeServerNameFromUrl(serverUrl),
                };
            })
            .catch((error) => {
                logger.error("Could not find homeserver for this email", error);
                return;
            });
    };

    /**
     * Check if a server name is the external server.
     * @param serverName The server name to check (e.g., "externes" or "Externes")
     * @returns true if the server is the external server, false otherwise
     */
    static isExternalHomeserver(serverName: string): boolean {
        return /\bexternes\b/i.test(serverName);
    }

    /**
     * Check if an email belongs to an external homeserver by fetching its homeserver information.
     * This is an async operation that queries the identity server.
     * @param email The email address to check
     * @returns true if the email belongs to an external homeserver, false otherwise
     */
    static async checkIfEmailIsExternal(email: string): Promise<boolean> {
        const homeserver = await this.fetchHomeserverForEmail(email);
        console.log("*** checkIfEmailIsExternal", homeserver);
        if (!homeserver || !homeserver.server_name) {
            return false;
        }
        return this.isExternalHomeserver(homeserver.server_name);
    }

    /**
     * Make a ValidatedServerConfig from the server urls.
     * Todo : merge this function with fetchHomeserverForEmail, they are always used together anyway.
     * @param
     * @returns
     */
    static makeValidatedServerConfig = async (serverConfig: Record<string, any>): Promise<ValidatedServerConfig> => {
        const discoveryResult: ClientConfig = {
            "m.homeserver": {
                state: "SUCCESS",
                error: null,
                base_url: serverConfig.base_url,
                server_name: serverConfig.server_name,
            },
            "m.identity_server": {
                state: "SUCCESS",
                error: null,
                base_url: serverConfig.base_url, // On Tchap our Identity server urls and home server urls are the same
                server_name: serverConfig.server_name,
            },
        } as ClientConfig;
        const validatedServerConf = await AutoDiscoveryUtils.buildValidatedConfigFromDiscovery(
            discoveryResult["m.homeserver"].server_name,
            discoveryResult,
        );
        return validatedServerConf;
    };

    /**
     * Extract the name of the server from a home server address
     * @param serverName from "agent.dinum.beta.gouv.fr"
     * @returns to "Dinum"
     */
    static toFriendlyServerName = (serverName: string): string => {
        const serverUrl = "https://matrix." + serverName;
        const friendlyServerName = this.findHomeServerNameFromUrl(serverUrl);
        return this.capitalize(friendlyServerName);
    };

    /**
     * @deprecated
     * Ask the homeserver is cross signing is supported (async)
     * @returns Promise<true> is cross signing is supported by home server or false
     */
    static async isCrossSigningSupportedByServer(): Promise<boolean> {
        const cli = MatrixClientPeg.safeGet();
        return cli.doesServerSupportUnstableFeature("org.matrix.e2e_cross_signing");
    }

    /**
     *
     * @returns true is a map tile server is present in config or wellknown.
     */
    static isMapConfigured(): boolean {
        const cli = MatrixClientPeg.safeGet();
        try {
            findMapStyleUrl(cli);
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
     * @returns string The url to pass in next_link during registration. Compared to element-web, the hostname
     * is the homeserver instead of the tchap-web server. This changes the flow to avoid the redirection to
     * tchap-web, because tchap-web gets a "M_THREEPID_IN_USE" error from backend which is confusing.
     * We should fix this bug and remove this custom function.
     */
    static makeTchapRegistrationUrl(params: {
        client_secret: string;
        hs_url: string;
        is_url: string;
        session_id: string;
    }): string {
        let url: string = params.hs_url + window.location.pathname + "#/register";

        const keys = Object.keys(params);
        for (let i = 0; i < keys.length; ++i) {
            if (i === 0) {
                url += "?";
            } else {
                url += "&";
            }
            const k = keys[i];
            url += k + "=" + encodeURIComponent(params[k]);
        }
        // todo : write unit test, then try replacing by :
        // url += "?" + new URLSearchParams(params).toString();
        return url;
    }

    /**
     * Credentials captured at account-expiry time, scoped strictly to the two
     * account_validity endpoints (renew-email + expiry re-check). They are kept
     * here so the renewal flow keeps working *after* the authenticated Matrix
     * client and its in-memory (decrypted) store have been fully torn down by
     * stopMatrixClient(true) on expiry. See ExpiredAccountHandler.
     */
    private static expiredAccountCredentials: {
        homeserverUrl: string;
        accessToken: string;
        userId: string;
    } | null = null;

    /**
     * Store (or clear, by passing null) the minimal credentials needed by the
     * account_validity endpoints once the Matrix client has been torn down.
     */
    static setExpiredAccountCredentials(
        creds: { homeserverUrl: string; accessToken: string; userId: string } | null,
    ): void {
        this.expiredAccountCredentials = creds;
    }

    /**
     * Resolve the credentials for the account_validity endpoints: prefer the
     * ones captured at expiry time; otherwise fall back to a still-live client
     * (e.g. when called outside the expiry flow).
     */
    private static getAccountValidityCredentials(): {
        homeserverUrl: string;
        accessToken: string;
        userId: string;
    } | null {
        if (this.expiredAccountCredentials) {
            return this.expiredAccountCredentials;
        }
        const client = MatrixClientPeg.get();
        if (client) {
            return {
                homeserverUrl: client.getHomeserverUrl(),
                accessToken: client.getAccessToken() ?? "",
                userId: client.getUserId() ?? "",
            };
        }
        return null;
    }

    /**
     * Request a new validity email for a user account (expired or not).
     * @returns true if the mail was sent succesfully, false otherwise
     */
    static async requestNewExpiredAccountEmail(): Promise<boolean> {
        logger.debug(":tchap: Requesting an email to renew to account");

        const creds = this.getAccountValidityCredentials();
        if (!creds?.accessToken) {
            logger.error(":tchap: no credentials available to request a renewal email");
            return false;
        }

        const url = `${creds.homeserverUrl}${TchapApi.accountValidityResendEmailUrl}`;
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${creds.accessToken}`,
            },
        };

        return fetch(url, options)
            .then((response) => {
                logger.debug(":tchap: email NewExpiredAccountEmail sent", response);
                return true;
            })
            .catch((err) => {
                logger.error(":tchap: email NewExpiredAccountEmail error", err);
                return false;
            });
    }

    /**
     * Verify if the account is expired.
     * Performs a raw authenticated profile request (no Matrix client / in-memory
     * store required) and checks for the ORG_MATRIX_EXPIRED_ACCOUNT errcode, so
     * this still works after the client has been torn down on expiry.
     * @returns true if account is expired, false otherwise
     */
    static async isAccountExpired(): Promise<boolean> {
        const creds = this.getAccountValidityCredentials();
        if (!creds?.userId || !creds.accessToken) {
            // user is not logged in. Or something went wrong.
            return false;
        }
        try {
            const response = await fetch(
                `${creds.homeserverUrl}${TchapApi.profileUrl}${encodeURIComponent(creds.userId)}`,
                { method: "GET", headers: { Authorization: `Bearer ${creds.accessToken}` } },
            );
            if (response.ok) {
                return false;
            }
            const body = (await response.json().catch(() => ({}))) as { errcode?: string };
            return body?.errcode === "ORG_MATRIX_EXPIRED_ACCOUNT";
        } catch (error) {
            logger.error(":tchap: isAccountExpired check failed", error);
            return false;
        }
    }

    /**
     * Whether the user is currently using a bluetooth audio input (bluetooth headset for example).
     * In Chrome we can get the information sometimes, and in Firefox and Edge we don't know.
     * @returns true if we are sure user is currently using a bluetooth audio input. False if no blutooth, or we don't know.
     */
    static async isCurrentlyUsingBluetooth(): Promise<boolean> {
        if (!navigator.mediaDevices?.enumerateDevices) {
            logger.warn("enumerateDevices() not supported. Cannot know if there is a bluetooth device.");
            return false;
        } else {
            // List cameras and microphones.
            return navigator.mediaDevices
                .enumerateDevices()
                .then((devices) => {
                    let hasBluetooth = false;
                    devices.forEach((device) => {
                        logger.debug(`${device.kind}: ${device.label} id = ${device.deviceId}`);
                        if (device.kind === "audioinput") {
                            if (device.label.toLowerCase().includes("bluetooth")) {
                                hasBluetooth = true;
                            }
                        }
                    });
                    return hasBluetooth;
                })
                .catch((err) => {
                    logger.error(`${err.name}: ${err.message}`);
                    return false;
                });
        }
    }

    static async getUserRedListInfo() : Promise<boolean> {
        const client = MatrixClientPeg.safeGet();
        const accountData = await client.getAccountData('im.vector.hide_profile');
        console.log('accountData', accountData?.getContent());
        return !!accountData?.getContent().hide_profile;
    }

    static async setUserRedListInfo(isOnRedList: boolean) : Promise<void> {
        const client = MatrixClientPeg.safeGet();
        client.setAccountData('im.vector.hide_profile', {hide_profile: isOnRedList});
    }

}
