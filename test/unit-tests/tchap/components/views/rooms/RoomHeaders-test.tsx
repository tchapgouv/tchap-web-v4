import React from "react";
import { KnownMembership, MatrixClient, PendingEventOrdering, Room } from "matrix-js-sdk/src/matrix";
import { screen, render, type RenderOptions, getByLabelText, queryByLabelText, logRoles } from "jest-matrix-react";
import { mocked } from "jest-mock";
import { CallType } from "matrix-js-sdk/src/webrtc/call";

import { filterConsole, mkRoomMember, stubClient } from "~tchap-web/test/test-utils";
import RoomHeader from "~tchap-web/src/components/views/rooms/RoomHeader/RoomHeader";
import DMRoomMap from "~tchap-web/src/utils/DMRoomMap";
import { MatrixClientPeg } from "~tchap-web/src/MatrixClientPeg";
import MatrixClientContext from "~tchap-web/src/contexts/MatrixClientContext";
import SdkConfig, { type ConfigOptions } from "~tchap-web/src/SdkConfig";
import SettingsStore from "~tchap-web/src/settings/SettingsStore";
import { UIFeature } from "~tchap-web/src/settings/UIFeature";
import TchapRoomUtils from "~tchap-web/src/tchap/util/TchapRoomUtils";
import { TchapRoomType } from "~tchap-web/src/tchap/@types/tchap";
import { placeCall } from "~tchap-web/src/utils/room/placeCall";
import { PlatformCallType } from "~tchap-web/src/hooks/room/useRoomCall";
import * as ShieldUtils from "~tchap-web/src/utils/ShieldUtils";
import Modal from "~tchap-web/src/Modal";
import QuestionDialog from "~tchap-web/src/components/views/dialogs/QuestionDialog";
import * as hooks from "~tchap-web/src/hooks/useCall.ts";
import { ScopedRoomContextProvider } from "~tchap-web/src/contexts/ScopedRoomContext";
import RoomContext, { RoomContextType } from "~tchap-web/src/contexts/RoomContext";

jest.mock("~tchap-web/src/utils/ShieldUtils");
jest.mock("~tchap-web/src/tchap/util/TchapRoomUtils");
jest.mock("~tchap-web/src/utils/room/placeCall");

jest.mock("~tchap-web/src/hooks/right-panel/useCurrentPhase", () => ({
    useCurrentPhase: () => {
        return { currentPhase: "foo", isOpen: false };
    },
}));


/**
 *
 * @param count the number of users to create
 */
function mockRoomMembers(room: Room, count: number) {
    const members = Array(count)
        .fill(0)
        .map((_, index) => ({
            userId: `@user-${index}:example.org`,
            name: `Member ${index}`,
            rawDisplayName: `Member ${index}`,
            roomId: room.roomId,
            membership: KnownMembership.Join,
            getAvatarUrl: () => `mxc://avatar.url/user-${index}.png`,
            getMxcAvatarUrl: () => `mxc://avatar.url/user-${index}.png`,
        }));

    room.currentState.setJoinedMemberCount(members.length);
    room.getJoinedMembers = jest.fn().mockReturnValue(members);
}

describe("RoomHeader", () => {
    filterConsole(
        "[getType] Room !1:example.org does not have an m.room.create event",
        "Age for event was not available, using `now - origin_server_ts` as a fallback. If the device clock is not correct issues might occur.",
    );
    
    let room: Room;
    const ROOM_ID = "!1:example.org";
    const featurethreadName: string = "feature_thread";
    const featureVideoName: string = "feature_video_call";
    const featureVideoGroupName: string = "feature_video_group_call";
    const homeserverName: string = "my.home.server";
    const mockedTchapRoomUtils = mocked(TchapRoomUtils);
    let mockClient: MatrixClient;
    let roomContext: RoomContextType;

    const mockRoomViewStore = {
        isViewingCall: jest.fn().mockReturnValue(false),
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
    };

    function getWrapper(): RenderOptions {
        return {
            wrapper: ({ children }) => (
                <MatrixClientContext.Provider value={mockClient}>
                    <ScopedRoomContextProvider {...roomContext}>{children}</ScopedRoomContextProvider>
                </MatrixClientContext.Provider>
            ),
        };
    }
    

    const addHomeserverToMockConfig = (homeservers: string[], feature: string | string[]) => {
        const config: ConfigOptions = { tchap_features: {} };
        if (Array.isArray(feature)) {
            feature.forEach((f) => {
                config.tchap_features[f] = homeservers;
            });
        } else {
            config.tchap_features[feature] = homeservers;
        }
        SdkConfig.put(config);
    };

    const getComponent = (r = room) => render(<RoomHeader room={r} />, getWrapper());

    function mockDMRoom(memberCount: number = 2, r = room) {
        mockRoomMembers(r, memberCount);
        // in a dm room, the users are both admins
        jest.spyOn(r.currentState, "mayClientSendStateEvent").mockReturnValue(true);
        jest.spyOn(r, "getMember").mockReturnValue(mkRoomMember(r.roomId, "@alice:example.org"));

        DMRoomMap.setShared({
            getUserIdForRoomId: () => {
                return "@alice:example.org";
            },
        } as unknown as DMRoomMap);
    }

    beforeEach(async () => {
        mockClient = stubClient();
        room = new Room(ROOM_ID, MatrixClientPeg.get()!, "@alice:example.org", {
            pendingEventOrdering: PendingEventOrdering.Detached,
        });

        jest.spyOn(mockClient, "getDomain").mockImplementation(() => homeserverName);
        jest.spyOn(room, "isElementVideoRoom").mockReturnValue(false);
        jest.spyOn(room, "isCallRoom").mockReturnValue(false);
        jest.spyOn(room, "isSpaceRoom").mockReturnValue(false);
        jest.spyOn(room, "getType").mockReturnValue(undefined);

        // allow element calls
        jest.spyOn(room.currentState, "mayClientSendStateEvent").mockReturnValue(true);
        // activate the group and widget features
        jest.spyOn(SettingsStore, "getValue").mockImplementation((feature) => {
            return feature === "feature_group_calls" || feature == UIFeature.Widgets || feature == UIFeature.Voip;
        });
        mockedTchapRoomUtils.getTchapRoomType.mockImplementation(() => TchapRoomType.Private);

        DMRoomMap.setShared({
            getUserIdForRoomId: jest.fn(),
        } as unknown as DMRoomMap);

        // Reset the mock RoomViewStore
        mockRoomViewStore.isViewingCall.mockReturnValue(false);

        // Create a stable room context for this test
        roomContext = {
            ...RoomContext,
            roomId: ROOM_ID,
            roomViewStore: mockRoomViewStore,
        } as unknown as RoomContextType;

        jest.mocked(placeCall).mockImplementation(async (room, type, deviceOptions, startWithVideo) => {
            return Promise.resolve();
        });
        jest.spyOn(ShieldUtils, "shieldStatusForRoom").mockResolvedValue(ShieldUtils.E2EStatus.Normal);

        jest.spyOn(Modal, "createDialog").mockReturnValue({
            finished: Promise.resolve([true]),
            close: jest.fn(),
        });
    });

    afterEach(() => {
        SdkConfig.reset();
        jest.restoreAllMocks();
    });

    it("should render as expected", async () => {
        const { container } = render(<RoomHeader room={room} />, getWrapper());
        expect(container).toMatchSnapshot();
    });

    // it("renders the room header", () => {
    //     const { container } = getComponent();
    //     expect(container).toHaveTextContent(ROOM_ID);
    // });

    // it("display well the thread button when feature is activated", () => {
    //     addHomeserverToMockConfig(["*"], featurethreadName);

    //     getComponent();

    //     expect(screen.queryByRole("button", { name: "Threads" })).toBeInTheDocument();
    // });

    // it("hides the thread button when feature is deactivated", () => {
    //     addHomeserverToMockConfig(["other.homeserver"], featurethreadName);

    //     getComponent();

    //     expect(screen.queryByRole("button", { name: "Threads" })).not.toBeInTheDocument();
    // });

    // // For 1 to 1 video call
    // it("display well the video button when feature is activated for 1v1 call and has permission to send state event", () => {
    //     addHomeserverToMockConfig([homeserverName], [featureVideoName]);

    //     mockDMRoom();

    //     const { container } = getComponent();

    //     expect(queryByLabelText(container, "Video call")).toBeInTheDocument();
    // });

    // it("hides the video button when feature is deactivated for 1v1 call", () => {
    //     addHomeserverToMockConfig(["other.homeserver"], featureVideoName);
    //     mockDMRoom();

    //     const { container } = getComponent();

    //     expect(queryByLabelText(container, "Video call")).toBeNull();
    // });

    // it("hides the video button when feature is activated but is not a direct message room", () => {
    //     addHomeserverToMockConfig([homeserverName], featureVideoName);

    //     mockRoomMembers(room, 4);

    //     const { container } = getComponent();

    //     expect(queryByLabelText(container, "Video call")).toBeNull();
    // });

    // //  for video group element call button
    // it("display well the video group button when feature is activated", () => {
    //     addHomeserverToMockConfig([homeserverName], featureVideoGroupName);

    //     mockRoomMembers(room, 4);

    //     const { container } = getComponent();

    //     expect(getByLabelText(container, "Video call")).toBeInTheDocument();
    // });

    // it("hides the video group when feature is deactivated", () => {
    //     addHomeserverToMockConfig(["other.homeserver"], featureVideoGroupName);

    //     mockRoomMembers(room, 4);

    //     const { container } = getComponent();

    //     expect(queryByLabelText(container, "Video call")).toBeNull();
    // });

    // it("hides the video group when feature is activated but it is a forum", () => {
    //     mockedTchapRoomUtils.getTchapRoomType.mockImplementation(() => TchapRoomType.Forum);

    //     addHomeserverToMockConfig(["other.homeserver"], featureVideoGroupName);

    //     mockRoomMembers(room, 4);

    //     const { container } = getComponent();

    //     expect(queryByLabelText(container, "Video call")).toBeNull();
    // });

    // it("disables the video group when feature is activated user as not the right permissions", () => {
    //     addHomeserverToMockConfig([homeserverName], featureVideoGroupName);

    //     mockRoomMembers(room, 4);
    //     // give  lower permissions to the user
    //     jest.spyOn(room.currentState, "mayClientSendStateEvent").mockReturnValue(false);

    //     const { container } = getComponent();

    //     expect(queryByLabelText(container, "Video call")).toBeNull();
    // });

    // // :TCHAP: flow-legacy-call-element-call
    // it("Start legacy call when there is only two users in the room", async () => {
    //     addHomeserverToMockConfig([homeserverName], featureVideoGroupName);
    //     mockRoomMembers(room, 2);

    //     const { container } = getComponent();
    //     const videoButton = getByLabelText(container, "Video call");

    //     // Click the video call button
    //     await videoButton.click();

    //     // confirmation Modal should display
    //     expect(Modal.createDialog).toHaveBeenCalledWith(QuestionDialog, {
    //         button: "Continue",
    //         cancelButton: "Cancel",
    //         description: (
    //             <div>
    //                 <p>voip</p>
    //             </div>
    //         ),
    //         title: "voip",
    //     });
    //     // placeCall to have been called with PlatformCallType.LegacyCall
    //     expect(placeCall).toHaveBeenCalledWith(
    //         expect.anything(),
    //         CallType.Video,
    //         PlatformCallType.LegacyCall,
    //         undefined,
    //     );
    // });

    // it("directly start legacy call when it is a DM room and element call is enabled, no modale confirmation", async () => {
    //     addHomeserverToMockConfig([homeserverName], [featureVideoGroupName, featureVideoName]);
    //     mockDMRoom();

    //     const { container } = getComponent();
    //     const videoButton = getByLabelText(container, "Video call");
    //     logRoles(container);
    //     // Click the video call button
    //     await videoButton.click();
    //     // confirmation Modal should not display
    //     expect(Modal.createDialog).not.toHaveBeenCalled();
    //     // placeCall to have been called with PlatformCallType.LegacyCall
    //     expect(placeCall).toHaveBeenCalledWith(
    //         expect.anything(),
    //         CallType.Video,
    //         PlatformCallType.LegacyCall,
    //         undefined,
    //     );
    // });

    // it("directly start element call when there is more than two users in the room", async () => {
    //     addHomeserverToMockConfig([homeserverName], featureVideoGroupName);
    //     mockRoomMembers(room, 4);

    //     const { container } = getComponent();
    //     const videoButton = getByLabelText(container, "Video call");

    //     // Click the video call button
    //     await videoButton.click();
    //     // confirmation Modal should display
    //     expect(Modal.createDialog).toHaveBeenCalledWith(QuestionDialog, {
    //         button: "Continue",
    //         cancelButton: "Cancel",
    //         description: (
    //             <div>
    //                 <p>voip</p>
    //             </div>
    //         ),
    //         title: "voip",
    //     });
    //     // placeCall to have been called with PlatformCallType.ElementCall
    //     expect(placeCall).toHaveBeenCalledWith(
    //         expect.anything(),
    //         CallType.Video,
    //         PlatformCallType.ElementCall,
    //         undefined,
    //     );
    // });

    // it("should not display modal if the call has been started and it is a join state", async () => {
    //     // mock call already started with participant
    //     jest.spyOn(hooks, "useParticipantCount").mockReturnValue(2);

    //     addHomeserverToMockConfig([homeserverName], featureVideoGroupName);
    //     mockRoomMembers(room, 4);

    //     const { container } = getComponent();
    //     const videoJoinButton = getByLabelText(container, "Join video call");

    //     // Click the video  joincall button
    //     await videoJoinButton.click();
    //     // confirmation Modal should not display on join call
    //     expect(Modal.createDialog).not.toHaveBeenCalled();
    //     // placeCall to have been called with PlatformCallType.ElementCall
    //     expect(placeCall).toHaveBeenCalledWith(
    //         expect.anything(),
    //         CallType.Video,
    //         PlatformCallType.ElementCall,
    //         undefined,
    //     );
    // });
});
