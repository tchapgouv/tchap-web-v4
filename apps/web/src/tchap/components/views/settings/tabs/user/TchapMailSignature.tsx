import React, { useState } from 'react';
import { SettingsSubsection, SettingsSubsectionText } from '~tchap-web/src/components/views/settings/shared/SettingsSubsection';
import { _t } from "~tchap-web/src/languageHandler";
import TchapUrls from '~tchap-web/src/tchap/util/TchapUrls';
import PosthogTrackers, { InteractionName } from '~tchap-web/src/PosthogTrackers';
import AccessibleButton, { ButtonEvent } from '~tchap-web/src/components/views/elements/AccessibleButton';
import classNames from 'classnames';

interface TchapMailSignatureProps {
    userPermalink: string
}

/**
 * Generates the HTML signature for Tchap mail
 */
export const generateSignatureHtml = (userPermalink: string): string => {
    return `
        <table cellpadding="0" width="350" style="border-collapse:collapse;font-size:12.1px;color:#222222;">
            <tr>
                <td style="margin:0.1px;padding:0;">
                    <table cellpadding="0" style="border-collapse:collapse;">
                        <tr>
                            <td valign="top" style="margin:0px;padding:0 10px 0 0;">
                                <img src="https://www.tchap.gouv.fr/vector-icons/120.png" width="50" style="display:block;min-width:50px;" alt="Tchap">
                            </td>
                            <td style="margin:0px;padding:0 10px 0 0;" valign="top">
                                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                    <tr>
                                        <td style="margin:0px;padding:0;font:15px/19px Arial, Helvetica, sans-serif;color:#000091; font-weight: bold;">
                                            <a style="sans-serif;color:#000091; font-weight: bold; text-decoration: none;" href="${userPermalink}">Contactez-moi sur Tchap</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="margin:0px;padding:1px 0;font:12.1px/15.3px Arial, Helvetica, sans-serif;color:#000001;">
                                            <span>La messagerie instantan&eacute;e du secteur public.<br></span>
                                            <span>Disponible via <a style="color:#222222;" href="https://www.tchap.gouv.fr/">tchap.gouv.fr</a> et sur app mobiles.</span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    `;
};

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    getElementToCopy: () => Element | null;
    border?: boolean;
    className?: string;
}

// This is based on the CopyText component from Element Web, but we don't  want to copy plain html, so we need to override the default behavior
export const CopyBrutButton: React.FC<Pick<IProps, "getElementToCopy" | "className">> = ({ getElementToCopy, className }) => {
    const [tooltip, setTooltip] = useState<string | undefined>(undefined);

    const onCopyClickInternal = async (e: ButtonEvent): Promise<void> => {
        e.preventDefault();
        const signatureElement = getElementToCopy();
        let successful = false;
        
        if (signatureElement) {
            try {
                const htmlContent = signatureElement.innerHTML.trim();
                await navigator.clipboard.write([
                    new ClipboardItem({
                        'text/html': new Blob([htmlContent], { type: 'text/html' }),
                        'text/plain': new Blob([signatureElement.textContent || ''], { type: 'text/plain' })
                    })
                ]);
                successful = true;
            } catch (err) {
                console.error("Failed to copy:", err);
            }
        }
        
        setTooltip(successful ? _t("common|copied") : _t("error|failed_copy"));
    };

    const onHideTooltip = (): void => {
        if (tooltip) {
            setTooltip(undefined);
        }
    };

    return (
        <AccessibleButton
            title={tooltip ?? _t("action|copy")}
            onClick={onCopyClickInternal}
            className={className}
            onTooltipOpenChange={(open) => {
                if (!open) onHideTooltip();
            }}
        />
    );
};

const CopyableBrut: React.FC<IProps> = ({ children, getElementToCopy, border = true, className, ...props }) => {
    const combinedClassName = classNames("mx_CopyableText", className, {
        mx_CopyableText_border: border,
    });

    return (
        <div className={combinedClassName} {...props}>
            {children}
            <CopyBrutButton getElementToCopy={getElementToCopy} className="mx_CopyableText_copyButton" />
        </div>
    );
};



/**
 * A copyable mail signature html bloc to add in emails
 */
const TchapMailSignature: React.FC<TchapMailSignatureProps> = (props) => {
    const signatureHtmlCopy = () : Element | null => {
        PosthogTrackers.trackInteraction("WebTchapMailSignatureButton" as InteractionName);
        
        const signatureElement = document.querySelector('.mx_TchapMailSignature');
        
        return signatureElement;
    }

    return <SettingsSubsection
            heading={_t("settings|general|mail_signature")}
            stretchContent>
                <div className="mx_SettingsSubsection_description">
                    <span>{_t("settings|general|mail_signature_description")}</span>
                    <SettingsSubsectionText>
                        {_t("settings|general|mail_signature_detail", {}, {
                            a: (sub) => (<a 
                            href={TchapUrls.helpMailSignature}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label='link to tchap'
                            role="link"
                            >{sub}</a>)
                        })}
                    </SettingsSubsectionText>
                </div>
                <CopyableBrut getElementToCopy={signatureHtmlCopy} aria-labelledby={"mail-signature"}>
                    <div className="mx_TchapMailSignature" dangerouslySetInnerHTML={{ __html: generateSignatureHtml(props.userPermalink) }} />
                </CopyableBrut>
            </SettingsSubsection>
}

export default TchapMailSignature;