
import React, { JSX, useEffect, useRef, useState } from 'react'
import '@gouvfr-lasuite/integration/dist/css/gaufre.css';

import ContextMenu, { ChevronFace, alwaysAboveRightOf, useContextMenu } from '~tchap-web/src/components/structures/ContextMenu';
import AccessibleButton from '~tchap-web/src/components/views/elements/AccessibleButton';
import classNames from 'classnames';
import { _t } from '../../../../languageHandler';

const TchapGaufre: React.FC<{
    isPanelCollapsed: boolean;
}> = ({ isPanelCollapsed = false }) => {

    const [menuDisplayed, handle, openMenu, closeMenu] = useContextMenu<HTMLDivElement>();
    const gaufreListElmRef = useRef<HTMLDivElement | null>(null);
    const gaufreContentRef = useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const lasuiteOrigin = "https://integration.lasuite.numerique.gouv.fr"
    const LaGauffreIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="tchap-gaufre-fill"><defs><path id="a" fill="currentColor" d="M2.796.5c.469 0 .704 0 .892.064.351.12.627.397.748.748.064.188.064.423.064.892v.592c0 .469 0 .704-.064.892-.12.351-.397.627-.748.748-.188.064-.423.064-.892.064h-.592c-.469 0-.704 0-.892-.064a1.201 1.201 0 0 1-.748-.748C.5 3.5.5 3.265.5 2.796v-.592c0-.469 0-.704.064-.892.12-.351.397-.627.748-.748C1.5.5 1.735.5 2.204.5h.592Z"/></defs><use href="#a"/><use href="#a" transform="translate(6.5)"/><use href="#a" transform="translate(13)"/><use href="#a" transform="translate(0 6.5)"/><use href="#a" transform="translate(6.5 6.5)"/><use href="#a" transform="translate(13 6.5)"/><use href="#a" transform="translate(0 13)"/><use href="#a" transform="translate(6.5 13)"/><use href="#a" transform="translate(13 13)"/></svg>
      )
    // Getting the content of the gaufre from la-suite
    async function getLasuiteList() {
        try {
            const res = await fetch(`${lasuiteOrigin}/api/v1/gaufre`);
            const html = await res.text();
            // replacing the origin urls explicitly by lasuiteOrigin to fetch the images
            const updatedHtml = html.replace(/(src=|href=|url\()"\//g, `$1"${lasuiteOrigin}/`);
            const parser = new DOMParser();
            const popupDocument = parser.parseFromString(updatedHtml, "text/html");

            // creating an element to put the content retrieved from lasuite
            const gaufreElm = document.createElement("div");
            gaufreElm.innerHTML = popupDocument.body.innerHTML;
            gaufreListElmRef.current = gaufreElm;
            setLoading(false);
        } catch (error) {
            console.error("Error fetching gaufre list:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getLasuiteList()
    }, [])

    useEffect(() => {
        // only display the content if the content was fetched and the menu opened
        if (menuDisplayed && gaufreContentRef.current && gaufreListElmRef.current && !gaufreContentRef.current.innerHTML) {
            gaufreContentRef.current.appendChild(gaufreListElmRef.current);
        }
    }, [menuDisplayed]);


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
                <div id="tchap-gaufre" className="lasuite--gaufre-borderless" ref={gaufreContentRef}>
                </div>
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