/**
 * Tchap UI Feature flags
 */

export default class TchapUIFeature {
    /**
     * This flag controls weither space related settings should be displayed or not. It differs from the flag UIComponent.CreateSpaces.
     * It is intended to add more fine-grained control over spaces disablement.
     */
    static isSpaceDisplayEnabled = false;

    /**
     * This flag controls weither Terms and Conditions should be accepted automatically or not.
     */
    static autoAcceptTermsAndConditions = true;

    /**
     * This flag controls weither Email, Phone and Discovery UI should be displayed or not in General Settings.
     */
    static showEmailPhoneDiscoverySettings = false;

    /**
     * This flag controls weither clearCacheAndReload can be queued at application start at V4 upgrade
     */
    static activateClearCacheAndReloadAtVersion4 = true;
}
