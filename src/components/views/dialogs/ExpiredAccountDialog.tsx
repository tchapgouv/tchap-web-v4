import React from 'react';
import { _t } from 'matrix-react-sdk/src/languageHandler';
import BaseDialog from 'matrix-react-sdk/src/components/views/dialogs/BaseDialog';
import DialogButtons from 'matrix-react-sdk/src/components/views/elements/DialogButtons';

interface IProps {
    onFinished();
    onRequestNewEmail(): Promise<any>;
    emailDelay?: number; //delay betwenn 2 emails in seconds, by default 30
}

interface IState {
    emailDelay: number;//delay betwenn 2 emails in seconds, by default 30
    isAccountExpired: boolean; //todo: not used yet
    newEmailSentTimestamp: number;//timestamp
    newEmailState: EmailState;
}

enum EmailState {
    MUST_WAIT,
    SUCCESS,
    FAILURE
}
/**
 * Expired Account is displayed when the user account is expired. It can not be cancel until the account is renewed.
 * This panel is exclusively opened by the listener ExpiredAccountHandler
* This component is required when activating the plugin synapse-email-account-validity on the server side:  https://github.com/matrix-org/synapse-email-account-validity

 */
export default class ExpiredAccountDialog extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            isAccountExpired: false,
            newEmailSentTimestamp: 0,
            emailDelay: this.props.emailDelay || 30, //seconds
            newEmailState: undefined,
        };
    }

    //check if an email can be sent of must wait a bit
    private mustWait() {
        return this.state.newEmailSentTimestamp != 0
            && (Date.now() - this.state.newEmailSentTimestamp < this.state.emailDelay*1000);
    }

    private onOk = async () => {
        this.props.onFinished();
    };

    private onRequestEmail = () => {
        //check if user must wait before sending a new email
        if (this.mustWait()) {
            return this.setState({
                newEmailState: EmailState.MUST_WAIT,
            });
        }

        this.props.onRequestNewEmail().then((success) => {
            if (!success) {
                this.setState({
                    newEmailState: EmailState.FAILURE,
                });
            } else {
                //sucess, save timestamp
                this.setState({
                    newEmailSentTimestamp: Date.now(),
                    newEmailState: EmailState.SUCCESS,
                });
            }
        });
    };

    render() {
        let alertMessage = null;
        switch (this.state.newEmailState) {
            case EmailState.MUST_WAIT:
                //don't know which class should decorate this message, it is not really an error
                //its goal is to avoid users to click twice or more on the button and spam themselves
                alertMessage = <p className="">{ _t(
                    "Wait for at least %(wait)s seconds between two emails", { wait: this.state.emailDelay },
                ) }</p>;
                break;
            case EmailState.FAILURE:
                alertMessage = <p className="text-error">{ _t(
                    "The email was not sent sucessfully, please retry in a moment",
                ) }</p>;
                break;
            case EmailState.SUCCESS:
                alertMessage = <p className="text-success">{ _t(
                    "A new email has been sent",
                ) }</p>;
                break;
            default:
                break;
        }

        return (
            <BaseDialog className="mx_QuestionDialog"
                onFinished={this.props.onFinished}
                title={_t('The validity period of your account has expired')}
                contentId='mx_Dialog_content'
                hasCancel={false} //panel does not offer a "close" button
            >
                { alertMessage }
                <div className="mx_Dialog_content" id='mx_Dialog_content'>
                    <div>
                        <p> { _t('An email has been sent to you. Click on the link it contains, click below.') }
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
                    <button onClick={this.onRequestEmail}>
                        { _t('Request a renewal email') }
                    </button>
                </DialogButtons>
            </BaseDialog>
        );
    }
}
