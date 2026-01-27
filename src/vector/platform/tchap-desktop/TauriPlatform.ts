import { listen } from '@tauri-apps/api/event';
import { getVersion } from '@tauri-apps/api/app';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { logger } from 'matrix-js-sdk/src/logger';
import { check, type Update } from '@tauri-apps/plugin-updater';
import { relaunch } from '@tauri-apps/plugin-process';
import { openUrl } from '@tauri-apps/plugin-opener';
import { onOpenUrl } from '@tauri-apps/plugin-deep-link';
import { secureRandomString } from 'matrix-js-sdk/src/randomstring';
import { type MatrixEvent, type Room, type MatrixClient, type SSOAction, type OidcRegistrationClientMetadata } from 'matrix-js-sdk/src/matrix';
import { isPermissionGranted, requestPermission } from '@tauri-apps/plugin-notification';
import { encodeParams } from 'matrix-js-sdk/src/utils';

import BasePlatform, { SSO_HOMESERVER_URL_KEY, SSO_ID_SERVER_URL_KEY, SSO_IDP_ID_KEY, UpdateCheckStatus, type UpdateStatus } from "../../../BasePlatform";
import dis from "../../../dispatcher/dispatcher";
import SdkConfig from "../../../SdkConfig";
import { type ActionPayload } from "../../../dispatcher/payloads";
// import { TauriSeshatIndexManager as SeshatIndexManager } from "./TauriSeshatIndexManager";
import { TauriIPCManager as IPCManager } from "./TauriIPCManager";
import { _t } from "../../../languageHandler";
import { TauriSeshatIndexManager } from './TauriSeshatIndexManager';
import { type TauriSecureStorage } from './TauriSecureStorage';
import type BaseEventIndexManager from '~tchap-web/src/indexing/BaseEventIndexManager';

import Modal from '~tchap-web/src/Modal';
import Spinner from '~tchap-web/src/components/views/elements/Spinner';
import ToastStore from '~tchap-web/src/stores/ToastStore';
import GenericExpiringToast from '~tchap-web/src/components/views/toasts/GenericExpiringToast';
import { hideToast as hideUpdateToast, showToast as showUpdateToast} from '~tchap-web/src/toasts/UpdateToast';
import { type CheckUpdatesPayload } from '~tchap-web/src/dispatcher/payloads/CheckUpdatesPayload';
import { Action } from '~tchap-web/src/dispatcher/actions';

const SSO_ID_KEY = "tchap-desktop-ssoid";
const POKE_RATE_MS = 60 * 60 * 1000; // 1h
const UPDATE_DEFER_KEY = "mx_defer_update";

function onAction(payload: ActionPayload): void {
    // Whitelist payload actions, no point sending most across
    if (["call_state"].includes(payload.action)) {
        window.__TAURI__.core.invoke("app_onAction", payload);
    }
}

function platformFriendlyName(): string {
    // used to use window.process but the same info is available here
    if (navigator.userAgent.includes("Macintosh")) {
        return "macOS";
    } else if (navigator.userAgent.includes("FreeBSD")) {
        return "FreeBSD";
    } else if (navigator.userAgent.includes("OpenBSD")) {
        return "OpenBSD";
    } else if (navigator.userAgent.includes("SunOS")) {
        return "SunOS";
    } else if (navigator.userAgent.includes("Windows")) {
        return "Windows";
    } else if (navigator.userAgent.includes("Linux")) {
        return "Linux";
    } else {
        return "Unknown";
    }
}

export default class TauriPlatform extends BasePlatform {
    private readonly ipc = new IPCManager();
    private readonly eventIndexManager: BaseEventIndexManager = new TauriSeshatIndexManager(this);
    protected tauriSecureStorage: TauriSecureStorage;
    private protocol!: string;

    // this is the opaque token we pass to the HS which when we get it in our callback we can resolve to a profile
    private readonly ssoID: string = secureRandomString(32);
    public constructor(tauriSecureStorage: TauriSecureStorage) {
        super();

        if (!window.__TAURI__) {
            throw new Error("Cannot instantiate TauriPlatform, window.__TAURI__ is not set");
        }
        this.protocol = "tchap";

        dis.register(onAction);
        this.tauriSecureStorage = tauriSecureStorage;

        this.ipc.call("welcome");

        this.checkDeepLinkOpen();

        this.onDownloadFinish();
    }

    public onDownloadFinish(): void {
        listen("download-finished", (event) => {
            const path  = event.payload as string;

            const key = `DOWNLOAD_TOAST_${Date.now()}`;
            
            const onAccept = (): void => {
                this.ipc.call("user_download_action", { path });
                ToastStore.sharedInstance().dismissToast(key);
            };

            const onDismiss = (): void => {
                ToastStore.sharedInstance().dismissToast(key);
            };

            ToastStore.sharedInstance().addOrReplaceToast({
                key,
                title: _t("download_completed"),
                props: {
                    description: path,
                    primaryLabel: _t("action|open"),
                    onPrimaryClick: onAccept,
                    dismissLabel: _t("action|dismiss"),
                    onDismiss,
                    numSeconds: 10,
                },
                component: GenericExpiringToast,
                priority: 99,
            });
        });
    }
    public async checkDeepLinkOpen(): Promise<void> {
        await onOpenUrl((urls) => {
            console.log('***** deep link:', urls)
            if (urls[0]) {
                const url = new URL(urls[0]);
                const loginToken = url.searchParams.get("loginToken"); // for SSO
                const code  = url.searchParams.get("code"); // for native OIDC
                const state = url.searchParams.get("state"); // for native OIDC
                // When coming back from UIA reset cross signing action
                if (url.href.includes("reset-cross-signing.success")) {
                    window.postMessage("authDone", "*");
                    return;
                }
                // callback return from sso connexion 
                if (loginToken) window.location.replace(`/?loginToken=${loginToken}`);
                if (code && state) window.location.replace(`/?code=${code}&state=${state}`)
            }
        });
    }

    public pollForUpdate = (
        showUpdate: (currentVersion: string, mostRecentVersion: string) => void,
        showNoUpdate?: () => void,
    ): Promise<UpdateStatus> => {
        return check().then(
            (update: Update | null) => {
                if(update) {
                    const mostRecentVersion = update.version;
                    if (this.shouldShowUpdate(mostRecentVersion)) {
                        console.log("Update available to " + mostRecentVersion + ", will notify user");
                        showUpdate(update.currentVersion, mostRecentVersion);
                    } else {
                        console.log("Update available to " + mostRecentVersion + " but won't be shown");
                    }
                    return { status: UpdateCheckStatus.Ready };
                } else {
                    console.log("No update available");
                    showNoUpdate?.();
                }

                return { status: UpdateCheckStatus.NotAvailable };
            },
            (err) => {
                logger.error("Failed to poll for update", err);
                return {
                    status: UpdateCheckStatus.Error,
                    detail: err.message || (err.status ? err.status.toString() : "Unknown Error"),
                };
            },
        );
    }

    public startUpdater(): void {
        setInterval(() => this.pollForUpdate(showUpdateToast, hideUpdateToast), POKE_RATE_MS);
    }

    public installUpdate(): void {
            check().then((update: Update | null) => {
                if (update) {
                    logger.info(
                        `found update ${update.version} from ${update.date} with notes ${update.body}`
                    );
                    let downloaded = 0;
                    let contentLength = 0;
                    // alternatively we could also call update.download() and update.install() separately
                    update.downloadAndInstall((event) => {
                        switch (event.event) {
                        case 'Started':
                            contentLength = event.data.contentLength ?? 0;
                            logger.info(`started downloading desktop update${contentLength} bytes`);
                            break;
                        case 'Progress':
                            downloaded += event.data.chunkLength;
                            logger.info(`downloaded ${downloaded} from ${contentLength}`);
                            break;
                        case 'Finished':
                            logger.info('download tauri update finished');
                            break;
                        }
                    }).then(() => {
                        logger.info('Desktop update installed');
                        relaunch();
                    }).catch(() => {
                        logger.info('Error downloadAndInstall: Desktop update in installUpdate');
                    });
                }
            }).catch((e) => {
                logger.error('Error checking for updates', e);
            })
    }
    

    public startUpdateCheck(): void {
        super.startUpdateCheck();
        void this.pollForUpdate(showUpdateToast, hideUpdateToast).then((updateState) => {
            dis.dispatch<CheckUpdatesPayload>({
                action: Action.CheckUpdates,
                ...updateState,
            });
        });
    }

    /**
     * Ignore the pending update and don't prompt about this version
     * until the 2 days at morning (8am).
     */
    public deferUpdate(newVersion: string): void {
        const date = new Date(Date.now() + 48 * 60 * 60 * 1000);
        date.setHours(8, 0, 0, 0); // set to next 48h at 8am
        localStorage.setItem(UPDATE_DEFER_KEY, JSON.stringify([newVersion, date.getTime()]));
        hideUpdateToast();
    }


    public getSecureStorageInstance(): TauriSecureStorage {
        return this.tauriSecureStorage;
    }

    public async getPickleKey(userId: string, deviceId: string): Promise<string | null> {
        try {
            const key = `${userId}|${deviceId}`;
            // Read a record from store
            const value = await this.tauriSecureStorage?.getItem(key);

            console.log('In getpicklekey value', value);
            console.log(value); // 'secret value'

            return value ? new TextDecoder().decode(value) : null;
        } catch {
            // if we can't connect to the password storage, assume there's no
            // pickle key
            return null;
        }
    }

    public async createPickleKey(userId: string, deviceId: string): Promise<string | null> {
        try {
            const key = `${userId}|${deviceId}`;
            const value = this.tauriSecureStorage.getRandom32Bytes();
            // Insert a record to the store
            await this.tauriSecureStorage.createItem(key, Array.from(value));

            return value ? new TextDecoder().decode(value) : null;
        } catch {
            // if we can't connect to the password storage, assume there's no
            // pickle key
            return null;
        }
    }

    public async destroyPickleKey(userId: string, deviceId: string): Promise<void> {
        try {
            const key = `${userId}|${deviceId}`;
            // Remove a record from store
            await this.tauriSecureStorage.removeItem(key);
        } catch {}
    }

    public async clearStorage(): Promise<void> {
        try {
            await super.clearStorage();
            await this.ipc.call("clear_storage");
        } catch {}  
    }
      
    public getEventIndexingManager(): BaseEventIndexManager | null {
        return this.eventIndexManager;
    }
    
    public get baseUrl(): string {
        // This configuration is element-desktop specific so the types here do not know about it
        return (SdkConfig.get() as unknown as Record<string, string>)["web_base_url"] ?? "https://www.tchap.gouv.fr/";
    }


    public getSSOCallbackUrl(fragmentAfterLogin?: string): URL {
        const href = window.location.href;
        const urlTchap = href.replace(/^https?/, this.protocol);
        const url = new URL(urlTchap);
        url.hash = fragmentAfterLogin ?? "";
        url.protocol = this.protocol; // only using this is not working to change the protocol, dont know why...
        url.searchParams.set(SSO_ID_KEY, this.ssoID);
        return url;
    }
       
    public async getOidcClientMetadata(): Promise<OidcRegistrationClientMetadata> {
        const baseMetadata = await super.getOidcClientMetadata();
        return {
            ...baseMetadata,
            applicationType: "native",
        };
    }
    

    public startSingleSignOn(
        mxClient: MatrixClient,
        loginType: "sso" | "cas",
        fragmentAfterLogin: string,
        idpId?: string,
        action?: SSOAction,
        loginHint?: string, // :TCHAP: sso-login-hint
    ): void {
        // persist hs url and is url for when the user is returned to the app with the login token
        localStorage.setItem(SSO_HOMESERVER_URL_KEY, mxClient.getHomeserverUrl());
        if (mxClient.getIdentityServerUrl()) {
            localStorage.setItem(SSO_ID_SERVER_URL_KEY, mxClient.getIdentityServerUrl()!);
        }
        if (idpId) {
            localStorage.setItem(SSO_IDP_ID_KEY, idpId);
        }
        const callbackUrl = this.getSSOCallbackUrl(fragmentAfterLogin);

        let ssoLoginUrl = mxClient.getSsoLoginUrl(callbackUrl.toString(), loginType, idpId, action);

        if(loginHint) {
            ssoLoginUrl = ssoLoginUrl + "&" + encodeParams({"login_hint" :loginHint});
        }

        this.openAuthorizationInBrowser(ssoLoginUrl);
    }

    public getOidcClientState(): string {
        return `:${SSO_ID_KEY}:${this.ssoID}`;
    }

    /**
     * The URL to return to after a successful OIDC authentication
     */
    public getOidcCallbackUrl(): URL {
        const href = window.location.href;
        const urlTchap = href.replace(/^https?/, this.protocol);
        const url = new URL(urlTchap);
        // The redirect URL has to exactly match that registered at the OIDC server, so
        // ensure that the fragment part of the URL is empty.
        url.hash = "";
        url.protocol = this.protocol;
        // Trim the double slash into a single slash to comply with https://datatracker.ietf.org/doc/html/rfc8252#section-7.1
        if (url.href.startsWith(`${url.protocol}//`)) {
            url.href = url.href.replace("://", ":/");
        }
        return url;
    }

    public async getAppVersion(): Promise<string> {
        return await getVersion();
    }

    public getHumanReadableName(): string {
        return "Tauri Platform"; // no translation required: only used for analytics
    }

    public async requestNotificationPermission(): Promise<string> {

        const permissionGranted = await isPermissionGranted();

        if (!permissionGranted) {
            const permission = await requestPermission();
            return permission;
        }

        return Promise.resolve("granted");
    }


    public getDefaultDeviceDisplayName(): string {
        const brand = SdkConfig.get().brand;
        return _t("desktop_default_device_name", {
            brand,
            platformName: platformFriendlyName(),
        });
    }

    public reload(): void {
        window.location.reload();
    }


    public setNotificationCount(count: number): void {
        if (this.notificationCount === count) return;
        console.log("[Tauri plaforme] set notification badge count");
        getCurrentWindow().setBadgeCount(count);
        super.setNotificationCount(count);
        
    }

    public supportsNotifications(): boolean {
        return true;
    }

    public maySendNotifications(): boolean {
        return true;
    }

    public displayNotification(
        title: string,
        msg: string,
        avatarUrl: string,
        room: Room,
        ev?: MatrixEvent,
    ): Notification {
        // GNOME notification spec parses HTML tags for styling...
        // Electron Docs state all supported linux notification systems follow this markup spec
        // https://github.com/electron/electron/blob/master/docs/tutorial/desktop-environment-integration.md#linux
        // maybe we should pass basic styling (italics, bold, underline) through from MD
        // we only have to strip out < and > as the spec doesn't include anything about things like &amp;
        // so we shouldn't assume that all implementations will treat those properly. Very basic tag parsing is done.
        if (navigator.userAgent.includes("Linux")) {
            msg = msg.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }

        const notification = super.displayNotification(title, msg, avatarUrl, room, ev);

        const handler = notification.onclick as () => void;
        notification.onclick = (): void => {
            getCurrentWindow().show();
            handler?.();
        };
        return notification;
    }

    public async loudNotification(ev: MatrixEvent, room: Room): Promise<void> {
        const focused = await getCurrentWindow().isFocused();
        if (!focused) {
            getCurrentWindow().show();
        }
    }

    public checkSessionLockFree(): boolean {
        return true;
    }

    public async getSessionLock(_onNewInstance: () => Promise<void>): Promise<boolean> {
        return true;
    }

    public openAuthorizationInBrowser(authorizationUrl: string): void {
        openUrl(authorizationUrl).then(
            () => {
                Modal.createDialog(Spinner, { message: _t("auth|desktop_waiting_sso")});
            }, 
            (rejected) => {
                console.log("rejected", rejected);
            }
        );;
    }

    public openUrl(uri: string): void {
        openUrl(uri);
    }
}
