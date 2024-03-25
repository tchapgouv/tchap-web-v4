import { stubClient } from "matrix-react-sdk/test/test-utils";
import sendBugReport, { submitReport } from "matrix-react-sdk/src/rageshake/submit-rageshake";
import { MatrixClientPeg } from "matrix-react-sdk/src/MatrixClientPeg";
import MockHttpBackend from "matrix-mock-request";
//import * as Rageshake from "matrix-react-sdk/src/rageshake/submit-rageshake"; // weird import for testing
//import sendBugReport from "matrix-react-sdk/src/rageshake/submit-rageshake";

describe("submit-rageshake", () => {
    let httpBackend: MockHttpBackend;

    beforeEach(() => {
        httpBackend = new MockHttpBackend();
        stubClient();
    });

    /*    it("should pass user email and app name to the http request", async () => {
        const client = MatrixClientPeg.safeGet();
        client.getThreePids = jest
            .fn()
            .mockResolvedValue({ threepids: [{ medium: "email", address: "hello@example.com" }] });

        // Skip some data fetching, which doesn't affect our patch. We are not interested in testing element code anyway.
        client.getCrypto = () => undefined;
        client.http = { request: () => Promise.resolve({}) };

        jest.mock("matrix-react-sdk/src/rageshake/submit-rageshake", () => ({
            submitReport: jest.fn(() => Promise.resolve({ id: 1, name: "John Doe" })),
        }));

        // Spy submitReport and don't call through (this is probably excessively hacky)
        // const mySpy = jest.spyOn(Rageshake, "exportedSubmitReportForTesting").mockImplementation(() => {});

        const opts = {};
        await sendBugReport("/go/bugreport/go", opts);

        expect(submitReport).toHaveBeenCalledWith({});
    });*/

    // attempt to mock out XMLHttpRequest, it's too painful
    // needs to trigger xhrMock.onreadystatechange after the call to sendBugReport, but before it resolves.
    it("should pass user email and app name to the http request", (done) => {
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
    });

    // attempt with mock backend -> mock backend is not used.
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
