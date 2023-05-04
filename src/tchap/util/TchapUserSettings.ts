import { SettingLevel } from "matrix-react-sdk/src/settings/SettingLevel";
import SettingsStore from "matrix-react-sdk/src/settings/SettingsStore";

import TchapUIFeature from "./TchapUIFeature";

export default class TchapUserSettings {
    /**
     * Override User Settings
     */
    public static override() {
        if (!TchapUIFeature.isCrossSigningAndSecureStorageActive()) {
            //hard code this option in to order to hide secure storage in the user info > sessions panel
            console.log(":tchap: hardcode e2ee.manuallyVerifyAllSessions to true");
            SettingsStore.setValue("e2ee.manuallyVerifyAllSessions", null, SettingLevel.DEVICE, true);
        }
    }
}
