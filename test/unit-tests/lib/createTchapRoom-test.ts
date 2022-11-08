import { TchapRoomType } from '../../../src/@types/tchap';
import TchapCreateRoom from '../../../src/lib/createTchapRoom';

// todo(estellecomment) : these tests are redundant with TchapCreateRoomDialog-test. Either remove them or modify TchapCreateRoomDialog
// to not edit state directly.
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
                initial_state: [
                    {
                        "content": {
                            "rule": "restricted",
                        },
                        "state_key": "",
                        "type": "im.vector.room.access_rules",
                    },
                ],
                visibility: "private",
                preset: "private_chat",
            },
            guestAccess: false,
            joinRule: "invite",
            encryption: true,
            historyVisibility: "invited",
        };
        expect(TchapCreateRoom.roomCreateOptions("testName", TchapRoomType.Private))
            .toStrictEqual(privateRoomExpectedOpts);
        done();
    });

    it("builds option for public room without federation", (done) => {
        const publicRoomWithoutFederationExpectedOpts = {
            createOpts: {
                name: "testName",
                creation_content: {
                    "m.federate": false,
                },
                initial_state: [
                    {
                        "content": {
                            "rule": "restricted",
                        },
                        "state_key": "",
                        "type": "im.vector.room.access_rules",
                    },
                ],
                visibility: "public",
                preset: "public_chat",
            },
            guestAccess: false,
            joinRule: "public",
            encryption: false,
            historyVisibility: "shared",
        };
        expect(TchapCreateRoom.roomCreateOptions("testName", TchapRoomType.Forum, false))
            .toStrictEqual(publicRoomWithoutFederationExpectedOpts);
        done();
    });

    it("builds option for public room with federation", (done) => {
        const publicRoomWithFederationExpectedOpts = {
            createOpts: {
                name: "testName",
                creation_content: {
                    "m.federate": true,
                },
                initial_state: [
                    {
                        "content": {
                            "rule": "restricted",
                        },
                        "state_key": "",
                        "type": "im.vector.room.access_rules",
                    },
                ],
                visibility: "public",
                preset: "public_chat",
            },
            guestAccess: false,
            joinRule: "public",
            encryption: false,
            historyVisibility: "shared",
        };
        expect(TchapCreateRoom.roomCreateOptions("testName", TchapRoomType.Forum, true))
            .toStrictEqual(publicRoomWithFederationExpectedOpts);
        done();
    });

    it("builds option for external room", (done) => {
        const externalRoomExpectedOpts = {
            createOpts: {
                name: "testName",
                creation_content: {
                    "m.federate": true,
                },
                initial_state: [
                    {
                        "content": {
                            "rule": "unrestricted",
                        },
                        "state_key": "",
                        "type": "im.vector.room.access_rules",
                    },
                ],
                visibility: "private",
                preset: "private_chat",
            },
            guestAccess: false,
            joinRule: "invite",
            encryption: true,
            historyVisibility: "invited",
        };
        expect(TchapCreateRoom.roomCreateOptions("testName", TchapRoomType.External))
            .toStrictEqual(externalRoomExpectedOpts);
        done();
    });

    it("handles wrong inputs", (done) => {
        //todo
        done();
    });
});
