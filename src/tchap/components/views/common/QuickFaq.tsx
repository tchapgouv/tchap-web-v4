
import React, { JSX } from 'react';

import { ChevronFace, alwaysAboveRightOf, useContextMenu } from '~tchap-web/src/components/structures/ContextMenu';
import classNames from 'classnames';
import { _t } from '../../../../languageHandler';
import IconizedContextMenu, { IconizedContextMenuOption, IconizedContextMenuOptionList } from '~tchap-web/src/components/views/context_menus/IconizedContextMenu';
import TchapUrls from '../../../util/TchapUrls';
import Modal from '~tchap-web/src/Modal';
import BugReportDialog from '~tchap-web/src/components/views/dialogs/BugReportDialog';
import { IconButton, Tooltip } from '@vector-im/compound-web';
import { HelpSolidIcon } from '@vector-im/compound-design-tokens/assets/web/icons';

const QuickFaqButton: React.FC<{
    isPanelCollapsed: boolean;
}> = ({ isPanelCollapsed = false }) => {

    const [menuDisplayed, handle, openMenu, closeMenu] = useContextMenu<HTMLDivElement>();

    let contextMenu: JSX.Element | undefined;

    if (menuDisplayed && handle.current) {
        contextMenu = (
            <IconizedContextMenu
                {...alwaysAboveRightOf(handle.current.getBoundingClientRect(), ChevronFace.None, 16)}
                className="mx_UserMenu_contextMenu"
                onFinished={closeMenu}
                compact
            >
                <IconizedContextMenuOptionList>
                    <IconizedContextMenuOption
                        className="mx_UserMenu_iconInfo"
                        label={_t("quick_faq|faq")}
                        onClick={(e) => {
                            TchapUrls.openHelper("https://www.tchap.gouv.fr/faq")
                        }}
                    />
                    <IconizedContextMenuOption
                        className="mx_UserMenu_iconMessage"
                        label={_t("quick_faq|contact")}
                        onClick={(e) => {
                            TchapUrls.openHelper("mailto:support@tchap.beta.gouv.fr")
                        }}
                    />
                    <IconizedContextMenuOption
                        className="mx_UserMenu_iconHome"
                        label={_t("quick_faq|guides")}
                        onClick={(e) => {
                            TchapUrls.openHelper(TchapUrls.helpUserOnboarding)
                        }}
                    />
                    <IconizedContextMenuOption
                        className="mx_UserMenu_iconBug"
                        label={_t("quick_faq|bug")}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                    
                            Modal.createDialog(BugReportDialog);
                            closeMenu(e);
                        }}
                    />
                </IconizedContextMenuOptionList>
            </IconizedContextMenu>
        );
    }

    let button = (
        <IconButton
            aria-label={_t("quick_settings|title")}
            className={classNames("mx_QuickSettingsButton", { expanded: !isPanelCollapsed })}
            onClick={openMenu}
            title={isPanelCollapsed ? _t("quick_settings|title") : undefined}
            ref={handle}
            aria-expanded={!isPanelCollapsed}
            
        >
            <>
                <HelpSolidIcon />
                {/* This is dirty, but we need to add the label to the indicator icon */}
                {!isPanelCollapsed && (
                    <Text className="mx_QuickSettingsButton_label" as="span" size="md" title={_t("common|settings")}>
                        {_t("common|settings")}
                    </Text>
                )}
            </>
        </IconButton>
    );


    if (isPanelCollapsed) {
        button = (
            <Tooltip label={_t("quick_settings|title")} placement="right">
                {button}
            </Tooltip>
        );
    }

    return (
        <> 
            {button}
            {contextMenu}
        </>
    );
};

export default QuickFaqButton;