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
import Modal from "matrix-react-sdk/src/Modal";
import dis from "matrix-react-sdk/src/dispatcher/dispatcher";
import { _t } from "matrix-react-sdk/src/languageHandler";
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import BaseDialog from "matrix-react-sdk/src/components/views/dialogs/BaseDialog";

import MultiDeviceImage from "../../../../res/img/tchap/multi-device.svg";
import ExportLogoImage from "../../../../res/img/tchap/export-logo.svg";
import "../../../../res/css/views/dialogs/_TchapLogoutDialog.pcss";

interface IProps {
    onFinished: (success: boolean) => void;
}

export default class TchapLogoutDialog extends React.Component<IProps> {
    static defaultProps = {
        onFinished: function () {},
    };

    constructor(props) {
        super(props);
    }

    private onExportE2eKeysClicked = (): void => {
        Modal.createDialogAsync(
            import(
                "matrix-react-sdk/src/async-components/views/dialogs/security/ExportE2eKeysDialog"
            ) as unknown as Promise<ComponentType<{}>>,
            {
                matrixClient: MatrixClientPeg.get(),
                allowLogout: true,
                onFinished: () => this.props.onFinished(true),
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

    private onLogoutConfirm = (): void => {
        dis.dispatch({ action: "logout" });

        // close dialog
        this.props.onFinished(true);
    };

    render() {
        const dialogContent = (
            <div>
                <div className="mx_Dialog_content" id="mx_Dialog_content">
                    <div>
                        <p className="tc_modalParagraph">
                            {_t(
                                "<b>Without your Tchap Keys, you won't be able to read your messages</b>" +
                                    " at your next login because they will be locked. It's a Tchap safety measure.",
                                {},
                                {
                                    b: (sub) => <b>{sub}</b>,
                                },
                            )}
                        </p>
                    </div>
                    <div className="tc_TwoColumn_block">
                        <div className="tc_TwoColumn_block_content">
                            <div className="tc_TwoColumn_block_image">
                                <img src={MultiDeviceImage} alt="Login logo" width="120" />
                            </div>
                            <p className="tc_modalParagraph">
                                {_t(
                                    "<b>Can you currently read your messages on another device?</b>" +
                                        " You can disconnect. This other device automatically backs up" +
                                        " your Tchat Keys and messages.",
                                    {},
                                    {
                                        b: (sub) => <b>{sub}</b>,
                                    },
                                )}
                            </p>
                            <button className="danger" onClick={this.onLogoutConfirm}>
                                {_t("Sign me out")}
                            </button>
                        </div>
                        <div className="tc_TwoColumn_block_content">
                            <div className="tc_TwoColumn_block_image">
                                <img src={ExportLogoImage} alt="Export logo" width="70" />
                            </div>
                            <p className="tc_modalParagraph">
                                {_t(
                                    "<b>You don't have another device connected to Tchap?</b>" +
                                        " Back up your Tchap Keys. These keys will unlock current messages," +
                                        " but not those received after saving.",
                                    {},
                                    {
                                        b: (sub) => <b>{sub}</b>,
                                    },
                                )}
                            </p>
                            <button className="mx_Dialog_primary" onClick={this.onExportE2eKeysClicked}>
                                {_t("Save my keys")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );

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
                {dialogContent}
            </BaseDialog>
        );
    }
}
