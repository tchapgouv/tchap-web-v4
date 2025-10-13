import React, { type JSX, type ReactElement } from "react";

import { _t } from "../../../../languageHandler";
import SdkConfig from "~tchap-web/src/SdkConfig";
import TchapUrls from "~tchap-web/src/tchap/util/TchapUrls";

const TchapFooter = (): ReactElement => {
    const brandingConfig = SdkConfig.getObject("branding");
    const links = brandingConfig?.get("auth_footer_links") ?? [
        { text: "Blog", url: "https://element.io/blog" },
        { text: "Mastodon", url: "https://mastodon.matrix.org/@Element" },
        { text: "GitHub", url: "https://github.com/element-hq/element-web" },
    ];
    
    const authFooterLinks: JSX.Element[] = [];
    const authFooterBottomLinks: JSX.Element[] = [];


    for (const linkEntry of links) {
        if (["CGU", "FAQ"].includes(linkEntry.text)) {
            authFooterBottomLinks.push(
                <li className="fr-footer__bottom-item">
                    <a className="fr-footer__bottom-link" target="_blank" rel="noreferrer external" title={linkEntry.text} href={linkEntry.url}>{linkEntry.text}</a>
                </li>
            );
        }
         else {
             authFooterLinks.push(
                 <li className="fr-footer__content-item">
                     <a href={linkEntry.url} title={linkEntry.text} key={linkEntry.text} target="_blank" rel="noreferrer external" className="fr-footer__content-link">
                         {linkEntry.text}
                     </a>
                 </li>
             );
         }
    }
    authFooterBottomLinks.push(
        <li className="fr-footer__bottom-item">
            <a className="fr-footer__bottom-link" href={TchapUrls.helpPrivacyPolicy} target="_blank" rel="noreferrer external">Politique de confidentialité</a>
        </li>
    );

    return (
        <footer className="fr-footer lasuite lasuite-footer" role="contentinfo" id="footer-7475" style={{ marginTop: "1.5rem", padding: "1rem" }}>
            <div className="fr-container lasuite-container">
                <div className="fr-footer__body">
                    <div className="fr-footer__brand">
                        <p className="fr-logo">
                            République
                            <br />Française
                        </p>
                    </div>
                    <div className="fr-footer__content">
                        <p className="fr-footer__content-desc"> {_t("footer|code_source")} </p>
                        <ul className="fr-footer__content-list">
                            {authFooterLinks}
                            <li className="fr-footer__content-item">
                                <a href="https://matrix.org" target="_blank" title="matrix.org" id="footer__content-link-7366" rel="noreferrer external" className="fr-footer__content-link">
                                    {_t("powered_by_matrix")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fr-footer__bottom">
                    <ul className="fr-footer__bottom-list">
                        {authFooterBottomLinks}
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default TchapFooter;
