//jest.mock("matrix-react-sdk/src/rageshake/submit-rageshake"); //, () => ({
//    exportedSubmitReportForTesting: jest.fn(() => Promise.resolve("coucou")), // -> mock not called by prod code.
//}));
//const mockedAxios = axios as jest.Mocked<typeof "matrix-react-sdk/src/rageshake/submit-rageshake">;

import { stubClient } from "matrix-react-sdk/test/test-utils";
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import MockHttpBackend from "matrix-mock-request";

import sendBugReport from "~tchap-web-dep/matrix-react-sdk/src/rageshake/submit-rageshake";
import { exportedSubmitReportForTesting } from "~tchap-web/yarn-linked-dependencies/matrix-react-sdk/src/rageshake/submitReport";
//import * as Rageshake from "matrix-react-sdk/src/rageshake/submit-rageshake"; // weird import for testing
//import sendBugReport from "matrix-react-sdk/src/rageshake/submit-rageshake";

jest.mock("~tchap-web-dep/matrix-react-sdk/src/rageshake/submitReport", () => ({
    exportedSubmitReportForTesting: jest.fn(() => Promise.resolve("coucou")), // -> mock not called by prod code.
}));

/*jest.mock("~tchap-web-dep/matrix-react-sdk/src/rageshake/submit-rageshake", () => {
    const originalModule = jest.requireActual("~tchap-web-dep/matrix-react-sdk/src/rageshake/submit-rageshake");

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        //default: jest.fn(() => "mocked baz"),
        //foo: 'mocked foo',
        exportedSubmitReportForTesting: jest.fn(() => "mocked baz"),
    };
});*/

describe("submit-rageshake", () => {
    let httpBackend: MockHttpBackend;
    let mock;

    beforeEach(() => {
        httpBackend = new MockHttpBackend();
        stubClient();
        //mock = jest.fn(() => Promise.resolve("coucou"));
        //jest.mock(exportedSubmitReportForTesting).mockImplementation(mock);
        //exportedSubmitReportForTesting.mockImplementation(mock);
        //exportedSubmitReportForTesting = mock;
        //spy = jest.spyOn(exportedSubmitReportForTesting);
    });

    // todo after : clean up mock ?

    // try mocking submitReport -> the mock is not used by the prod code.
    // because the prod code calls within the file, not through an import, I think. Is it ?
    // If it is, can the prod code call submitReport differently ? Call exportedSubmitReportForTesting instead ?
    it("should pass user email and app name to the http request", async () => {
        const client = MatrixClientPeg.safeGet();
        client.getThreePids = jest
            .fn()
            .mockResolvedValue({ threepids: [{ medium: "email", address: "hello@example.com" }] });

        // Skip some data fetching, which doesn't affect our patch. We are not interested in testing element code anyway.
        client.getCrypto = () => undefined;
        client.http = { request: () => Promise.resolve({}) };

        // Spy submitReport and don't call through (this is probably excessively hacky)
        // const mySpy = jest.spyOn(Rageshake, "exportedSubmitReportForTesting").mockImplementation(() => {});

        const opts = {};
        const result = await sendBugReport("/go/bugreport/go", opts);
        console.log("RESULT", result);

        expect(exportedSubmitReportForTesting).toHaveBeenCalledWith({});
    });

    // attempt to mock out XMLHttpRequest, it's too painful
    // needs to trigger xhrMock.onreadystatechange after the call to sendBugReport, but before it resolves.
    /*    it("should pass user email and app name to the http request", (done) => {
        // spy on http request
        //jest.spyOn(XMLHttpRequest.prototype, "open").mockReturnValue();
        //jest.spyOn(XMLHttpRequest.prototype, "send").mockReturnValue();

        const xhrMock: Partial<XMLHttpRequest> = {
            open: jest.fn(),
            send: jest.fn(),
            setRequestHeader: jest.fn(),
            readyState: XMLHttpRequest.DONE,
            onreadystatechange: () => {
                console.log("FFFFFFF mock onreadystatechange");
            }, // -> will be overwritten by prod code
            status: 200,
            response: "Hello World!",
        };
        jest.spyOn(window, "XMLHttpRequest").mockImplementation(() => xhrMock as XMLHttpRequest);

        // mock client.getThreePids() -> user email
        const client = MatrixClientPeg.safeGet();
        client.getThreePids = jest
            .fn()
            .mockResolvedValue({ threepids: [{ medium: "email", address: "hello@example.com" }] });
        client.getCrypto = () => undefined; // skip crypto we are not testing element code
        client.http = { request: () => Promise.resolve({}) }; // skip fetching some of the data in the rageshake over http

        const opts = {};
        sendBugReport("/go/bugreport/go", opts)
            .then((val) => {
                console.log("SUCCESSS", val);
                done();
            })
            .catch((err) => {
                console.log("ERRRRRRR", err);
                done();
            });
        // trigger the end of the mock request
        xhrMock.onreadystatechange(); // --> triggered too soon, req.onreadystatechange has not been set yet by prod code.
        //console.log("TTTTTTEST DONE");

        // expect(http request body) to contain user email and app name
        //expect(XMLHttpRequest.prototype.send).toHaveBeenCalledWith({});
        //expect(xhrMock.open).toBeCalledWith('GET', 'https://example.com/');
        //expect(xhrMock.setRequestHeader).toBeCalledWith('Accept', 'application/json');
        //expect(callback.mock.calls).toEqual([["Hello World!"]]);
    });*/

    // attempt with mock backend -> mock backend is not used.
    // We could do it with no backend, real request to fake url, and handle the econn error properly. Right now something hangs.
    /*    it("should pass user email and app name to the http request", (done) => {
        // try this maybe ?
        //        httpBackend.when("POST", "/go/bugreport/go").check(function (req) {
        //    expect(req.queryParams?.kind).toEqual("guest");
        //    done();
        //});
        httpBackend.when("POST", "/go/bugreport/go").respond(200, {});

        //httpBackend.flush(undefined);

        // mock client.getThreePids() -> user email
        const client = MatrixClientPeg.safeGet();
        client.getThreePids = jest
            .fn()
            .mockResolvedValue({ threepids: [{ medium: "email", address: "hello@example.com" }] });
        client.getCrypto = () => undefined; // skip crypto we are not testing element code
        client.http = { request: () => Promise.resolve({}) }; // skip fetching some of the data in the rageshake over http

        const opts = {};
        //await
        sendBugReport("/go/bugreport/go", opts)
            .then(() => {
                const requests = httpBackend.requests;
                // req.method === "POST"
                // body : req.data or req.rawData or req.toString() ?
                console.log("AAAAA", requests);
                httpBackend.flush("/go/bugreport/go");
                done();
            })
            .catch((err) => {
                console.log("ERRRRRRR", err);
                const requests = httpBackend.requests;
                console.log("requests", requests); // empty. mock backend is not called.
                httpBackend.flush("/go/bugreport/go");
                done();
            });
    });*/
});
