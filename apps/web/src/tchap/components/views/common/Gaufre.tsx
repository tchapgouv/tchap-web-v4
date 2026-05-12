
import React, { JSX, useEffect, useRef, useState } from 'react'

import ContextMenu, { ChevronFace, alwaysAboveRightOf, useContextMenu } from '~tchap-web/src/components/structures/ContextMenu';
import AccessibleButton from '~tchap-web/src/components/views/elements/AccessibleButton';
import classNames from 'classnames';
import { _t } from '../../../../languageHandler';
import { RovingAccessibleButton } from '~tchap-web/src/accessibility/RovingTabIndex';

const TchapGaufre: React.FC<{
    isPanelCollapsed: boolean;
}> = ({ isPanelCollapsed = false }) => {

    const [menuDisplayed, handle, openMenu, closeMenu] = useContextMenu<HTMLDivElement>();

    // Directly copy the services, no need for api call 
    const lasuiteServices = [
        {
        "id": 1,
        "name": "Tchap",
        "url": "https://tchap.numerique.gouv.fr",
        "maturity": "stable",
        "logo": "https://lasuite.numerique.gouv.fr/assets/products/tchap.svg"
        },
        {
        "id": 2,
        "name": "Docs",
        "url": "https://docs.numerique.gouv.fr/",
        "maturity": "stable",
        "logo": "https://lasuite.numerique.gouv.fr/assets/products/docs.svg"
        },
        {
        "id": 3,
        "name": "Visio",
        "url": "https://visio.numerique.gouv.fr/",
        "maturity": "stable",
        "logo": "https://lasuite.numerique.gouv.fr/assets/products/visio.svg"
        },
        {
        "id": 4,
        "name": "Fichiers",
        "url": "https://fichiers.numerique.gouv.fr/",
        "maturity": "stable",
        "logo": "https://lasuite.numerique.gouv.fr/assets/products/fichiers.svg"
        },
        {
        "id": 5,
        "name": "Grist",
        "url": "https://grist.numerique.gouv.fr/",
        "maturity": "stable",
        "logo": "https://lasuite.numerique.gouv.fr/assets/products/grist.svg"
        },
        {
        "id": 6,
        "name": "Fr. Transfert",
        "url": "https://francetransfert.numerique.gouv.fr/",
        "maturity": "stable",
        "logo": "https://lasuite.numerique.gouv.fr/assets/products/france_transfert.svg"
        },
        {
        "id": 7,
        "name": "Resana",
        "url": "https://resana.numerique.gouv.fr/",
        "maturity": "stable",
        "logo": "https://lasuite.numerique.gouv.fr/assets/products/resana.svg"
        },
        {
        "id": 8,
        "name": "RDV",
        "url": "https://rdv.anct.gouv.fr/",
        "maturity": "stable",
        "logo": "https://lasuite.numerique.gouv.fr/assets/products/rdv.svg"
        },
        {
        "id": 9,
        "name": "Démarche",
        "url": "https://demarche.numerique.gouv.fr/",
        "maturity": "stable",
        "logo": "https://lasuite.numerique.gouv.fr/assets/products/demarches.svg"
        }
    ];

    const LaGauffreIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="tchap-gaufre-fill"><defs><path id="a" fill="currentColor" d="M2.796.5c.469 0 .704 0 .892.064.351.12.627.397.748.748.064.188.064.423.064.892v.592c0 .469 0 .704-.064.892-.12.351-.397.627-.748.748-.188.064-.423.064-.892.064h-.592c-.469 0-.704 0-.892-.064a1.201 1.201 0 0 1-.748-.748C.5 3.5.5 3.265.5 2.796v-.592c0-.469 0-.704.064-.892.12-.351.397-.627.748-.748C1.5.5 1.735.5 2.204.5h.592Z"/></defs><use href="#a"/><use href="#a" transform="translate(6.5)"/><use href="#a" transform="translate(13)"/><use href="#a" transform="translate(0 6.5)"/><use href="#a" transform="translate(6.5 6.5)"/><use href="#a" transform="translate(13 6.5)"/><use href="#a" transform="translate(0 13)"/><use href="#a" transform="translate(6.5 13)"/><use href="#a" transform="translate(13 13)"/></svg>
      )
    // Getting the content of the gaufre from la-suite
    function getLasuiteList() {
        return (
            <div id="tchap-gaufre">
                {lasuiteServices.map((service) => (
                    <RovingAccessibleButton
                        onClick={() => {window.open(service.url, "_blank")}}
                    >
                        <img src={service.logo} alt={`${service.name} logo`} aria-hidden="true"></img>
                        <span> {service.name}</span>
                    </RovingAccessibleButton>
                ))}

            </div>
        );
    }

    let contextMenu: JSX.Element | undefined;

    if (menuDisplayed && handle.current) {
        contextMenu = (
            <ContextMenu
                {...alwaysAboveRightOf(handle.current.getBoundingClientRect(), ChevronFace.None, 16)}
                wrapperClassName="mx_QuickSettingsButton_ContextMenuWrapper"
                onFinished={closeMenu}
                managed={false}
                focusLock={true}
            >
                {getLasuiteList()}   
            </ContextMenu>
        );
    }

    return (
        <>
            <AccessibleButton
                className={classNames(["mx_QuickSettingsButton", { expanded: !isPanelCollapsed }])}
                onClick={openMenu}
                aria-label={_t("lasuite_numerique")}
                title={isPanelCollapsed ? _t("lasuite_numerique") : undefined}
                ref={handle}
                aria-expanded={!isPanelCollapsed}
            >
                <LaGauffreIcon/>
                {!isPanelCollapsed ? _t("lasuite_numerique") : null}
            </AccessibleButton>

            {contextMenu}
        </>
    );
};

export default TchapGaufre;