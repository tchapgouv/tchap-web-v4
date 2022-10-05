import { SettingLevel } from "matrix-react-sdk/src/settings/SettingLevel";
import SettingsStore from "matrix-react-sdk/src/settings/SettingsStore";

export default class TchapUserSettings {
    /**
     * Override User Settings
     */
    public static override() {
        console.log(":tchap: hardcode e2ee.manuallyVerifyAllSessions to true");
        SettingsStore.setValue('e2ee.manuallyVerifyAllSessions', null, SettingLevel.DEVICE, true);
    }
}
