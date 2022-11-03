import BasePlatform from "matrix-react-sdk/src/BasePlatform";
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import PlatformPeg from "matrix-react-sdk/src/PlatformPeg";

export default class TchapClientUtils {
    static SYNC_STORE_NAME = "matrix-js-sdk:riot-web-sync";

    /**
     * Determine weither the app needs a refresh after loading
     * @param indexedDB the indexDb interface
     * @returns Promise(true) if a refresh is needed, Promise(false) in other cases
     */
    public static async doesNeedRefresh(indexedDB: IDBFactory): Promise<boolean> {
        if (!indexedDB) {
            Promise.reject("indexDb is undefined");
        }
        //read version of tchap app in localstorage, if it does start with 4, don't refresh
        if (TchapClientUtils.getAppVersion() && TchapClientUtils.getAppVersion().startsWith("4")) {
            return Promise.resolve(false);
        }

        try {
            //read version of matrix-js-sdk:riot-web-sync, if it is older than version 4, refresh is needed
            const version = await TchapClientUtils.getStoreVersion(indexedDB, TchapClientUtils.SYNC_STORE_NAME);
            return Promise.resolve(version < 4);
        } catch (error) {
            //if store did not exists or a technical error occured do not refresh (safety first)
            console.warn(error);
            return Promise.resolve(false);
        }
    }

    /**
     * replicate the behaviour of the button Clear Cache and Reload
    * https://github.com/matrix-org/matrix-react-sdk/blob/3c5c2bef6dbac51ce6e1864056523815ca4c38d9/src/components/views/settings/tabs/user/HelpUserSettingsTab.tsx#L308
     * @returns nothing
     */
    public static clearCacheAndReload(): void {
        console.log(":TCHAP: clearCacheAndReload at client startup");

        if (!PlatformPeg.get()) return;

        MatrixClientPeg.get().stopClient();
        MatrixClientPeg.get().store.deleteAllData().then(() => {
            PlatformPeg.get().reload();
        });
    }

    /**
     * Retrieve the version of the store
     * inspired of https://github.com/matrix-org/matrix-js-sdk/blob/aa5a34948aac9795c4fe4d3c8f6c6ead04b58b61/src/indexeddb-helpers.ts#L25
     * @param indexedDB indexedDB object
     * @param dbName name of the store
     * @returns Promise of a version
     */
    public static getStoreVersion(indexedDB: IDBFactory, dbName: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            let exists = true;
            const req = indexedDB.open(dbName);
            req.onupgradeneeded = () => {
                // Since we did not provide an explicit version when opening, this event
                // should only fire if the DB did not exist before at any version.
                exists = false;
            };
            req.onblocked = () => reject(req.error);
            req.onsuccess = () => {
                const db = req.result;
                const version: number = db.version;
                db.close();
                if (!exists) {
                    // The DB did not exist before, but has been created as part of this
                    // existence check. Delete it now to restore previous state. Delete can
                    // actually take a while to complete in some browsers, so don't wait for
                    // it. This won't block future open calls that a store might issue next to
                    // properly set up the DB.
                    indexedDB.deleteDatabase(dbName);
                    reject("db did not exists");
                }
                resolve(version);
            };
            req.onerror = ev => reject(req.error);
        });
    }

    static VERSION_APP_KEY = "tchap_app_version";

    public static async saveAppVersion(platform: BasePlatform) {
        const localStorage = window.localStorage;
        if (localStorage) {
            const version: string = await platform.getAppVersion();
            localStorage.setItem(TchapClientUtils.VERSION_APP_KEY, version);
        }
    }

    public static getAppVersion(): string {
        const localStorage = window.localStorage;
        return localStorage && localStorage.getItem(TchapClientUtils.VERSION_APP_KEY);
    }
}
