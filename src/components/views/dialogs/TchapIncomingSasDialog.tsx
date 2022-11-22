/*
Copyright 2019 New Vector Ltd

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

// import MatrixClientPeg from '../../../MatrixClientPeg';
// import sdk from '../../../index';
import React from 'react';
import { IGeneratedSas, ISasEvent, SasEvent } from "matrix-js-sdk/src/crypto/verification/SAS";
import { VerificationBase, VerificationEvent } from "matrix-js-sdk/src/crypto/verification/Base";
// import { logger } from "matrix-js-sdk/src/logger";
import { MatrixClientPeg } from 'matrix-react-sdk/src/MatrixClientPeg';
import { _t } from 'matrix-react-sdk/src/languageHandler';
// import { mediaFromMxc } from "matrix-react-sdk/src/customisations/Media";
import VerificationComplete from "matrix-react-sdk/src/components/views/verification/VerificationComplete";
import VerificationCancelled from "matrix-react-sdk/src/components/views/verification/VerificationCancelled";
import Spinner from "matrix-react-sdk/src/components/views/elements/Spinner";
import DialogButtons from "matrix-react-sdk/src/components/views/elements/DialogButtons";
import BaseAvatar from "matrix-react-sdk/src/components/views/avatars/BaseAvatar";
import VerificationShowSas from "matrix-react-sdk/src/components/views/verification/VerificationShowSas";
import BaseDialog from "matrix-react-sdk/src/components/views/dialogs/BaseDialog";
import { IDialogProps } from "matrix-react-sdk/src/components/views/dialogs/IDialogProps";

const PHASE_START = 0;
const PHASE_SHOW_SAS = 1;
const PHASE_WAIT_FOR_PARTNER_TO_CONFIRM = 2;
const PHASE_VERIFIED = 3;
const PHASE_CANCELLED = 4;

interface IProps extends IDialogProps {
    onFinished: (success: boolean) => void;
    verifier: VerificationBase<SasEvent, any>;
}

interface IState {
    phase: number;
    sasVerified: boolean;
    opponentProfile: {
        // eslint-disable-next-line camelcase
        avatar_url?: string;
        displayname?: string;
    };
    opponentProfileError: Error;
    sas: IGeneratedSas;
}

export default class TchapIncomingSasDialog extends React.Component<IProps, IState> {
    // constructor(props) {
    //     super(props);

    //     this._showSasEvent = null;
    //     this.state = {
    //         phase: PHASE_START,
    //         sasVerified: false,
    //         opponentProfile: null,
    //         opponentProfileError: null,
    //     };
    //     this.props.verifier.on('show_sas', this._onVerifierShowSas);
    //     this.props.verifier.on('cancel', this._onVerifierCancel);
    //     this._fetchOpponentProfile();
    // }

    private showSasEvent: ISasEvent;

    constructor(props: IProps) {
        super(props);

        this.showSasEvent = null;
        this.state = {
            phase: PHASE_START,
            sasVerified: false,
            opponentProfile: null,
            opponentProfileError: null,
            sas: null,
        };
        this.props.verifier.on(SasEvent.ShowSas, this.onVerifierShowSas);
        this.props.verifier.on(VerificationEvent.Cancel, this.onVerifierCancel);
        this.fetchOpponentProfile();

        // let phase = PHASE_START;
        // if (this.props.verifier.hasBeenCancelled) {
        //     logger.log("Verifier was cancelled in the background.");
        //     phase = PHASE_CANCELLED;
        // }

        // this.showSasEvent = null;
        // this.state = {
        //     phase: phase,
        //     sasVerified: false,
        //     opponentProfile: null,
        //     opponentProfileError: null,
        //     sas: null,
        // };
        // this.props.verifier.on(SasEvent.ShowSas, this.onVerifierShowSas);
        // this.props.verifier.on(VerificationEvent.Cancel, this.onVerifierCancel);
        // this.fetchOpponentProfile();
    }

    componentWillUnmount(): void {
        if (this.state.phase !== PHASE_CANCELLED && this.state.phase !== PHASE_VERIFIED) {
            this.props.verifier.cancel(new Error('User cancel'));
        }
        this.props.verifier.removeListener(SasEvent.ShowSas, this.onVerifierShowSas);
    }

    private async fetchOpponentProfile() {
        try {
            const prof = await MatrixClientPeg.get().getProfileInfo(
                this.props.verifier.userId,
            );
            this.setState({
                opponentProfile: prof,
            });
        } catch (e) {
            this.setState({
                opponentProfileError: e,
            });
        }
    }

    private onFinished = (): void => {
        this.props.onFinished(this.state.phase === PHASE_VERIFIED);
    };

    private onCancelClick = (): void => {
        this.props.onFinished(this.state.phase === PHASE_VERIFIED);
    };

    private onContinueClick = (): void => {
        this.setState({ phase: PHASE_WAIT_FOR_PARTNER_TO_CONFIRM });
        this.props.verifier.verify().then(() => {
            this.setState({ phase: PHASE_VERIFIED });
        }).catch((e) => {
            console.log("Verification failed", e);
        });
    };

    private onVerifierShowSas = (e: ISasEvent): void => {
        this.showSasEvent = e;
        this.setState({
            phase: PHASE_SHOW_SAS,
            sas: e.sas,
        });
    };

    private onVerifierCancel = (): void => {
        this.setState({
            phase: PHASE_CANCELLED,
        });
    };

    private onSasMatchesClick = (): void => {
        this.showSasEvent.confirm();
        this.setState({
            phase: PHASE_WAIT_FOR_PARTNER_TO_CONFIRM,
        });
    };

    private onVerifiedDoneClick = (): void => {
        this.props.onFinished(true);
    };

    private renderPhaseStart = (): JSX.Element => {
        let profile;
        if (this.state.opponentProfile) {
            profile = <div className="mx_IncomingSasDialog_opponentProfile">
                <BaseAvatar
                    height={48}
                    idName={this.props.verifier.userId}
                    name={this.state.opponentProfile.displayname}
                    resizeMethod='crop'
                    url={MatrixClientPeg.get().mxcUrlToHttp(
                        this.state.opponentProfile.avatar_url,
                        Math.floor(48 * window.devicePixelRatio),
                        Math.floor(48 * window.devicePixelRatio),
                        'crop',
                    )}
                    width={48}
                />
                <h2>{ this.state.opponentProfile.displayname }</h2>
            </div>;
        } else if (this.state.opponentProfileError) {
            profile = <div>
                <BaseAvatar
                    height={48}
                    idName={this.props.verifier.userId}
                    name={this.props.verifier.userId.slice(1)}
                    width={48}
                />
                <h2>{ this.props.verifier.userId }</h2>
            </div>;
        } else {
            profile = <Spinner />;
        }

        return (
            <div>
                { profile }
                { /* :TCHAP: keep older version of this message until we translate the new one. */ }
                <p>{ _t("One of your devices wants to check your current device. " +
                  "By performing this verification, a link of trust will be established " +
                  "between your two devices to facilitate the sharing of encryption keys.",
                ) }</p>
                <DialogButtons
                    primaryButton={_t('Continue')}
                    hasCancel={true}
                    onPrimaryButtonClick={this.onContinueClick}
                    onCancel={this.onCancelClick}
                />
            </div>
        );
    };

    private renderPhaseShowSas = (): JSX.Element => {
        return <VerificationShowSas
            sas={this.showSasEvent.sas}
            onCancel={this.onCancelClick}
            onDone={this.onSasMatchesClick}
        />;
    };

    private renderPhaseWaitForPartnerToConfirm = (): JSX.Element => {
        return (
            <div>
                <Spinner />
                <p>{ _t("Please also confirm the emojis on the other device.") }</p>
            </div>
        );
    };

    private renderPhaseVerified = (): JSX.Element => {
        return <VerificationComplete onDone={this.onVerifiedDoneClick} />;
    };

    private renderPhaseCancelled = (): JSX.Element => {
        return <VerificationCancelled onDone={this.onCancelClick} />;
    };

    render() {
        let body;
        switch (this.state.phase) {
            case PHASE_START:
                body = this.renderPhaseStart();
                break;
            case PHASE_SHOW_SAS:
                body = this.renderPhaseShowSas();
                break;
            case PHASE_WAIT_FOR_PARTNER_TO_CONFIRM:
                body = this.renderPhaseWaitForPartnerToConfirm();
                break;
            case PHASE_VERIFIED:
                body = this.renderPhaseVerified();
                break;
            case PHASE_CANCELLED:
                body = this.renderPhaseCancelled();
                break;
        }

        return (
            <BaseDialog
                title={_t("Incoming Verification Request")}
                onFinished={this.onFinished}
            >
                { body }
            </BaseDialog>
        );
    }
}

