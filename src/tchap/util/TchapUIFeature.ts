/**
 * Tchap UI Feature flags
 */

import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import SdkConfig from "matrix-react-sdk/src/SdkConfig";

export default class TchapUIFeature {
    /**
     * This flag controls weither space related settings should be displayed or not. It differs from the flag UIComponent.CreateSpaces.
     * It is intended to add more fine-grained control over spaces disablement.
     */
    public static isSpaceDisplayEnabled = true;

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
        get list of homeserver where the feature should be activated from config.json
        example
         for feature : feature_email_notification 
         add this in config.json
         {..
         "tchap":{
                "feature_email_notification": ["agent1.tchap.incubateur.net"]
            }
            ..
        }
    */
    public static isFeatureActiveForHomeserver(feature:string):boolean {        
        
        const activatedHomeserver:[string] = SdkConfig.get("tchap")?.[feature] || [];
        
        //compare if user is on a listed homeserver
        const userHomeServer = MatrixClientPeg.getHomeserverName();
        return activatedHomeserver.includes(userHomeServer);
    }


}
