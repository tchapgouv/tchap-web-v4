/**
 * Tchap UI Feature flags
 */

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
     * This flag controls whether to activate cross-signing and secure storage.
     */
    public static isCrossSigningAndSecureStorageActive = true;

     /**
     * This flag controls whether to force incoming key legacy verification (usefull for older mobile device than android 2.6, ios 2.2.3)
     */
     public static forceLegacyIncomingRoomKeyVerification = false;
}
