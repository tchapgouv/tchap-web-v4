/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { useCallback } from "react";
import { InlineField, InlineSpinner, Label, Link, Root, ToggleControl } from "@vector-im/compound-web";

import type { FormEvent } from "react";
import { SettingsSection } from "../shared/SettingsSection";
import { _t } from "../../../../languageHandler";
import { SettingsHeader } from "../SettingsHeader";
import { useKeyStoragePanelViewModel } from "../../../viewmodels/settings/encryption/KeyStoragePanelViewModel";
import SdkConfig from "../../../../SdkConfig";

import TchapUrls from "~tchap-web/src/tchap/util/TchapUrls";
import { useMatrixClientContext } from "~tchap-web/src/contexts/MatrixClientContext";
import { useAsyncMemo } from "~tchap-web/src/hooks/useAsyncMemo";

// :TCHAP: taken from recovery panel
/**
 * The possible states of the recovery panel.
 * - `loading`: We are checking the recovery key and the secrets.
 * - `missing_recovery_key`: The user has no recovery key.
 * - `good`: The user has a recovery key and the secrets are cached.
 */
type State = "loading" | "missing_recovery_key" | "good";
// end :TCHAP:
interface Props {
    /**
     * Called when the user turns off the "allow key storage" toggle
     */
    onKeyStorageDisableClick: () => void;
}

/**
 * This component allows the user to set up or change their recovery key.
 *
 * It is used within the "Encryption" settings tab.
 */
export const KeyStoragePanel: React.FC<Props> = ({ onKeyStorageDisableClick }) => {
    const { isEnabled, setEnabled, loading, busy } = useKeyStoragePanelViewModel();

    // :TCHAP: move this check from recoverypanel to here, since the section have been fused
    const matrixClient = useMatrixClientContext();
    
    const state = useAsyncMemo<State>(
        async () => {
            // Check if the user has a recovery key
            const hasRecoveryKey = Boolean(await matrixClient.secretStorage.getDefaultKeyId());
            if (hasRecoveryKey) return "good";
            else return "missing_recovery_key";
        },
        [matrixClient],
        "loading",
    );

    const isMissingRecoveryKey = state === "missing_recovery_key";

    const onKeyBackupChange = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            if (e.currentTarget.checked) {
                setEnabled(true);
            } else {
                onKeyStorageDisableClick();
            }
        },
        [setEnabled, onKeyStorageDisableClick],
    );

    if (loading) {
        return <InlineSpinner aria-label={_t("common|loading")} />;
    }

    return (
        <SettingsSection
            legacy={false}
            heading={
                <SettingsHeader
                // :TCHAP: hasRecommendedTag={isEnabled === false}
                    hasRecommendedTag={isEnabled === false || isMissingRecoveryKey}
                    label={_t("settings|encryption|key_storage|title")}
                />
            }
            subHeading={_t("settings|encryption|key_storage|description", undefined, {
                // :TCHAP:
                // a: (sub) => (
                // <Link href={SdkConfig.get("help_key_storage_url")} target="_blank">
                //         {sub}
                //     </Link>
                // ),
                a: (sub) => (
                    <Link href={TchapUrls.helpSecureStorage} target="_blank">
                        {sub}
                    </Link>
                ),
                // end :TCHAP:
            })}
        >
            <Root className="mx_KeyStoragePanel_toggleRow">
                <InlineField
                    name="keyStorage"
                    control={<ToggleControl name="keyStorage" checked={isEnabled} onChange={onKeyBackupChange} />}
                >
                    <Label>{_t("settings|encryption|key_storage|allow_key_storage")}</Label>
                </InlineField>
                {busy && <InlineSpinner />}
            </Root>
        </SettingsSection>
    );
};
