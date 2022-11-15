import React from 'react';
import { _t } from 'matrix-react-sdk/src/languageHandler';
import BaseDialog from 'matrix-react-sdk/src/components/views/dialogs/BaseDialog';
import DialogButtons from 'matrix-react-sdk/src/components/views/elements/DialogButtons';

interface IProps {
    focus: boolean;
    onFinished();
    onRequestNewEmail();
}

interface IState {
    description: string;
}

export default class ExpiredAccountDialog extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        //const displayName = 'ExpiredAccountDialog';
        this.state = {
            description: _t('The validity period of your account has expired. An email has been sent to you in order to renew it. Once you’ve followed the link it contains, click below.'),
        };
    }

    private onOk = async () => {
        this.props.onFinished();
    };

    private onResendEmail = () => {
        this.setState({
            description: _t('An email has been sent to you. Click on the link it contains, click below.'),
        });
        this.props.onRequestNewEmail();
    };

    /**
        <a href="#" className="tc_ExpiredAccountDialog_link" onClick={this.props.onLogout}>
            { _t('Logout') }
        </a>
     This code add a Logout button to the Expired Account Modal.
     Keep it here in case of need.
     */

    render() {
        return (
            <BaseDialog className="mx_QuestionDialog"
                onFinished={this.props.onFinished}
                title={_t('The validity period of your account has expired')}
                contentId='mx_Dialog_content'
                hasCancel={false}
            >
                <div className="mx_Dialog_content" id='mx_Dialog_content'>
                    <div>
                        <p> { this.state.description }
                        </p>
                    </div>
                </div>
                <DialogButtons primaryButton={_t('I renewed the validity of my account')}
                    primaryButtonClass={null}
                    cancelButton={null}
                    hasCancel={false}
                    onPrimaryButtonClick={this.onOk}
                    focus={this.props.focus}
                    onCancel={null}
                >
                    <button onClick={this.onResendEmail}>
                        { _t('Request a renewal email') }
                    </button>
                </DialogButtons>
            </BaseDialog>
        );
    }
}
