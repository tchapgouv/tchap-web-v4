/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { logger } from "matrix-js-sdk/src/logger";

import type ExportE2eKeysDialog from "../../../async-components/views/dialogs/security/ExportE2eKeysDialog";
import type ImportE2eKeysDialog from "../../../async-components/views/dialogs/security/ImportE2eKeysDialog";
import { MatrixClientPeg } from "../../../MatrixClientPeg";
import { _t } from "../../../languageHandler";
import Modal from "../../../Modal";
import AccessibleButton from "../elements/AccessibleButton";
import * as FormattingUtils from "../../../utils/FormattingUtils";
import SettingsStore from "../../../settings/SettingsStore";
import SettingsFlag from "../elements/SettingsFlag";
import { SettingLevel } from "../../../settings/SettingLevel";
import SettingsSubsection, { SettingsSubsectionText } from "./shared/SettingsSubsection";

interface IProps {}

interface IState {
    /** The device's base64-encoded Ed25519 identity key, or:
     *
     * * `undefined`: not yet loaded
     * * `null`: encryption is not supported (or the crypto stack was not correctly initialized)
     */
    deviceIdentityKey: string | undefined | null;
}

export default class CryptographyPanel extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        const client = MatrixClientPeg.safeGet();
        const crypto = client.getCrypto();
        if (!crypto) {
            this.state = { deviceIdentityKey: null };
        } else {
            this.state = { deviceIdentityKey: undefined };
            crypto
                .getOwnDeviceKeys()
                .then((keys) => {
                    this.setState({ deviceIdentityKey: keys.ed25519 });
                })
                .catch((e) => {
                    logger.error(`CryptographyPanel: Error fetching own device keys: ${e}`);
                    this.setState({ deviceIdentityKey: null });
                });
        }
    }

    public render(): React.ReactNode {
        const client = MatrixClientPeg.safeGet();
        const deviceId = client.deviceId;
        let identityKey = this.state.deviceIdentityKey;
        if (identityKey === undefined) {
            // Should show a spinner here really, but since this will be very transitional, I can't be doing with the
            // necessary styling.
            identityKey = "...";
        } else if (identityKey === null) {
            identityKey = _t("encryption|not_supported");
        } else {
            identityKey = FormattingUtils.formatCryptoKey(identityKey);
        }

        let importExportButtons: JSX.Element | undefined;
        if (client.getCrypto()) {
            importExportButtons = (
                <div className="mx_CryptographyPanel_importExportButtons">
                    <AccessibleButton kind="primary_outline" onClick={this.onExportE2eKeysClicked}>
                        {_t("settings|security|export_megolm_keys")}
                    </AccessibleButton>
                    <AccessibleButton kind="primary_outline" onClick={this.onImportE2eKeysClicked}>
                        {_t("settings|security|import_megolm_keys")}
                    </AccessibleButton>
                </div>
            );
        }

        let noSendUnverifiedSetting: JSX.Element | undefined;
        if (SettingsStore.canSetValue("blacklistUnverifiedDevices", null, SettingLevel.DEVICE)) {
            noSendUnverifiedSetting = (
                <SettingsFlag
                    name="blacklistUnverifiedDevices"
                    level={SettingLevel.DEVICE}
                    onChange={this.updateBlacklistDevicesFlag}
                />
            );
        }

        /* :TCHAP: change-sections-order-in-security-privacy-settings - redesign the returned component
        return (
            <SettingsSubsection heading={_t("settings|security|cryptography_section")}>
                <SettingsSubsectionText>
                    <table className="mx_CryptographyPanel_sessionInfo">
                        <tbody>
                            <tr>
                                <th scope="row">{_t("settings|security|session_id")}</th>
                                <td>
                                    <code>{deviceId}</code>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">{_t("settings|security|session_key")}</th>
                                <td>
                                    <code>
                                        <strong>{identityKey}</strong>
                                    </code>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </SettingsSubsectionText>
                {importExportButtons}
                {noSendUnverifiedSetting}
            </SettingsSubsection>
        );
        */
        return (
            <SettingsSubsection heading={_t("settings|security|cryptography_section")}> {/* :TCHAP: change-sections-order-in-security-privacy-settings - name changed in translations */}
            <div className="mx_SettingsTab_subsectionText">
                <div>
                    {_t("These keys only apply to the current session.")}
                </div>
                <div>
                    <b>{_t("Please note this is not your recovery code for your automatic backup.")}</b>
                </div>
            </div>
            <details>
                <summary>{_t("common|advanced")}</summary>
                <SettingsSubsectionText>
                    <table className="mx_CryptographyPanel_sessionInfo">
                        <tr>
                            <th scope="row">{_t("settings|security|session_id")}</th>
                            <td>
                                <code>{deviceId}</code>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">{_t("settings|security|session_key")}</th>
                            <td>
                                <code>
                                    <b>{identityKey}</b>
                                </code>
                            </td>
                        </tr>
                    </table>
                </SettingsSubsectionText>
            </details>
            {importExportButtons}
            {noSendUnverifiedSetting}
            </SettingsSubsection>
        );
    }
    // end :TCHAP:

    private onExportE2eKeysClicked = (): void => {
        Modal.createDialogAsync(
            import("../../../async-components/views/dialogs/security/ExportE2eKeysDialog") as unknown as Promise<
                typeof ExportE2eKeysDialog
            >,
            { matrixClient: MatrixClientPeg.safeGet() },
        );
    };

    private onImportE2eKeysClicked = (): void => {
        Modal.createDialogAsync(
            import("../../../async-components/views/dialogs/security/ImportE2eKeysDialog") as unknown as Promise<
                typeof ImportE2eKeysDialog
            >,
            { matrixClient: MatrixClientPeg.safeGet() },
        );
    };

    private updateBlacklistDevicesFlag = (checked: boolean): void => {
        MatrixClientPeg.safeGet().setGlobalBlacklistUnverifiedDevices(checked);
    };
}
