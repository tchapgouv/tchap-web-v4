import React from "react";
import {
    KnownMembership,
    type MatrixClient,
    PendingEventOrdering,
    Room,
    type RoomMember,
} from "matrix-js-sdk/src/matrix";
import {
    screen,
    render,
    type RenderOptions,
    getByLabelText,
    queryByLabelText,
    logRoles,
    waitFor,
} from "jest-matrix-react";
import { mocked } from "jest-mock";
import { CallType } from "matrix-js-sdk/src/webrtc/call";
import userEvent from "@testing-library/user-event";

import { mkRoomMember, setupAsyncStoreWithClient, stubClient } from "~tchap-web/test/test-utils";
import RoomHeader from "~tchap-web/src/components/views/rooms/RoomHeader/RoomHeader";
import DMRoomMap from "~tchap-web/src/utils/DMRoomMap";
import MatrixClientContext from "~tchap-web/src/contexts/MatrixClientContext";
import SdkConfig, { type ConfigOptions } from "~tchap-web/src/SdkConfig";
import SettingsStore from "~tchap-web/src/settings/SettingsStore";
import { UIFeature } from "~tchap-web/src/settings/UIFeature";
import TchapRoomUtils from "~tchap-web/src/tchap/util/TchapRoomUtils";
import { TchapRoomType } from "~tchap-web/src/tchap/@types/tchap";
import * as ShieldUtils from "~tchap-web/src/utils/ShieldUtils";
import Modal from "~tchap-web/src/Modal";
import QuestionDialog from "~tchap-web/src/components/views/dialogs/QuestionDialog";
import { ScopedRoomContextProvider } from "~tchap-web/src/contexts/ScopedRoomContext";
import RoomContext, { type RoomContextType } from "~tchap-web/src/contexts/RoomContext";
import { CallStore } from "~tchap-web/src/stores/CallStore";
import LegacyCallHandler from "~tchap-web/src/LegacyCallHandler";
import dispatcher from "~tchap-web/src/dispatcher/dispatcher";
import { type Call } from "~tchap-web/src/models/Call";
import WidgetStore from "~tchap-web/src/stores/WidgetStore";
import { WidgetLayoutStore } from "~tchap-web/src/stores/widgets/WidgetLayoutStore";

jest.mock("~tchap-web/src/utils/ShieldUtils");
jest.mock("~tchap-web/src/tchap/util/TchapRoomUtils");

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
        jest.spyOn(r, "getMember").mockReturnValue(mkRoomMember(r.roomId, "@bob:example.org"));
        jest.spyOn(r, "getJoinedMembers").mockReturnValue([
            mkRoomMember(r.roomId, "@bob:example.org"),
            mkRoomMember(r.roomId, "@test:example.org"),
        ]);

        DMRoomMap.setShared({
            getUserIdForRoomId: () => {
                return "@bob:example.org";
            },
        } as unknown as DMRoomMap);
    }

    beforeEach(async () => {
        mockClient = stubClient();
        room = new Room(ROOM_ID, mockClient, "@alice:example.org", {
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
        mockedTchapRoomUtils.getTchapRoomType.mockImplementation(async () => TchapRoomType.Private);

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

        jest.spyOn(ShieldUtils, "shieldStatusForRoom").mockResolvedValue(ShieldUtils.E2EStatus.Normal);

        jest.spyOn(Modal, "createDialog").mockReturnValue({
            finished: Promise.resolve([true]),
            close: jest.fn(),
        });

        // Enable Element Call
        mockClient._unstable_getRTCTransports = jest
            .fn()
            .mockResolvedValue([{ type: "livekit", livekit_service_url: "https://example.org" }]);
        // And ensure the CallStore has the transports configured.
        await setupAsyncStoreWithClient(CallStore.instance, mockClient);
        await setupAsyncStoreWithClient(WidgetStore.instance, mockClient);
    });

    afterEach(() => {
        SdkConfig.reset();
        jest.restoreAllMocks();
    });

    it("should render as expected", async () => {
        const { container } = getComponent();
        expect(container).toMatchSnapshot();
    });

    it("renders the room header", () => {
        const { container } = getComponent();
        expect(container).toHaveTextContent(ROOM_ID);
    });

    it("display well the thread button when feature is activated", () => {
        addHomeserverToMockConfig(["*"], featurethreadName);

        getComponent();

        expect(screen.queryByRole("button", { name: "Threads" })).toBeInTheDocument();
    });

    it("hides the thread button when feature is deactivated", () => {
        addHomeserverToMockConfig(["other.homeserver"], featurethreadName);

        getComponent();

        expect(screen.queryByRole("button", { name: "Threads" })).not.toBeInTheDocument();
    });

    // For 1 to 1 video call
    it("display well the video button when feature is activated for 1v1 call and has permission to send state event", () => {
        addHomeserverToMockConfig([homeserverName], [featureVideoName]);

        mockDMRoom();

        const { container } = getComponent();

        expect(queryByLabelText(container, "Video call")).toBeInTheDocument();
    });

    it("hides the video button when feature is deactivated for 1v1 call", () => {
        addHomeserverToMockConfig(["other.homeserver"], featureVideoName);
        mockDMRoom();

        const { container } = getComponent();

        expect(queryByLabelText(container, "Video call")).toBeNull();
    });

    it("hides the video button when feature is activated but is not a direct message room", () => {
        addHomeserverToMockConfig([homeserverName], featureVideoName);

        mockRoomMembers(room, 4);

        const { container } = getComponent();

        expect(queryByLabelText(container, "Video call")).toBeNull();
    });

    // for video group element call button
    it("display well the video group button when feature is activated", () => {
        addHomeserverToMockConfig([homeserverName], featureVideoGroupName);

        jest.spyOn(room.currentState, "mayClientSendStateEvent").mockReturnValue(true);
        mockRoomMembers(room, 4);

        const { container } = getComponent();

        expect(getByLabelText(container, "Video call")).toBeInTheDocument();
    });

    it("hides the video group when feature is deactivated", () => {
        addHomeserverToMockConfig(["other.homeserver"], featureVideoGroupName);

        mockRoomMembers(room, 4);

        const { container } = getComponent();

        expect(queryByLabelText(container, "Video call")).toBeNull();
    });

    it("hides the video group when feature is activated but it is a forum", () => {
        mockedTchapRoomUtils.getTchapRoomType.mockImplementation(() => TchapRoomType.Forum);

        addHomeserverToMockConfig(["other.homeserver"], featureVideoGroupName);

        mockRoomMembers(room, 4);

        const { container } = getComponent();

        expect(queryByLabelText(container, "Video call")).toBeNull();
    });

    it("disables the video group when feature is activated user as not the right permissions", () => {
        addHomeserverToMockConfig([homeserverName], featureVideoGroupName);

        mockRoomMembers(room, 4);
        // give  lower permissions to the user
        jest.spyOn(room.currentState, "mayClientSendStateEvent").mockReturnValue(false);

        const { container } = getComponent();

        expect(queryByLabelText(container, "Video call")).toBeNull();
    });

    // // :TCHAP: flow-legacy-call-element-call
    it("Start legacy call when there is only two users in the room", async () => {
        addHomeserverToMockConfig([homeserverName], featureVideoGroupName);
        mockRoomMembers(room, 2);
        const placeCallSpy = jest.spyOn(LegacyCallHandler.instance, "placeCall");
        const { container } = getComponent();
        const videoButton = getByLabelText(container, "Video call");

        const user = userEvent.setup();
        // Click the video call button
        await user.click(videoButton);

        // confirmation Modal should display
        expect(Modal.createDialog).toHaveBeenCalledWith(QuestionDialog, {
            button: "Continue",
            cancelButton: "Cancel",
            description: (
                <div>
                    <p>voip</p>
                </div>
            ),
            title: "voip",
        });

        // placeCall to have been called with PlatformCallType.LegacyCall so only two params, legacy call is not given
        expect(placeCallSpy).toHaveBeenCalledWith(room.roomId, CallType.Video);
    });

    it("directly start legacy call when it is a DM room and element call is enabled, no modale confirmation", async () => {
        addHomeserverToMockConfig([homeserverName], [featureVideoGroupName, featureVideoName]);
        mockDMRoom(2, room);

        const placeCallSpy = jest.spyOn(LegacyCallHandler.instance, "placeCall");
        const { container } = getComponent();
        const videoButton = getByLabelText(container, "Video call");

        const user = userEvent.setup();
        // Click the video call button
        await user.click(videoButton);

        // placeCall to have been called with PlatformCallType.LegacyCall
        expect(placeCallSpy).toHaveBeenCalledWith(room.roomId, CallType.Video);
    });

    it("directly start element call when there is more than two users in the room", async () => {
        addHomeserverToMockConfig([homeserverName], featureVideoGroupName);

        mockRoomMembers(room, 4);
        const { container } = getComponent();
        const videoButton = getByLabelText(container, "Video call");
        screen.debug();
        const user = userEvent.setup();
        // Click the video call button
        await user.click(videoButton);

        // confirmation Modal should display
        await waitFor(() =>
            expect(Modal.createDialog).toHaveBeenCalledWith(QuestionDialog, {
                button: "Continue",
                cancelButton: "Cancel",
                description: (
                    <div>
                        <p>voip</p>
                    </div>
                ),
                title: "voip",
            }),
        );
        const dispatcherSpy = jest.spyOn(dispatcher, "dispatch").mockImplementation();

        waitFor(() => expect(dispatcherSpy).toHaveBeenCalledWith(expect.objectContaining({ view_call: true })));
    });

    it("should not display modal if the call has been started and it is a join state", async () => {
        // mock call already started with participant
        jest.spyOn(CallStore.instance, "getCall").mockReturnValue(createMockCall(ROOM_ID, 4));
        const spy = jest.spyOn(WidgetLayoutStore.instance, "moveToContainer");

        addHomeserverToMockConfig([homeserverName], featureVideoGroupName);
        mockRoomMembers(room, 4);

        const { container } = getComponent();
        logRoles(container);
        const videoJoinButton = getByLabelText(container, "Join video call");

        const user = userEvent.setup();
        // Click the video call button
        await user.click(videoJoinButton);

        // confirmation Modal should not display on join call
        expect(Modal.createDialog).not.toHaveBeenCalled();
        // element call is not using place call anymore, but widget
        await waitFor(() => expect(spy).toHaveBeenCalledWith(room, { id: "test-widget" }, expect.anything()));
    });
});

/**
 * Creates a mock Call object with stable participants to prevent React dependency errors
 */
function createMockCall(
    roomId: string = "!1:example.org",
    participantCount: number = 0,
    callType: CallType = CallType.Video,
): Call {
    const participants = new Map();

    // Create mock participants with devices
    for (let i = 0; i < participantCount; i++) {
        const mockMember = {
            userId: `@user-${i}:example.org`,
            name: `Member ${i}`,
        } as RoomMember;

        const deviceSet = new Set([`device-${i}`]);
        participants.set(mockMember, deviceSet);
    }

    return {
        roomId,
        participants,
        widget: { id: "test-widget" },
        connectionState: "disconnected",
        callType,
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
    } as unknown as Call;
}
