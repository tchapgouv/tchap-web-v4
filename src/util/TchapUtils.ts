import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import SdkConfig from "matrix-react-sdk/src/SdkConfig";
import AutoDiscoveryUtils from "matrix-react-sdk/src/utils/AutoDiscoveryUtils";
import { ValidatedServerConfig } from "matrix-react-sdk/src/utils/ValidatedServerConfig";
import { findMapStyleUrl } from 'matrix-react-sdk/src/utils/location';

import TchapApi from "./TchapApi";

/**
 * Tchap utils.
 */

export default class TchapUtils {
    /**
         * Return a short value for getDomain().
         * @returns {string} The shortened value of getDomain().
         */
    static getShortDomain(): string {
        const cli = MatrixClientPeg.get();
        const baseDomain = cli.getDomain();
        const domain = baseDomain.split('.tchap.gouv.fr')[0].split('.').reverse().filter(Boolean)[0];

        return this.capitalize(domain) || 'Tchap';
    }

    /**
     * For the current user, get the room federation options.
     *
     * @returns { showForumFederationSwitch: boolean, forumFederationSwitchDefaultValue?: boolean } options
     */
    public static getRoomFederationOptions(): {
        showForumFederationSwitch: boolean,
        forumFederationSwitchDefaultValue?: boolean
    } {
        const cli = MatrixClientPeg.get();
        const baseDomain = cli.getDomain();

        // Only show the federate switch to defense users : it's difficult to understand, so we avoid
        // displaying it unless it's really necessary.
        if (baseDomain === 'agent.intradef.tchap.gouv.fr') {
            return {
                showForumFederationSwitch: true,
                forumFederationSwitchDefaultValue: false
            }
        }

        return {
            showForumFederationSwitch: false
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
        const homeServerList = SdkConfig.get()['homeserver_list'];
        const homeserver = homeServerList.find(homeServer => homeServer.base_url === url);
        return homeserver.server_name;
    };

    static randomHomeServer = () => {
        const homeServerList = SdkConfig.get()['homeserver_list'];
        return homeServerList[Math.floor(Math.random() * homeServerList.length)];
    };

    /**
     * Find the homeserver corresponding to the given email.
     * @param email Note : if email is invalid, this function still works and returns the externs server. (todo : fix)
     * @returns
     */
    static fetchHomeserverForEmail = async (email: string): Promise<void | {base_url: string, server_name: string}> => {
        const randomHomeServer = this.randomHomeServer();
        const infoUrl = "/_matrix/identity/api/v1/info?medium=email&address=";
        return fetch(randomHomeServer.base_url + infoUrl + email)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Could not find homeserver for this email');
                }
                return response.json();
            })
            .then(response => {
                // Never returns error : anything that doesn't match a homeserver (even invalid email) returns "externe".
                const serverUrl = "https://matrix." + response.hs;
                return {
                    base_url: serverUrl,
                    server_name: this.findHomeServerNameFromUrl(serverUrl),
                };
            })
            .catch((error) => {
                console.error('Could not find homeserver for this email', error);
                return;
            });
    };

    /**
     * Make a ValidatedServerConfig from the server urls.
     * Todo : merge this function with fetchHomeserverForEmail, they are always used together anyway.
     * @param
     * @returns
     */
    static makeValidatedServerConfig = (serverConfig): ValidatedServerConfig => {
        const discoveryResult = {
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
        };
        const validatedServerConf = AutoDiscoveryUtils.buildValidatedConfigFromDiscovery(
            discoveryResult['m.homeserver'].server_name, discoveryResult);
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
     * Ask the homeserver is cross signing is supported (async)
     * @returns Promise<true> is cross signing is supported by home server or false
     */
    static async isCrossSigningSupportedByServer(): Promise<boolean> {
        const cli = MatrixClientPeg.get();
        return cli.doesServerSupportUnstableFeature("org.matrix.e2e_cross_signing");
    }

    /**
     *
     * @returns true is a map tile server is present in config or wellknown.
     */
    static isMapConfigured(): boolean {
        try {
            findMapStyleUrl();
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
    static makeTchapRegistrationUrl(
        params: {client_secret: string, hs_url: string, is_url: string, session_id: string}): string {
        let url: string = params.hs_url + window.location.pathname + '#/register';

        const keys = Object.keys(params);
        for (let i = 0; i < keys.length; ++i) {
            if (i === 0) {
                url += '?';
            } else {
                url += '&';
            }
            const k = keys[i];
            url += k + '=' + encodeURIComponent(params[k]);
        }
        return url;
    }

    /**
     * Request a new validity email for a user account (expired or not).
    * @returns true if the mail was sent succesfully, false otherwise
     */
    static async requestNewExpiredAccountEmail(): Promise<boolean> {
        console.log(":tchap: Requesting an email to renew to account");
        const homeserverUrl = MatrixClientPeg.get().getHomeserverUrl();
        const accessToken = MatrixClientPeg.get().getAccessToken();
        //const url = `${homeserverUrl}/_matrix/client/unstable/account_validity/send_mail`;
        const url = `${homeserverUrl}${TchapApi.accountValidityResendEmailUrl}`;
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        return fetch(url, options).then((response) => {
            console.log(":tchap: email NewExpiredAccountEmail sent", response);
            return true;
        }).catch((err) => {
            console.error(":tchap: email NewExpiredAccountEmail error", err);
            return false;
        });
    }

    /**
     * Verify if the account is expired.
     * It executes an API call and check that it receives a ORG_MATRIX_EXPIRED_ACCOUNT
     * The API invoked is getProfileInfo()
     * @param matrixId the account matrix Id
     * @returns true if account is expired, false otherwise
     */
    static async isAccountExpired(matrixId?: string): Promise<boolean> {
        if (!matrixId) {
            matrixId = MatrixClientPeg.getCredentials().userId;
        }
        try {
            await MatrixClientPeg.get().getProfileInfo(matrixId);
        } catch (err) {
            if (err.errcode === 'ORG_MATRIX_EXPIRED_ACCOUNT') {
                return true;
            }
        }
        return false;
    }
}
