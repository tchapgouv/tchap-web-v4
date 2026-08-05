import PlatformPeg from "~tchap-web/src/PlatformPeg";

export default class TchapUrls {
    //url to request the opening of a new domain on Tchap
    public static requestDomainUrl = "https://www.demarches-simplifiees.fr/commencer/utiliser-tchap";

    //shorcut to secure backup page https://tchap.gouv.fr/#/sauvegarde-automatique
    public static secureBackupFragment = "sauvegarde-automatique";

    //tchap status page
    public static statusPage = "https://status.tchap.numerique.gouv.fr";

    // tchap help base url
    public static helpBaseUrl = "https://aide.tchap.numerique.gouv.fr";

    //tchap FAQ page on locked messages.
    public static lockedMessagesPage = `${TchapUrls.helpBaseUrl}/fr/article/dechiffrement-en-cours-mes-messages-restent-verrouilles-atnp15/`;

    // help page to verify decices, used
    public static helpVerifyDevicesPage = `${TchapUrls.helpBaseUrl}/fr/article/comment-verifier-un-nouvel-appareil-sur-tchap-xm0b0y/`;

    // help page for notification by email
    public static helpEmailNotification = `${TchapUrls.helpBaseUrl}/fr/article/notification-par-email-draft-6k7k89/`;

    // help create space
    public static helpCreateSpace = `${TchapUrls.helpBaseUrl}/fr/article/comment-creer-un-espace-sur-tchap-1wmlenx`;

    // help user onboarding
    public static helpUserOnboarding = `${TchapUrls.helpBaseUrl}/fr/article/guide-de-prise-en-main-de-tchap-oswyn1/`;

    // help manually import tchap keys
    public static helpManuallyImportKeys = `${TchapUrls.helpBaseUrl}/fr/article/comment-importer-manuellement-mes-cles-tchap-cles-de-chiffrement-web-xh376r`;

    public static helpProconnectInstances = `${TchapUrls.helpBaseUrl}/fr/article/se-connecter-a-tchap-avec-proconnect-1dh1peg`;

    public static helpMailSignature = `${TchapUrls.helpBaseUrl}/fr/article/comment-parametrer-ma-signature-mail-avec-un-lien-vers-tchap-7qyhfa/?bust=1741184944276`;

    public static helpSecureStorage = `${TchapUrls.helpBaseUrl}/fr/article/comment-activer-la-sauvegarde-automatique-des-messages-3gaarx/`;

    public static landingPage = "https://tchap.numerique.gouv.fr";

    public static helpPrivacyPolicy = `https://tchap.numerique.gouv.fr/politique-de-confidentialite/`;

    public static helpReinitializeSC = `${TchapUrls.helpBaseUrl}/fr/article/reinitialisation-de-la-securite-des-appareils-1p8tsp9`;

    public static helpPopupSC = `${TchapUrls.helpBaseUrl}/fr/article/popup-persistante-demandant-le-code-de-recuperation-169ogzh/`;

    public static helpCreateRoom = `${TchapUrls.helpBaseUrl}/fr/article/comment-creer-un-salon-web-11abmcr/`;

    public static helpSearchMessage = `${TchapUrls.helpBaseUrl}/fr/article/tchap-windows-recherche-dans-un-salon-prive-6s153i/`;

    public static openHelper = (uri: string) => {
        const platform = PlatformPeg.get();
        if (platform) {
            platform.openUrl(uri);
        } else {
            window.open(uri, "_blank");
        }
    };
}

export enum TCHAP_AVAILABLE_LINK {
    PRIVACY_POLICY = "helpPrivacyPolicy",
    HELP_INIT_SC = "helpReinitializeSC",
    HELP_POPUP_PERSISTENT = "helpPopupSC",
}
