import React from 'react';
import BaseDialog from "matrix-react-sdk/src/components/views/dialogs/BaseDialog";
import dis from 'matrix-react-sdk/src/dispatcher/dispatcher';
import { _t } from 'matrix-react-sdk/src/languageHandler';

import { TchapAnchor } from '../../../../components/common/TchapAnchor';
import KeySavedImage from "../../../../../res/img/tchap/key-saved.svg";
import "../../../../../res/css/views/dialogs/_TchapExportE2eKeysSuccessDialog.pcss";

interface IProps {
    onFinished: (success: boolean) => void;
}

export default class TchapExportE2eKeysSuccessDialog extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.onLogoutConfirm = this.onLogoutConfirm.bind(this);
    }

    private onLogoutConfirm() {
        this.props.onFinished(true);
        dis.dispatch({ action: 'logout' });
    }

    render() {
        return (
            <BaseDialog className='tc_exportE2eKeysSuccessDialog'
                onFinished={this.props.onFinished}
                title={_t("Tchap Keys saved!")}
            >
                <div className="mx_Dialog_content">
                    <div className="tc_exportE2eKeysSuccessDialog_img">
                        <img
                            src={KeySavedImage}
                            alt="Export logo"
                            width="70"
                        />
                    </div>

                    <p className="tc_modalParagraph">
                        { _t(
                            'Your Tchap Keys (encryption keys) have been successful saved. ' +
                            'You can import them when you login again to unlock your messages ' +
                            '(<a>find out more</a>).',
                            {},
                            {
                                a: (sub) => (
                                    <TchapAnchor
                                        href="https://tchap.beta.gouv.fr/faq#tcq07_003"
                                        openInNewTab
                                    >{ sub }
                                    </TchapAnchor>
                                ),
                                b: (sub) => <b>{ sub }</b>,
                            },
                        ) }
                    </p>
                </div>
                <div className='mx_Dialog_buttons'>
                    <button className="mx_Dialog_primary" onClick={this.onLogoutConfirm}>
                        { _t("Sign out") }
                    </button>
                </div>
            </BaseDialog>
        );
    }
}
