export default class TchapUrls {
    //url to request the opening of a new domain on Tchap
    public static requestDomainUrl = "https://www.demarches-simplifiees.fr/commencer/utiliser-tchap";

    //shorcut to secure backup page https://tchap.gouv.fr/#/sauvegarde-automatique
    public static secureBackupFragment =  "sauvegarde-automatique";

    //tchap status page
    public static statusPage =  "https://status.tchap.numerique.gouv.fr"

    //tchap FAQ page on locked messages. Should redirect to the appropriate crisp page on https://aide.tchap.beta.gouv.fr
    public static lockedMessagesPage = "https://tchap.beta.gouv.fr/faq/messages-verrouilles";
}
