import React, { useEffect, useState } from 'react';
import LabelledToggleSwitch from 'matrix-react-sdk/src/components/views/elements/LabelledToggleSwitch';
import SettingsSubsection from 'matrix-react-sdk/src/components/views/settings/shared/SettingsSubsection';
import { _t } from "matrix-react-sdk/src/languageHandler";
import TchapUtils from '../../../../../util/TchapUtils';

interface TchapRedListSettingsProps {
}

/**
 * A group of settings views to allow the user to set their profile information.
 */
const TchapRedListSettings: React.FC<TchapRedListSettingsProps> = () => {

    const [isOnRedList, setIsOnRedList] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchInitialRedListValue = async () => {
            const initialValue = await TchapUtils.getUserRedListInfo();
            console.log("initialRedListValue", initialValue);
            setIsOnRedList(initialValue);
        }
        fetchInitialRedListValue();
    }, []);

    const _onRedlistOptionChange = async (checked: boolean) => {
        try {
            if (!loading) {
                setLoading(true)
                await TchapUtils.setUserRedListInfo(checked);
                setIsOnRedList(checked);
            }
            setLoading(false)
        } catch (err) {
            console.error("Error setting AccountData 'im.vector.hide_profile': " + err);
            setIsOnRedList(!checked); // return to initial state because of error
            setLoading(false)
        }
    }

    return <SettingsSubsection
            heading={_t("settings|general|redlist")}
            stretchContent>
                <LabelledToggleSwitch value={isOnRedList}
                    onChange={(checked: boolean) => _onRedlistOptionChange(checked)}
                    label={_t('settings|general|redlist_title')}
                    disabled={loading}
                    />
                <p className="mx_SettingsTab_subsectionText">
                    ({_t("settings|general|redlist_description")})
                </p>
            </SettingsSubsection>
}

export default TchapRedListSettings;