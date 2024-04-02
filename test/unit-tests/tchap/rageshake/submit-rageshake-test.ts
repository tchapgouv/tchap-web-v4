import { Mocked, mocked } from "jest-mock";
import {
    HttpApiEvent,
    HttpApiEventHandlerMap,
    IHttpOpts,
    IThreepid,
    MatrixClient,
    TypedEventEmitter,
    MatrixHttpApi,
} from "matrix-js-sdk/src/matrix";
import fetchMock from "fetch-mock-jest";

import {
    getMockClientWithEventEmitter,
    mockClientMethodsCrypto,
} from "~tchap-web-dep/matrix-react-sdk/test/test-utils";
import { collectBugReport } from "~tchap-web-dep/matrix-react-sdk/src/rageshake/submit-rageshake";
import { MatrixClientPeg } from "~tchap-web-dep/matrix-react-sdk/src/MatrixClientPeg";

/**
 * Based on react-sdk's test, removed unused things. Maybe this test has more mocks than strictly necessary.
 */
describe("Rageshakes", () => {
    let mockClient: Mocked<MatrixClient>;
    const mockHttpAPI: MatrixHttpApi<IHttpOpts & { onlyData: true }> = new MatrixHttpApi(
        new TypedEventEmitter<HttpApiEvent, HttpApiEventHandlerMap>(),
        {
            baseUrl: "https://alice-server.com",
            prefix: "/_matrix/client/v3",
            onlyData: true,
        },
    );

    beforeEach(() => {
        mockClient = getMockClientWithEventEmitter({
            credentials: { userId: "@test:example.com" },
            deviceId: "AAAAAAAAAA",
            baseUrl: "https://alice-server.com",
            getHomeserverUrl: jest.fn().mockReturnValue("https://alice-server.com"),
            ...mockClientMethodsCrypto(),
            getThreePids: jest.fn(),
            http: mockHttpAPI,
        });
        mocked(mockClient.getCrypto()!.getOwnDeviceKeys).mockResolvedValue({
            ed25519: "",
            curve25519: "",
        });
        mockClient.getThreePids.mockClear().mockResolvedValue({
            threepids: [
                {
                    medium: "email",
                    address: "test@example.com",
                } as unknown as IThreepid,
            ],
        });

        fetchMock.restore();
        fetchMock.catch(404);
    });

    describe("Basic Information", () => {
        let mockWindow: Mocked<Window>;
        let windowSpy: jest.SpyInstance;

        beforeEach(() => {
            mockWindow = {
                matchMedia: jest.fn().mockReturnValue({ matches: false }),
                navigator: {
                    userAgent: "",
                },
            } as unknown as Mocked<Window>;
            // @ts-ignore - We just need partial mock
            windowSpy = jest.spyOn(global, "window", "get").mockReturnValue(mockWindow);
        });

        afterEach(() => {
            windowSpy.mockRestore();
        });

        it("should include app name", async () => {
            const formData = await collectBugReport();
            const appName = formData.get("app");

            expect(appName).toBe("tchap-web");
        });

        // We did not customise the custom fields code, but we test to guard against changes of output if element changes
        // custom field code.
        it("should collect Tchap custom fields", async () => {
            const formDataWithOpt = await collectBugReport({
                customFields: {
                    context: "voip",
                    audio_input: "headset_bluetooth",
                },
            });
            expect(formDataWithOpt.get("context")).toBe("voip");
            expect(formDataWithOpt.get("audio_input")).toBe("headset_bluetooth");
        });
    });

    describe("Credentials", () => {
        it("should collect user email", async () => {
            const formData = await collectBugReport();
            expect(formData.get("email")).toBe("test@example.com");
        });
    });
});
