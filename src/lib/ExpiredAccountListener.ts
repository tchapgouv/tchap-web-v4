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
 * Listens for HttpApiEvent.ORG_MATRIX_EXPIRED_ACCOUNT events in which case, it opens the panel ExpiredAccountDialog.
 * The class is instantiated in the default export, thus it is a singleton object
 */
class ExpiredAccountListener {
    private boundOnExpiredAccountEvent: any;//the listener function;
    private dispatcher: MatrixDispatcher;
    private newEmailRequested: boolean;
    private isPanelOpen: boolean;
    private isAccountExpired: boolean;

    constructor() {
        this.boundOnExpiredAccountEvent = this.onAccountExpiredError.bind(this);
        this.dispatcher = defaultDispatcher;
        this.isPanelOpen = false;
        this.isAccountExpired = false;
        this.newEmailRequested = false;
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
    private onAccountExpiredError() {
        if (this.isPanelOpen) {
            return;
        }

        //stop the client to disable sync
        stopMatrixClient(false);
        //should we sent the email directly? Normally they should have received already an email 7 days earlier
        TchapUtils.requestNewExpiredAccountEmail()
            .then((emailRequested) => {
                this.newEmailRequested = emailRequested;
                this.isPanelOpen = true;
                this.showExpirationPanel();
            });
    }

    private async showExpirationPanel() {
        Modal.createDialog(ExpiredAccountDialog, {
            newEmailRequested: this.newEmailRequested,
            onRequestNewEmail: () => {
                this.newEmailRequested = true;
                TchapUtils.requestNewExpiredAccountEmail();
            },
            //check that the account is not expired when finishing
            onFinished: async () => {
                this.isPanelOpen = false;
                PlatformPeg.get().reload();
            },
        }, null, false, true, {
            //close panel only if account is not expired
            onBeforeClose: async () => {
                this.isAccountExpired = await TchapUtils.isAccountExpired();
                return Promise.resolve(!this.isAccountExpired);
            } });
    }
}

export default new ExpiredAccountListener();
