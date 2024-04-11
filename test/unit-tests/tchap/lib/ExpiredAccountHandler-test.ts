import { mocked, MockedObject } from "jest-mock";

import ExpiredAccountDialog from "~tchap-web/src/tchap/components/views/dialogs/ExpiredAccountDialog";
import ExpiredAccountHandler from "~tchap-web/src/tchap/lib/ExpiredAccountHandler";
import { HttpApiEvent, MatrixClient } from "~tchap-web/yarn-linked-dependencies/matrix-js-sdk/src/matrix";
import Modal from "~tchap-web/yarn-linked-dependencies/matrix-react-sdk/src/Modal";
import defaultDispatcher from "~tchap-web/yarn-linked-dependencies/matrix-react-sdk/src/dispatcher/dispatcher";
import { getMockClientWithEventEmitter } from "~tchap-web/yarn-linked-dependencies/matrix-react-sdk/test/test-utils";

describe("ExpiredAccountHandler", () => {
    let mockClient: MockedObject<MatrixClient>;

    beforeEach(() => {
        Modal.createDialog = jest.fn();
        // @ts-ignore mock (type error because empty return)
        mocked(Modal.createDialog).mockReturnValue({});

        mockClient = getMockClientWithEventEmitter({
            stopClient: jest.fn(),
            removeAllListeners: jest.fn(),
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("displays dialog when account is expired", () => {
        // handler instance is created when import ExpiredAccountHandler is run.
        ExpiredAccountHandler.register();

        // Simulate start of app, for handler to initialise
        defaultDispatcher.dispatch({ action: "will_start_client" }, true);

        // Simulate expired error
        // cli.on(HttpApiEvent.ORG_MATRIX_EXPIRED_ACCOUNT)
        // this.eventEmitter.emit(HttpApiEvent.ORG_MATRIX_EXPIRED_ACCOUNT, err);
        mockClient.emit(HttpApiEvent.ORG_MATRIX_EXPIRED_ACCOUNT);

        expect(Modal.createDialog).toHaveBeenCalledWith(
            ExpiredAccountDialog,
            {
                onRequestNewEmail: expect.any(Function),
                onFinished: expect.any(Function),
            },
            undefined /* className */,
            false /* isPriorityModal */,
            true /* isStaticModal */,
            { onBeforeClose: expect.any(Function) },
        );
    });
});
