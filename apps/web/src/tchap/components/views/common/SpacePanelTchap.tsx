
import React from 'react'

import AccessibleButton from '~tchap-web/src/components/views/elements/AccessibleButton';
import classNames from 'classnames';
import { _t } from '../../../../languageHandler';

const SpacePanelTchap: React.FC<{
    isPanelCollapsed: boolean;
}> = ({ isPanelCollapsed = false }) => {

    return (
        <>
            <AccessibleButton
                className={classNames(["tc_sidebar_tchap", { expanded: !isPanelCollapsed }, "tc_sidebar_tchap_icon"])}
                onClick={() => window.location.assign("#/home")}
                aria-label="Tchap"
                title={isPanelCollapsed ? "Tchap": undefined}
                aria-expanded={!isPanelCollapsed}
            >
                {!isPanelCollapsed ? "Tchap" : null}
            </AccessibleButton>
        </>
    );
};

export default SpacePanelTchap;