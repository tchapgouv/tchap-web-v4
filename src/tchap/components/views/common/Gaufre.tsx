
import React, { JSX, useEffect, useRef, useState } from 'react'
import '@gouvfr-lasuite/integration/dist/css/gaufre.css';

import AccessibleButton from '~tchap-web/src/components/views/elements/AccessibleButton';
import classNames from 'classnames';
import { _t } from '../../../../languageHandler';

const TchapGaufre: React.FC<{
    isPanelCollapsed: boolean;
}> = ({ isPanelCollapsed = false }) => {

    const widgetPath = "https://static.suite.anct.gouv.fr/widgets/";
    const apiUrl = "https://lasuite.numerique.gouv.fr/api/services";
    const buttonRef = useRef<HTMLButtonElement>(null);
    const label: string = "Autres";
    const closeLabel: string = "Close the menu";
    const [isWidgetInitialized, setIsWidgetInitialized] = useState(false)

    const LaGauffreIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="tchap-gaufre-fill"><defs><path id="a" fill="currentColor" d="M2.796.5c.469 0 .704 0 .892.064.351.12.627.397.748.748.064.188.064.423.064.892v.592c0 .469 0 .704-.064.892-.12.351-.397.627-.748.748-.188.064-.423.064-.892.064h-.592c-.469 0-.704 0-.892-.064a1.201 1.201 0 0 1-.748-.748C.5 3.5.5 3.265.5 2.796v-.592c0-.469 0-.704.064-.892.12-.351.397-.627.748-.748C1.5.5 1.735.5 2.204.5h.592Z"/></defs><use href="#a"/><use href="#a" transform="translate(6.5)"/><use href="#a" transform="translate(13)"/><use href="#a" transform="translate(0 6.5)"/><use href="#a" transform="translate(6.5 6.5)"/><use href="#a" transform="translate(13 6.5)"/><use href="#a" transform="translate(0 13)"/><use href="#a" transform="translate(6.5 13)"/><use href="#a" transform="translate(13 13)"/></svg>
      )
    
    // Initialize widget on component mount
    useEffect(() => {
        if (typeof window == "undefined" || !widgetPath || !apiUrl) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any)._tchap_gaufre = (window as any)._tchap_gaufre || [];

        // Construct script URLs from the base path
        const feedbackScript = `${widgetPath}lagaufre.js`;

        // Load the loader script if not already loaded
        if (!document.querySelector(`script[src="${feedbackScript}"]`)) {
            const script = document.createElement("script");
            script.async = true;
            script.src = feedbackScript;
            const firstScript = document.getElementsByTagName("script")[0];
            if (firstScript && firstScript.parentNode) {
                firstScript.parentNode.insertBefore(script, firstScript);
            }
        }

        // Initialize the widget
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any)._tchap_gaufre.push([
        "lagaufre",
        "init",
        {
            api: apiUrl,
            label: label,
            closeLabel: closeLabel,
            headerLabel: 'À propos',
            backgroundColor: '#fff',
            background:
              'linear-gradient(#f1f2fd, rgba(255, 255, 255, 1) 20.54%, #FFF 0%',
            headerLogo: '/assets/lasuite.svg',
            headerUrl: 'https://lasuite.numerique.gouv.fr',
            loadingText: 'Chargement…',
            newWindowLabelSuffix: ' (nouvelle fenêtre)',
            fontFamily: 'Marianne',
            buttonElement: buttonRef,
            viewMoreLabel: "View more",
            viewLessLabel: "View less",
            position: () => {
              const button = document.getElementById('gaufre_button')
              if (!button) return { position: 'absolute', top: 0, left: 0 }

              const rect = button.getBoundingClientRect()

              return {
                position: 'absolute',
                top: rect.bottom + window.scrollY + 8, // 8px sous le bouton
                right: window.innerWidth - rect.right - window.scrollX,
                backgroundColor: '#fff',
              }
            },
          },
        ]);

        setIsWidgetInitialized(true);
    }, [apiUrl, widgetPath, label, closeLabel]);

    const toggleWidget = () => {
        if (!isWidgetInitialized) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any)._tchap_gaufre.push([
        "lagaufre",
        "toggle"
        ]);
    }

    return (
        <>
            <AccessibleButton
                id="gaufre_button"
                className={classNames(["mx_QuickSettingsButton"])}
                onClick={toggleWidget}
                aria-label={_t("lasuite_numerique")}
                title={_t("lasuite_numerique")}
                ref={buttonRef}
            >
                <LaGauffreIcon/>
            </AccessibleButton>
        </>
    );
};

export default TchapGaufre;