import defaultDispatcher from "matrix-react-sdk/src/dispatcher/dispatcher";
import { ActionPayload } from "matrix-react-sdk/src/dispatcher/payloads";
import PlatformPeg from "matrix-react-sdk/src/PlatformPeg";

import TchapClientUtils from "../util/TchapClientUtils";
import TchapUserSettings from "../util/TchapUserSettings";

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
export function attachVersionAppHandler() {
    const saveVersionId = defaultDispatcher.register(
        (payload: ActionPayload) => {
            if (payload.action === "client_started") {
                //override user settings
                TchapClientUtils.saveAppVersion(PlatformPeg.get());
                //unregister callback once the work is done
                defaultDispatcher.unregister(saveVersionId);
            }
        },
    );
}
/**
 * Override user settings after the client has started
 */
export function attachOverideUsersOptionHandler() {
    const registerId = defaultDispatcher.register(
        (payload: ActionPayload) => {
            if (payload.action === "client_started") {
                //override user settings
                TchapUserSettings.override();
                //unregister callback once the work is done
                defaultDispatcher.unregister(registerId);
            }
        },
    );
}
