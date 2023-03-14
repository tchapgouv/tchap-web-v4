/**
 * Tchap UI Feature flags
 */

import SdkConfig from "matrix-react-sdk/src/SdkConfig";

export default class TchapUIFeature {
    /**
     * This flag controls weither space related settings should be displayed or not. It differs from the flag UIComponent.CreateSpaces.
     * It is intended to add more fine-grained control over spaces disablement.
     */
    public static isSpaceDisplayEnabled = false;

    /**
     * This flag controls weither Terms and Conditions should be accepted automatically or not.
     */
    public static autoAcceptTermsAndConditions = true;

    /**
     * This flag controls weither Email, Phone and Discovery UI should be displayed or not in General Settings.
     */
    public static showEmailPhoneDiscoverySettings = false;

    /**
     * This flag controls weither clearCacheAndReload can be queued at application start at V4 upgrade
     */
    public static activateClearCacheAndReloadAtVersion4 = true;

    /**
     * This flag controls whether to activate cross-signing and secure storage. It is not static because the MatrixClient 
     * needs to be initialized to access the config.json (where the flag is set)
     */
    public static isCrossSigningAndSecureStorageActive = () : Boolean => {
        //retrieve the feature flag from the config.json features flag section. 
        //beware SdkConfig does not like to be invoked before the MatrixClient is initialized
        const isCrossSigningAndSecureStorageActive =  SdkConfig.get("features")['tchap_activate_cross_signing_and_secure_storage'];
        console.log(":tchap: tchap_activate_cross_signing_and_secure_storage from config.json: ", isCrossSigningAndSecureStorageActive);
        return isCrossSigningAndSecureStorageActive;
    };

    /**
     * This flag activates cross-signing and secure storage. But it also hides the xsss setup toast. 
     * needs to be initialized to access the config.json (where the flag is set)
     */
        public static isCrossSigningSetupToastDisabled = () : Boolean => {
            //retrieve the feature flag from the config.json features flag section. 
            //beware SdkConfig does not like to be invoked before the MatrixClient is initialized
            const isCrossSigningSetupToastDisabled =  SdkConfig.get("features")['tchap_disable_cross_signing_setup_toast'];
            console.log(":tchap: tchap_disable_cross_signing_setup_toast from config.json: ", isCrossSigningSetupToastDisabled);
            return isCrossSigningSetupToastDisabled;
        };

     /**
     * This flag controls whether to force incoming key legacy verification (usefull for older mobile device than android 2.6, ios 2.2.3)
     */
     public static forceLegacyIncomingRoomKeyVerification = true;
}
