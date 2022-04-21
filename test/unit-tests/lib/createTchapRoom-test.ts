import { TchapRoomType } from '../../../src/@types/tchap';
import roomCreateOptions from '../../../src/lib/createTchapRoom';

describe("Create room options", () => {

    beforeEach(() => {
    });

    it("builds option for private room", (done) => {
        expect(roomCreateOptions("testName", TchapRoomType.Private)).toStrictEqual(
            {
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
                historyVisibility: "joined",
              }
        )
        done()
    });

    it("builds option for public room without federation", (done) => {
        expect(roomCreateOptions("testName", TchapRoomType.Forum, false)).toStrictEqual(
            {
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
              }
        )
        done()

    });

    it("builds option for public room with federation", (done) => {
        expect(roomCreateOptions("testName", TchapRoomType.Forum, true)).toStrictEqual(
            {
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
              }
        )
        done()

    });

    it("builds option for external room", (done) => {
        expect(roomCreateOptions("testName", TchapRoomType.External)).toStrictEqual(
            {
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
                historyVisibility: "joined",
              }
        )
        done()

    });

    it("handles wrong inputs", (done) => {
        //todo
        done()
    });
})