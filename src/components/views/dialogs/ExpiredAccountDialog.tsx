import React from 'react';
import { _t } from 'matrix-react-sdk/src/languageHandler';
import BaseDialog from 'matrix-react-sdk/src/components/views/dialogs/BaseDialog';
import DialogButtons from 'matrix-react-sdk/src/components/views/elements/DialogButtons';

interface IProps {
    onFinished();
    onRequestNewEmail();
}

interface IState {
    description: string;
}

/**
 * Expired Account is displayed when the user account is expired. It can not be cancel until the account is renewed.
 * This panel is exclusively opened by the listener ExpiredAccountListener
* This component is required when activating the plugin synapse-email-account-validity on the server side:  https://github.com/matrix-org/synapse-email-account-validity

 */
export default class ExpiredAccountDialog extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            // eslint-disable-next-line max-len
            description: _t('The validity period of your account has expired. An email has been sent to you in order to renew it. Once you’ve followed the link it contains, click below.'),
        };
    }

    private onOk = async () => {
        this.props.onFinished();
    };

    private onResendEmail = () => {
        this.props.onRequestNewEmail();
        this.setState({
            description: _t('An email has been sent to you. Click on the link it contains, click below.'),
        });
    };

    render() {
        return (
            <BaseDialog className="mx_QuestionDialog"
                onFinished={this.props.onFinished}
                title={_t('The validity period of your account has expired')}
                contentId='mx_Dialog_content'
                hasCancel={false} //panel does not offer a "close" button
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
