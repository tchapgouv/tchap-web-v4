import { Crypto } from "@peculiar/webcrypto";
import * as encryptAESSecretStorageItemModule from "matrix-js-sdk/src/utils/encryptAESSecretStorageItem";
import { type MockedObject } from "jest-mock";
import { type SignoutRequest } from "oidc-client-ts";

import type * as MatrixJs from "matrix-js-sdk/src/matrix";

import * as Lifecycle from "~tchap-web/src/Lifecycle";
import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";
import { flushPromises, getMockClientWithEventEmitter, mockClientMethodsUser } from "~tchap-web/test/test-utils";
import { OidcClientStore } from "~tchap-web/src/stores/oidc/OidcClientStore";

const { logout } = Lifecycle;

const webCrypto = new Crypto();

const windowCrypto = window.crypto;

describe("Lifecycle", () => {
    const deviceId = "abc123";

    const realLocalStorage = global.localStorage;

    let mockClient!: MockedObject<MatrixJs.MatrixClient>;

    beforeEach(() => {
        jest.restoreAllMocks();
        mockClient = getMockClientWithEventEmitter({
            ...mockClientMethodsUser(),
            stopClient: jest.fn(),
            removeAllListeners: jest.fn(),
            clearStores: jest.fn(),
            getAccountData: jest.fn(),
            getDeviceId: jest.fn().mockReturnValue(deviceId),
            isVersionSupported: jest.fn().mockResolvedValue(true),
            getCrypto: jest.fn(),
            getClientWellKnown: jest.fn(),
            waitForClientWellKnown: jest.fn(),
            getThirdpartyProtocols: jest.fn(),
            store: {
                destroy: jest.fn(),
            },
            getVersions: jest.fn().mockResolvedValue({ versions: ["v1.1"] }),
            logout: jest.fn().mockResolvedValue(undefined),
            getAccessToken: jest.fn(),
            getRefreshToken: jest.fn(),
        });
        // stub this
        jest.spyOn(MatrixClientPeg, "replaceUsingCreds").mockImplementation(() => {});
        jest.spyOn(MatrixClientPeg, "start").mockResolvedValue(undefined);

        // reset any mocking
        // @ts-ignore mocking
        delete global.localStorage;
        global.localStorage = realLocalStorage;

        // @ts-ignore mocking
        delete window.crypto;
        window.crypto = webCrypto;

        jest.spyOn(encryptAESSecretStorageItemModule, "default").mockRestore();
    });

    afterAll(() => {
        // @ts-ignore unmocking
        delete window.crypto;
        window.crypto = windowCrypto;
    });

    describe("logout()", () => {
        let oidcClientStore!: OidcClientStore;
        const accessToken = "test-access-token";
        const refreshToken = "test-refresh-token";

        beforeEach(() => {
            oidcClientStore = new OidcClientStore(mockClient);
            // stub
            jest.spyOn(oidcClientStore, "revokeTokens").mockResolvedValue(undefined);

            mockClient.getAccessToken.mockReturnValue(accessToken);
            mockClient.getRefreshToken.mockReturnValue(refreshToken);
        });

        it("should call logout on the client when oidcClientStore is falsy", async () => {
            logout();

            await flushPromises();

            expect(mockClient.logout).toHaveBeenCalledWith(true);
        });

        it("should call logout on the client when oidcClientStore.isUserAuthenticatedWithOidc is falsy", async () => {
            jest.spyOn(oidcClientStore, "isUserAuthenticatedWithOidc", "get").mockReturnValue(false);
            logout(oidcClientStore);

            await flushPromises();

            expect(mockClient.logout).toHaveBeenCalledWith(true);
            expect(oidcClientStore.revokeTokens).not.toHaveBeenCalled();
        });

        it("should call createSignoutRequest when user is authenticated with oidc", async () => {
            jest.spyOn(oidcClientStore, "isUserAuthenticatedWithOidc", "get").mockReturnValue(true);
            jest.spyOn(oidcClientStore, "createSignoutRequest").mockResolvedValue({ url: "" } as SignoutRequest);
            logout(oidcClientStore);

            await flushPromises();

            expect(mockClient.logout).not.toHaveBeenCalled();
            expect(oidcClientStore.createSignoutRequest).toHaveBeenCalled();
        });
    });
});
