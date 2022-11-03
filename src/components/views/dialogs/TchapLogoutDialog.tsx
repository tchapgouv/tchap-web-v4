/*
Copyright 2018, 2019 New Vector Ltd
Copyright 2020 - 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { ComponentType } from "react";
import { IKeyBackupInfo } from "matrix-js-sdk/src/crypto/keybackup";
import { logger } from "matrix-js-sdk/src/logger";
import Modal from "matrix-react-sdk/src/Modal";
import dis from "matrix-react-sdk/src/dispatcher/dispatcher";
import { _t } from "matrix-react-sdk/src/languageHandler";
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import RestoreKeyBackupDialog from "matrix-react-sdk/src/components/views/dialogs/security/RestoreKeyBackupDialog";
import QuestionDialog from "matrix-react-sdk/src/components/views/dialogs/QuestionDialog";
import BaseDialog from "matrix-react-sdk/src/components/views/dialogs/BaseDialog";
import Spinner from "matrix-react-sdk/src/components/views/elements/Spinner";
// import DialogButtons from "matrix-react-sdk/src/components/views/elements/DialogButtons";

import MultiDeviceImage from "../../../../res/img/tchap/multi-device.svg";
import ExportLogoImage from "../../../../res/img/tchap/export-logo.svg";
import "../../../../res/css/views/dialogs/_TchapLogoutDialog.pcss";

interface IProps {
    onFinished: (success: boolean) => void;
}

interface IState {
    shouldLoadBackupStatus: boolean;
    loading: boolean;
    backupInfo: IKeyBackupInfo;
    error?: string;
}

export default class TchapLogoutDialog extends React.Component<IProps, IState> {
    static defaultProps = {
        onFinished: function() { },
    };

    constructor(props) {
        super(props);

        const cli = MatrixClientPeg.get();
        const shouldLoadBackupStatus =
            cli.isCryptoEnabled() && !cli.getKeyBackupEnabled();

        this.state = {
            shouldLoadBackupStatus: shouldLoadBackupStatus,
            loading: shouldLoadBackupStatus,
            backupInfo: null,
            error: null,
        };

        if (shouldLoadBackupStatus) {
            this.loadBackupStatus();
        }
    }

    private async loadBackupStatus() {
        try {
            const backupInfo =
                await MatrixClientPeg.get().getKeyBackupVersion();
            this.setState({
                loading: false,
                backupInfo,
            });
        } catch (e) {
            logger.log("Unable to fetch key backup status", e);
            this.setState({
                loading: false,
                error: e,
            });
        }
    }

    private onExportE2eKeysClicked = (): void => {
        Modal.createDialogAsync(
            import(
                "matrix-react-sdk/src/async-components/views/dialogs/security/ExportE2eKeysDialog"
            ) as unknown as Promise<ComponentType<{}>>,
            {
                matrixClient: MatrixClientPeg.get(),
            },
        );
    };

    private onFinished = (confirmed: boolean): void => {
        if (confirmed) {
            dis.dispatch({ action: "logout" });
        }
        // close dialog
        this.props.onFinished(confirmed);
    };

    private onSetRecoveryMethodClick = (): void => {
        if (this.state.backupInfo) {
            // A key backup exists for this account, but the creating device is not
            // verified, so restore the backup which will give us the keys from it and
            // allow us to trust it (ie. upload keys to it)
            Modal.createDialog(
                RestoreKeyBackupDialog,
                null,
                null,
                /* priority = */ false,
                /* static = */ true,
            );
        } else {
            Modal.createDialogAsync(
                import(
                    "matrix-react-sdk/src/async-components/views/dialogs/security/CreateKeyBackupDialog"
                ) as unknown as Promise<ComponentType<{}>>,
                null,
                null,
                /* priority = */ false,
                /* static = */ true,
            );
        }

        // close dialog
        this.props.onFinished(true);
    };

    private onLogoutConfirm = (): void => {
        dis.dispatch({ action: "logout" });

        // close dialog
        this.props.onFinished(true);
    };

    helpUrl = "https://tchap.beta.gouv.fr/faq#tcq05_001";

    render() {
        if (this.state.shouldLoadBackupStatus) {
            // const description = (
            //     <div>
            //         <p>
            //             { _t(
            //                 "Encrypted messages are secured with end-to-end encryption. " +
            //                 "Only you and the recipient(s) have the keys to read these messages.",
            //             ) }
            //         </p>
            //         <p>
            //             { _t(
            //                 "When you sign out, these keys will be deleted from this device, " +
            //                 "which means you won't be able to read encrypted messages unless you " +
            //                 "have the keys for them on your other devices, or backed them up to the " +
            //                 "server.",
            //             ) }
            //         </p>
            //         <p>
            //             { _t(
            //                 "Back up your keys before signing out to avoid losing them.",
            //             ) }
            //         </p>
            //     </div>
            // );

            let dialogContent;
            if (this.state.loading) {
                dialogContent = <Spinner />;
            } else {
                let setupButtonCaption;
                if (this.state.backupInfo) {
                    setupButtonCaption = _t(
                        "Connect this session to Key Backup",
                    );
                } else {
                    // if there's an error fetching the backup info, we'll just assume there's
                    // no backup for the purpose of the button caption
                    setupButtonCaption = _t("Start using Key Backup");
                }

                dialogContent = (
                    <div>
                        <div
                            className="mx_Dialog_content"
                            id="mx_Dialog_content"
                        >
                            <div>
                                <p>
                                    { _t(
                                        "<b>Without your Tchap Keys, you won't be able to read your messages</b> at your next login because they will be locked. It's a Tchap safety measure.",
                                        {},
                                        {
                                            b: (sub) => <b>{ sub }</b>,
                                            requestLink: (sub) => (
                                                <a
                                                    target="_blank"
                                                    rel="noopener"
                                                    href={this.helpUrl}
                                                >
                                                    { sub }
                                                </a>
                                            ),
                                        },
                                    ) }
                                </p>
                            </div>
                            <div className="tc_TwoColumn_block">
                                <div className="tc_TwoColumn_block_content">
                                    <div className="tc_TwoColumn_block_image">
                                        <img
                                            src={MultiDeviceImage}
                                            alt="Login logo"
                                            width="120"
                                        />
                                    </div>
                                    <p>
                                        { _t(
                                            "<b>Can you currently read your messages on another device?</b> You can disconnect. This other device automatically backs up your Tchat Keys and messages.",
                                            {},
                                            {
                                                b: (sub) => <b>{ sub }</b>,
                                            },
                                        ) }
                                    </p>
                                    <button
                                        className="danger"
                                        onClick={this.onLogoutConfirm}
                                    >
                                        { _t("Sign me out") }
                                    </button>
                                </div>
                                <div className="tc_TwoColumn_block_content">
                                    <div className="tc_TwoColumn_block_image">
                                        <img
                                            src={ExportLogoImage}
                                            alt="Export logo"
                                            width="70"
                                        />
                                    </div>
                                    <p>
                                        { _t(
                                            "<b>You don't have another device connected to Tchap?</b> Back up your Tchap Keys. These keys will unlock current messages, but not those received after saving.",
                                            {},
                                            {
                                                b: (sub) => <b>{ sub }</b>,
                                            },
                                        ) }
                                    </p>
                                    <button
                                        className="mx_Dialog_primary"
                                        onClick={this.onExportE2eKeysClicked}
                                    >
                                        { _t("Save my keys") }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            // Not quite a standard question dialog as the primary button cancels
            // the action and does something else instead, whilst non-default button
            // confirms the action.
            return (
                <BaseDialog
                    title={_t("Save your Tchap Keys before logging out")}
                    contentId="mx_Dialog_content"
                    hasCancel={true}
                    onFinished={this.onFinished}
                >
                    { dialogContent }
                </BaseDialog>
            );
        } else {
            return (
                <QuestionDialog
                    hasCancelButton={true}
                    title={_t("Sign out")}
                    description={_t("Are you sure you want to sign out?")}
                    button={_t("Sign out")}
                    onFinished={this.onFinished}
                />
            );
        }
    }
}
