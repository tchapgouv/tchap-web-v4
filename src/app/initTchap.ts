import defaultDispatcher from "matrix-react-sdk/src/dispatcher/dispatcher";
import { ActionPayload } from "matrix-react-sdk/src/dispatcher/payloads";
import PlatformPeg from "matrix-react-sdk/src/PlatformPeg";

import TchapClientUtils from "../util/TchapClientUtils";
import TchapUserSettings from "../util/TchapUserSettings";

/**
 * Determine weither the app needs a refresh after loading
 * @param indexedDB the indexDb interface
 * @returns Promise(true) if a refresh is needed, Promise(false) in other cases
 */
export async function doesNeedRefresh(indexedDB: IDBFactory): Promise<boolean> {
    if (!indexedDB) {
        Promise.reject("indexDb is undefined");
    }

    //if tchap version is unknown, refresh
    if (!TchapClientUtils.getAppVersion() === null) {
        return Promise.resolve(true);
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
 * Force refresh after the client has started
 */
export function attachRefreshHandler() {
    const clearCacheAndReloadId = defaultDispatcher.register(
        (payload: ActionPayload) => {
            if (payload.action === "client_started") {
                //unregister callback once the work is done
                defaultDispatcher.unregister(clearCacheAndReloadId);
                //:tchap: use localstorage instead of matric idDB ?
                TchapClientUtils.clearCacheAndReload();
            }
        },
    );
}

/**
 * Save app version to localstorage after the client has started
 */
export function attachHandler() {
    const saveVersionId = defaultDispatcher.register(
        (payload: ActionPayload) => {
            if (payload.action === "client_started") {
                //override user settings
                TchapUserSettings.override();

                //unregister callback once the work is done
                defaultDispatcher.unregister(saveVersionId);
            }
        },
    );
}

export function saveAppVersionInLocalStorage() {
    //:tchap: keep initialising so that we can show any possible error with as many features (theme, i18n) as possible
    TchapClientUtils.saveAppVersion(PlatformPeg.get());
    //end
}
