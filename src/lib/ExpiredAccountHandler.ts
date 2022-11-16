import { HttpApiEvent } from "matrix-js-sdk/src/matrix";
import { defaultDispatcher, MatrixDispatcher } from "matrix-react-sdk/src/dispatcher/dispatcher";
import { ActionPayload } from "matrix-react-sdk/src/dispatcher/payloads";
import { stopMatrixClient } from "matrix-react-sdk/src/Lifecycle";
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import Modal from "matrix-react-sdk/src/Modal";
import PlatformPeg from "matrix-react-sdk/src/PlatformPeg";

import ExpiredAccountDialog from "../components/views/dialogs/ExpiredAccountDialog";
import TchapUtils from "../util/TchapUtils"; "matrix-react-sdk/src/dispatcher/dispatcher";

/*
 * Listens for HttpApiEvent.ORG_MATRIX_EXPIRED_ACCOUNT events and opens the panel ExpiredAccountDialog.
 * This component is required when activating the plugin synapse-email-account-validity on the server side:  https://github.com/matrix-org/synapse-email-account-validity
 * The class is instantiated in the default export, thus it is created only once at the first import.
 */
class ExpiredAccountHandler {
    private boundOnExpiredAccountEvent: any;//the listener function;
    private dispatcher: MatrixDispatcher;
    private isPanelOpen: boolean;
    private isAccountExpired: boolean;

    constructor() {
        this.boundOnExpiredAccountEvent = this.onExpiredAccountError.bind(this);
        this.dispatcher = defaultDispatcher;
        this.isPanelOpen = false;
        this.isAccountExpired = false;
    }

    /**
     * register the listener after the Matrix Client has been initialized but before it is started
     */
    public register() {
        const expiredRegistrationId = this.dispatcher.register(
            (payload: ActionPayload) => {
                if (payload.action === "will_start_client") {
                    console.log(":tchap: register a listener for HttpApiEvent.ORG_MATRIX_EXPIRED_ACCOUNT events");
                    const cli = MatrixClientPeg.get();
                    cli.on(HttpApiEvent.ORG_MATRIX_EXPIRED_ACCOUNT, this.boundOnExpiredAccountEvent);
                    //unregister callback once the work is done
                    this.dispatcher.unregister(expiredRegistrationId);
                }
            },
        );
    }

    /**
     * When account expired account happens, display the panel if not open yet.
     */
    private onExpiredAccountError() {
        console.log(":tchap: Expired Account Error received");

        if (this.isPanelOpen) {
            return;
        }
        //shutdown all matrix react services, but without unsetting the client
        stopMatrixClient(false);
        console.log(":tchap: matrix react services have been shutdown");

        //should we sent the email directly? Normally they should have received already an email 7 days earlier
        this.showExpirationPanel();
        this.isPanelOpen = true;
    }

    private async showExpirationPanel() {
        Modal.createDialog(ExpiredAccountDialog, {
            onRequestNewEmail: () => {
                return TchapUtils.requestNewExpiredAccountEmail();
            },
            //check that the account is not expired when finishing
            onFinished: async () => {
                this.isPanelOpen = false;
                PlatformPeg.get().reload();
            },
        //todo: define which static/dynamic settings are needed for this dialog
        }, null, false, true, {
            //close panel only if account is not expired
            onBeforeClose: async () => {
                //verify that the account is not expired anymore
                this.isAccountExpired = await TchapUtils.isAccountExpired();
                return Promise.resolve(!this.isAccountExpired);
            } });
    }
}

export default new ExpiredAccountHandler();
