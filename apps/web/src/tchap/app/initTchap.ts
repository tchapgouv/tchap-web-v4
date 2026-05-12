import defaultDispatcher from "~tchap-web/src/dispatcher/dispatcher";
import { ActionPayload } from "~tchap-web/src/dispatcher/payloads";
import PlatformPeg from "~tchap-web/src/PlatformPeg";

import TchapVersionManagement from "../util/TchapVersionManagement";
import TchapUserSettings from "../util/TchapUserSettings";
import ExpiredAccountHandler from "../lib/ExpiredAccountHandler";


/**
 * Force refresh after the client has started
 */
export function queueClearCacheAndReload() {
    const clearCacheAndReloadId = defaultDispatcher.register((payload: ActionPayload) => {
        if (payload.action === "client_started") {
            //unregister callback once the work is done
            defaultDispatcher.unregister(clearCacheAndReloadId);
            //:tchap: use localstorage instead of matric idDB ?
            TchapVersionManagement.clearCacheAndReload();
        }
    });
}

/**
 * Save app version to localstorage after the client has started
 */
export function queueOverideUserSettings() {
    const saveVersionId = defaultDispatcher.register((payload: ActionPayload) => {
        if (payload.action === "client_started") {
            //override user settings
            TchapUserSettings.override();

            //unregister callback once the work is done
            defaultDispatcher.unregister(saveVersionId);
        }
    });
}

export function saveAppVersionInLocalStorage() {
    //:tchap: keep initialising so that we can show any possible error with as many features (theme, i18n) as possible
    TchapVersionManagement.saveAppVersion(PlatformPeg.get());
    //end
}

export function registerExpiredAccountListener() {
    ExpiredAccountHandler.register();
}

export default {
    registerExpiredAccountListener,
    saveAppVersionInLocalStorage,
    queueOverideUserSettings,
    queueClearCacheAndReload,
}