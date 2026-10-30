// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, expect, it, type Mocked, vi } from "vitest";

import { type MatrixClient } from "matrix-js-sdk/src/matrix";

import {
    mockPlatformPeg,
    getMockClientWithEventEmitter,
    mockClientMethodsUser,
    stubClient,
} from "test-utils";
import createRoom from "~tchap-web/src/createRoom";
import ExternalAccountHandler from "~tchap-web/src/tchap/ext/ExternalAccountHandler";
import SdkConfig, { type ConfigOptions } from "~tchap-web/src/SdkConfig";
import Modal from "~tchap-web/src/Modal";

vi.mock("~tchap-web/src/tchap/ext/ExternalAccountHandler.ts");

describe("createRoom", () => {
    mockPlatformPeg();

    let client: Mocked<MatrixClient>;

    const config: ConfigOptions = {
        homeserver_list: [
            {
                base_url: "https://matrix.dev01.tchap.incubateur.net",
                server_name: "Agents 1",
            },
            {
                base_url: "https://matrix.externes.com",
                server_name: "Externes",
            },
        ],
    };
    SdkConfig.put(config);

    beforeEach(() => {
        Modal.createDialog = vi.fn();
        // @ts-ignore mock (type error because empty return)
        vi.mocked(Modal.createDialog).mockReturnValue({});

        client = getMockClientWithEventEmitter({
            ...stubClient(),
            ...mockClientMethodsUser("@bob:externes.com"),
        });
    });

    afterEach(() => vi.clearAllMocks());

    it("doesn't create room when user is from external instance", async () => {
        // we mock tht something wrong happened
        vi.spyOn(client, "createRoom").mockRejectedValue(new Error("test") as never);

        // don't know why isUserExternal is not returning true despite the setup we did for being an external user
        // so we mock it, not the best...
        vi.spyOn(ExternalAccountHandler, "isUserExternal").mockReturnValue(true);

        await createRoom(client, {});

        expect(ExternalAccountHandler.isUserExternal).toHaveBeenCalledTimes(1);

        expect(ExternalAccountHandler.createRoomError).toHaveBeenCalledTimes(1);
    });
});
