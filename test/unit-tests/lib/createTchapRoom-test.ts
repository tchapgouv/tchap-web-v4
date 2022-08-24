import { TchapRoomType } from '../../../src/@types/tchap';
import roomCreateOptions from '../../../src/lib/createTchapRoom';

describe("Create room options", () => {

    beforeEach(() => {
    });

    it("builds option for private room", (done) => {
        const privateRoomExpectedOpts = {
            createOpts: {
                name: "testName",
                creation_content: {
                    "m.federate": true,
                },
                accessRule: "restricted",
                visibility: "private",
                preset: "private_chat",
            },
            guestAccess: false,
            joinRule: "invite",
            encryption: true,
            historyVisibility: "invited",
        };
        expect(roomCreateOptions("testName", TchapRoomType.Private)).toStrictEqual(privateRoomExpectedOpts);
        done();
    });

    it("builds option for public room without federation", (done) => {
        const publicRoomWithoutFederationExpectedOpts = {
            createOpts: {
                name: "testName",
                creation_content: {
                    "m.federate": false,
                },
                accessRule: "restricted",
                visibility: "public",
                preset: "public_chat",
            },
            guestAccess: false,
            joinRule: "public",
            encryption: false,
            historyVisibility: "shared",
        };
        expect(roomCreateOptions("testName", TchapRoomType.Forum, false)).toStrictEqual(publicRoomWithoutFederationExpectedOpts);
        done();
    });

    it("builds option for public room with federation", (done) => {
        const publicRoomWithFederationExpectedOpts = {
            createOpts: {
                name: "testName",
                creation_content: {
                    "m.federate": true,
                },
                accessRule: "restricted",
                visibility: "public",
                preset: "public_chat",
            },
            guestAccess: false,
            joinRule: "public",
            encryption: false,
            historyVisibility: "shared",
        };
        expect(roomCreateOptions("testName", TchapRoomType.Forum, true)).toStrictEqual(publicRoomWithFederationExpectedOpts);
        done();
    });

    it("builds option for external room", (done) => {
        const externalRoomExpectedOpts = {
            createOpts: {
                name: "testName",
                creation_content: {
                    "m.federate": true,
                },
                accessRule: "unrestricted",
                visibility: "private",
                preset: "private_chat",
            },
            guestAccess: false,
            joinRule: "invite",
            encryption: true,
            historyVisibility: "invited",
        };
        expect(roomCreateOptions("testName", TchapRoomType.External)).toStrictEqual(externalRoomExpectedOpts);
        done();
    });

    it("handles wrong inputs", (done) => {
        //todo
        done()
    });
})