import { HttpApiEvent } from "matrix-js-sdk/src/matrix";
import { defaultDispatcher, MatrixDispatcher } from "matrix-react-sdk/src/dispatcher/dispatcher";
import { ActionPayload } from "matrix-react-sdk/src/dispatcher/payloads";
import { stopMatrixClient } from "matrix-react-sdk/src/Lifecycle";
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import Modal from "matrix-react-sdk/src/Modal";
import PlatformPeg from "matrix-react-sdk/src/PlatformPeg";

import ExpiredAccountDialog from "../components/views/dialogs/ExpiredAccountDialog";
import TchapUtils from "../util/TchapUtils"; "matrix-react-sdk/src/dispatcher/dispatcher";

class ExpiredAccountListener {
    private newEmailRequested: boolean;
    private isExpiredPanelOpen: boolean;
    private boundOnSyncStateChange: any;
    private dispatcher: MatrixDispatcher;
    private isAccountExpired: boolean;

    constructor() {
        this.isExpiredPanelOpen = false;
        this.dispatcher = defaultDispatcher;
        this.isAccountExpired = true;
    }

    //register the listener after the Matrix Client has been initialized but before it is started
    public register() {
        const expiredRegistrationId = this.dispatcher.register(
            (payload: ActionPayload) => {
                if (payload.action === "will_start_client") {
                    console.log(":tchap: register a listener for HttpApiEvent.ORG_MATRIX_EXPIRED_ACCOUNT events");
                    const cli = MatrixClientPeg.get();
                    this.boundOnSyncStateChange = this.boundOnSyncStateChange || this.onAccountExpiredError.bind(this);
                    cli.on(HttpApiEvent.ORG_MATRIX_EXPIRED_ACCOUNT, this.boundOnSyncStateChange);
                    //unregister callback once the work is done
                    this.dispatcher.unregister(expiredRegistrationId);
                }
            },
        );
    }

    public async showExpirationPanel() {
        Modal.createDialog(ExpiredAccountDialog, {
            newEmailRequested: this.newEmailRequested,
            onRequestNewEmail: () => {
                this.newEmailRequested = true;
                TchapUtils.requestNewExpiredAccountEmail();
            },
            //check that the account is not expired when finishing
            onFinished: async () => {
                this.isExpiredPanelOpen = false;
                PlatformPeg.get().reload();
            },
        }, null, false, true, {
            //close panel only if account is not expired
            onBeforeClose: async () => {
                this.isAccountExpired = await TchapUtils.isAccountExpired();
                return Promise.resolve(!this.isAccountExpired);
            } });
    }

    /**
     * React on Sync State Changed
     * @param state
     * @param prevState
     * @param data
     */
    private onAccountExpiredError() {
        //const cli = MatrixClientPeg.get();
        //cli.stopClient();
        MatrixClientPeg.get().stopClient();
        if (!this.isExpiredPanelOpen) {
            stopMatrixClient(false);
            TchapUtils.requestNewExpiredAccountEmail()
                .then((emailRequested) => {
                    this.newEmailRequested = emailRequested;
                    //this.isAccountExpired = await TchapUtils.isAccountExpired();
                    //MatrixClientPeg.get().store.deleteAllData().done(); why was this done ?
                    this.isExpiredPanelOpen = true;
                    this.showExpirationPanel();
                });
        }
    }
}

export default new ExpiredAccountListener();
