/*
Copyright 2017 Vector Creations Ltd

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

import FileSaver from 'file-saver';
import React, { ComponentType } from 'react';
// import PropTypes from 'prop-types';
import { _t } from 'matrix-react-sdk/src/languageHandler';
// import * as Matrix from 'matrix-js-sdk';
import BaseDialog from "matrix-react-sdk/src/components/views/dialogs/BaseDialog";

// import * as Matrix from "matrix-js-sdk/src/matrix";
import * as MegolmExportEncryption from 'matrix-react-sdk/src/utils/MegolmExportEncryption';
import Modal from 'matrix-react-sdk/src/Modal';
import "../../../../../res/css/views/dialogs/_TchapExportE2eKeysDialog.pcss";

const PHASE_EDIT = 1;
const PHASE_EXPORTING = 2;

// matrixClient: PropTypes.instanceOf(Matrix.MatrixClient).isRequired,
interface IProps {
    matrixClient: any;
    onFinished: (success: boolean) => void;
}

interface IState {
    phase: number;
    errStr: string;
}

export default class TchapExportE2eKeysDialog extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            phase: PHASE_EDIT,
            errStr: null,
        };

        this.startExport = this.startExport.bind(this);
        this.onPassphraseFormSubmit = this.onPassphraseFormSubmit.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    // componentWillMount() {
    //     this._unmounted = false;
    // }

    // componentWillUnmount() {
    //     this._unmounted = true;
    // }

    private startExport(passphrase) {
        // extra Promise.resolve() to turn synchronous exceptions into
        // asynchronous ones.
        Promise.resolve().then(() => {
            return this.props.matrixClient.exportRoomKeys();
        }).then((k) => {
            return MegolmExportEncryption.encryptMegolmKeyFile(
                JSON.stringify(k), passphrase,
            );
        }).then((f) => {
            const blob = new Blob([f], {
                type: 'text/plain;charset=us-ascii',
            });
            FileSaver.saveAs(blob, 'tchap-keys.txt');
            // :TCHAP: don't close too fast
        }).then(() => {
            // :TCHAP: added a confirmation modal
            // Modal.createTrackedDialogAsync('Export E2E Keys Success', '',
            //     import('./TchapExportE2eKeysSuccessDialog'),
            //     {
            //         onFinished: (res) => {
            //             this.props.onFinished(res);
            //         },
            //     },
            // ); // TODO ??

            Modal.createDialogAsync(
                import(
                    "./TchapExportE2eKeysSuccessDialog"
                ) as unknown as Promise<ComponentType<{}>>,
                {
                    // matrixClient: MatrixClientPeg.get(),
                    onFinished: (res) => {
                        this.props.onFinished(res);
                    },
                },
            );

            // Modal.createDialog(VerificationRequestDialog, {
            //     verificationRequestPromise: verificationRequestPromise,
            //     member: cli.getUser(userId),
            //     onFinished: async () => {
            //         const request = await verificationRequestPromise;
            //         console.log(`:tchap: verificationRequestPromise finishes for ${userId}:${deviceId}`);
            //         shareKeys();
            //         removeCurrentRequest();
            //         //tchap: why cancel?
            //         request.cancel();
            //     },
            // });
        }).catch((e) => {
            console.error("Error exporting e2e keys:", e);
            // if (this._unmounted) {
            //     return;
            // }
            const msg = e.friendlyText || _t('Unknown error');
            this.setState({
                errStr: msg,
                phase: PHASE_EDIT,
            });
        });

        this.setState({
            errStr: null,
            phase: PHASE_EXPORTING,
        });
    }

    private onPassphraseFormSubmit(ev) {
        ev.preventDefault();

        const passphrase = this.refs.passphrase1.value;
        // :TCHAP:
        if (passphrase.length < 8) {
            this.setState({errStr: _t('Passphrase must be at least 8 character long')});
            return false;
        }
        if (passphrase !== this.refs.passphrase2.value) {
            this.setState({errStr: _t('Passphrases must match')});
            return false;
        }
        if (!passphrase) {
            this.setState({errStr: _t('Passphrase must not be empty')});
            return false;
        }

        this.startExport(passphrase);
        return false;
    }

    private onCancelClick(ev) {
        ev.preventDefault();
        this.props.onFinished(false);
        return false;
    }

    render() {
        const disableForm = (this.state.phase === PHASE_EXPORTING);

        return (
            <BaseDialog className='mx_exportE2eKeysDialog'
                onFinished={this.props.onFinished}
                title={_t("Save your Tchap Keys (encryption keys)")}
            >
                <form onSubmit={this.onPassphraseFormSubmit}>
                    <div className="mx_Dialog_content">
                        <p>
                            { _t(
                                'If you do not have another connected device, ' +
                                '<b>we advice you to save your keys in a file on your device</b>.',
                                {},
                                {b: (sub) => <b>{sub}</b>},
                            ) }
                        </p>
                        <p>
                            { _t(
                                'This file will be protected by a password, ' +
                                'which will be asked next time you log in, ' +
                                'when you will import the keys to unlock your messages.',
                            ) }
                        </p>
                        <p className='paragraphWithMargin'>
                            { _t(
                                '<b>Warning:</b> these keys cannot be used to unlock the messages ' +
                                'received after backup (<a>find out more</a>)',
                                {},
                                {
                                    'a': (sub) => <a href="#/register" key="sub">{ sub }</a>,
                                    'b': (sub) => <b>{ sub }</b>,
                                })
                            }
                        </p>
                        <p className='paragraphWithMargin'>
                            { _t('Create your Tchap Key password (minimum 8 characters)') }
                        </p>
                        <div className='error'>
                            { this.state.errStr }
                        </div>
                        <div className='mx_E2eKeysDialog_inputTable'>
                            <div className='mx_E2eKeysDialog_inputRow passwordInputRow'>
                                <div className='mx_E2eKeysDialog_inputCell'>
                                    <input
                                        autoFocus={true}
                                        className="input"
                                        disabled={disableForm}
                                        id='passphrase1'
                                        placeholder={_t('Your Tchap password')}
                                        ref='passphrase1'
                                        size={64}
                                        type='password'
                                    />
                                </div>
                            </div>
                            <div className='mx_E2eKeysDialog_inputRow'>
                                <div className='mx_E2eKeysDialog_inputCell'>
                                    <input
                                        className="input"
                                        disabled={disableForm}
                                        id='passphrase2'
                                        placeholder={_t('Confirm your Tchap password')}
                                        ref='passphrase2'
                                        size={64}
                                        type='password'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx_Dialog_buttons'>
                        <button onClick={this.onCancelClick} disabled={disableForm}>
                            { _t("Cancel") }
                        </button>
                        <input
                            className='mx_Dialog_primary'
                            disabled={disableForm}
                            type='submit'
                            value={_t('Save your keys')}
                        />
                    </div>
                </form>
            </BaseDialog>
        );
    }
}
