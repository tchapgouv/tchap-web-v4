/*
Copyright 2022 DINUM

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

import FileSaver from "file-saver";
import React, { ChangeEvent } from "react";
import BaseDialog from "~tchap-web/src/components/views/dialogs/BaseDialog";
import { _t, _td } from "~tchap-web/src/languageHandler";
import Field from "~tchap-web/src/components/views/elements/Field";
import Modal from "~tchap-web/src/Modal";
import * as MegolmExportEncryption from "~tchap-web/src/utils/MegolmExportEncryption";
import { KeysStartingWith } from "~tchap-web/src/@types/common";
import { MatrixClient } from "matrix-js-sdk/src/client";
import { logger } from "matrix-js-sdk/src/logger";

import { DialogProps } from "@matrix-org/react-sdk-module-api/lib/components/DialogContent";
import TchapExportE2eKeysSuccessDialog from "./TchapExportE2eKeysSuccessDialog";
import PassphraseConfirmField from "~tchap-web/src/components/views/auth/PassphraseConfirmField";
import PassphraseField from "~tchap-web/src/components/views/auth/PassphraseField";

enum Phase {
    Edit = "edit",
    Exporting = "exporting",
}

interface IProps extends DialogProps {
    allowLogout: boolean;
    matrixClient: MatrixClient;
    onFinished: (success: boolean) => void;
}

interface IState {
    phase: Phase;
    errStr: string;
    passphrase1: string;
    passphrase2: string;
}

type AnyPassphrase = KeysStartingWith<IState, "passphrase">;

export default class TchapExportE2eKeysDialog extends React.Component<IProps, IState> {
    private fieldPassword: Field | null = null;
    private fieldPasswordConfirm: Field | null = null;

    private unmounted = false;

    constructor(props: IProps) {
        super(props);

        this.state = {
            phase: Phase.Edit,
            errStr: "",
            passphrase1: "",
            passphrase2: "",
        };

        this.startExport = this.startExport.bind(this);
        this.onPassphraseFormSubmit = this.onPassphraseFormSubmit.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    public componentDidMount(): void {
        this.unmounted = false;
    }

    public componentWillUnmount(): void {
        this.unmounted = true;
    }

    private startExport(passphrase: string): void {
        // extra Promise.resolve() to turn synchronous exceptions into
        // asynchronous ones.
        Promise.resolve()
            .then(() => {
                return this.props.matrixClient.getCrypto()!.exportRoomKeysAsJson();
            })
            .then((k) => {
                return MegolmExportEncryption.encryptMegolmKeyFile(k, passphrase);
            })
            .then((f) => {
                const blob = new Blob([f], {
                    type: "text/plain;charset=us-ascii",
                });
                FileSaver.saveAs(blob, "tchap-keys.txt");
                // :TCHAP: don't close too fast
            })
            .then(async () => {
                // :TCHAP: added a confirmation modal
                const { finished } = Modal.createDialog(
                    TchapExportE2eKeysSuccessDialog,
                    {
                        allowLogout: this.props.allowLogout,
                    },
                );
                const [success] = await finished;
                if (success) {
                    this.props.onFinished(true);
                }
            })
            .catch((e) => {
                logger.error("Error exporting e2e keys:", e);
                if (this.unmounted) {
                    return;
                }
                const msg = e.friendlyText || _t("error|unknown");
                this.setState({
                    errStr: msg,
                    phase: Phase.Edit,
                });
            });

        this.setState({
            errStr: "",
            phase: Phase.Exporting,
        });
    }

    private onPassphraseChange = (ev: React.ChangeEvent<HTMLInputElement>, phrase: AnyPassphrase) => {
        this.setState({
            [phrase]: ev.target.value,
        } as Pick<IState, AnyPassphrase>);
    };

    private async verifyFieldsBeforeSubmit(): Promise<boolean> {
        const fieldsInDisplayOrder = [this.fieldPassword, this.fieldPasswordConfirm];

        const invalidFields: Field[] = [];

        for (const field of fieldsInDisplayOrder) {
            if (!field) continue;

            const valid = await field.validate({ allowEmpty: false });
            if (!valid) {
                invalidFields.push(field);
            }
        }

        if (invalidFields.length === 0) {
            return true;
        }

        // Focus on the first invalid field, then re-validate,
        // which will result in the error tooltip being displayed for that field.
        invalidFields[0].focus();
        invalidFields[0].validate({ allowEmpty: false, focused: true });

        return false;
    }

    private onPassphraseFormSubmit = async (ev: React.FormEvent): Promise<void> => {
        ev.preventDefault();

        if (!(await this.verifyFieldsBeforeSubmit())) return;
        if (this.unmounted) return;

        const passphrase = this.state.passphrase1;
        this.startExport(passphrase);
    };

    private onCancelClick = (ev: React.MouseEvent): boolean => {
        ev.preventDefault();
        this.props.onFinished(false);
        return false;
    };

    public render(): JSX.Element {
        const disableForm = this.state.phase === Phase.Exporting;

        return (
            <BaseDialog
                className="tc_exportE2eKeysDialog"
                onFinished={this.props.onFinished}
                title={_t("Save your Tchap Keys (encryption keys)")}
            >
                <form onSubmit={this.onPassphraseFormSubmit}>
                    <div className="mx_Dialog_content">
                        <p className="tc_modalParagraph">
                            {_t(
                                "If you do not have another connected device, " +
                                    "<b>we advise you to save your keys in a file on your device</b>.",
                                {},
                                { b: (sub) => <b>{sub}</b> },
                            )}
                        </p>
                        <p className="tc_modalParagraph">
                            {_t(
                                "This file will be protected by a password, " +
                                    "which will be asked next time you log in, " +
                                    "when you will import the keys to unlock your messages.",
                            )}
                        </p>
                        <p className="tc_modalParagraph tc_withMarginBottom tc_withMarginTop">
                            {_t("Create your Tchap Key password")}
                        </p>
                        <div className="error">{this.state.errStr}</div>
                        <div className="mx_E2eKeysDialog_inputTable">
                            <div className="mx_E2eKeysDialog_inputRow">
                                <PassphraseField
                                    minScore={3}
                                    label={_td("Your Tchap Key password")}
                                    labelEnterPassword={_td("Your Tchap Key password")}
                                    labelStrongPassword={_td("settings|key_export_import|phrase_strong_enough")}
                                    labelAllowedButUnsafe={_td("settings|key_export_import|phrase_strong_enough")}
                                    value={this.state.passphrase1}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        this.onPassphraseChange(e, "passphrase1")
                                    }
                                    autoFocus={true}
                                    size={64}
                                    type="password"
                                    disabled={disableForm}
                                    autoComplete="new-password"
                                    fieldRef={(field) => (this.fieldPassword = field)}
                                />
                            </div>
                            <div className="mx_E2eKeysDialog_inputRow">
                                <PassphraseConfirmField
                                    password={this.state.passphrase1}
                                    label={_td("Confirm your Tchap Key password")}
                                    labelRequired={_td("settings|key_export_import|phrase_cannot_be_empty")}
                                    labelInvalid={_td("settings|key_export_import|phrase_must_match")}
                                    value={this.state.passphrase2}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        this.onPassphraseChange(e, "passphrase2")
                                    }
                                    size={64}
                                    type="password"
                                    disabled={disableForm}
                                    autoComplete="new-password"
                                    fieldRef={(field) => (this.fieldPasswordConfirm = field)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mx_Dialog_buttons">
                        <button onClick={this.onCancelClick} disabled={disableForm}>
                            {_t("action|cancel")}
                        </button>
                        <input
                            className="mx_Dialog_primary"
                            disabled={disableForm}
                            type="submit"
                            value={_t("Save my keys")}
                        />
                    </div>
                </form>
            </BaseDialog>
        );
    }
}
