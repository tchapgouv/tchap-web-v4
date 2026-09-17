/*
Copyright (C) 2025 Element Creations Ltd
Copyright 2024, 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

// @vitest-environment happy-dom

import { vi, describe, it, expect, beforeEach, afterEach, type Mocked } from "vitest";

import React from "react";
import { CallType, type MatrixCall } from "matrix-js-sdk/src/webrtc/call";
import {
    MatrixEvent,
    PendingEventOrdering,
    Room,
    RoomMember,
    type MatrixClient,
    ClientEvent,
} from "matrix-js-sdk/src/matrix";
import { KnownMembership } from "matrix-js-sdk/src/types";
import {
    getAllByLabelText,
    getByLabelText,
    getByText,
    queryByLabelText,
    render,
    type RenderOptions,
    screen,
    waitFor,
} from "test-utils-rtl";
import userEvent from "@testing-library/user-event";
import { filterConsole, setupAsyncStoreWithClient, stubClient } from "test-utils";

import RoomHeader from "./RoomHeader";
import DMRoomMap from "../../../../utils/DMRoomMap";
import { MatrixClientPeg } from "../../../../MatrixClientPeg";
import { ScopedRoomContextProvider } from "../../../../contexts/ScopedRoomContext";
import RoomContext, { type RoomContextType } from "../../../../contexts/RoomContext";
import RightPanelStore from "../../../../stores/right-panel/RightPanelStore";
import { RightPanelPhases } from "../../../../stores/right-panel/RightPanelStorePhases";
import SettingsStore from "../../../../settings/SettingsStore";
import SdkConfig from "../../../../SdkConfig";
import dispatcher from "../../../../dispatcher/dispatcher";
import { CallStore } from "../../../../stores/CallStore";
import { type Call } from "../../../../models/Call";
import * as ShieldUtils from "../../../../utils/ShieldUtils";
import { WidgetLayoutStore } from "../../../../stores/widgets/WidgetLayoutStore";
import MatrixClientContext from "../../../../contexts/MatrixClientContext";
import { _t } from "../../../../languageHandler";
import WidgetStore, { type IApp } from "../../../../stores/WidgetStore";
import { UIFeature } from "../../../../settings/UIFeature";
import { SettingLevel } from "../../../../settings/SettingLevel";
import { ElementCallMemberEventType } from "../../../../call-types";
import { SDKContext } from "../../../../contexts/SDKContext";
import { SDKContextClass } from "../../../../contexts/SDKContextClass.ts";
import TchapUIFeature from "../../../..//tchap/util/TchapUIFeature.ts";
import TchapRoomUtils from "../../../../tchap/util/TchapRoomUtils.ts";
import { TchapRoomType } from "../../../../tchap/@types/tchap.ts";
import Modal from "../../../../Modal.tsx";

vi.mock("../../../../utils/ShieldUtils");
vi.mock("../../../../hooks/right-panel/useCurrentPhase", () => ({
    useCurrentPhase: () => {
        return { currentPhase: "foo", isOpen: false };
    },
}));
vi.mock("../../../../Modal");

describe("RoomHeader", () => {
    filterConsole(
        "[getType] Room !1:example.org does not have an m.room.create event",
        "Age for event was not available, using `now - origin_server_ts` as a fallback. If the device clock is not correct issues might occur.",
    );

    let room: Room;
    const ROOM_ID = "!1:example.org";

    let setCardSpy: Mocked<RightPanelStore["setCard"]> | undefined;

    const mockRoomViewStore = {
        isViewingCall: vi.fn().mockReturnValue(false),
        on: vi.fn(),
        off: vi.fn(),
        emit: vi.fn(),
    };

    let client: MatrixClient;

    let roomContext: RoomContextType;

    function getWrapper(): RenderOptions {
        return {
            wrapper: ({ children }) => (
                <SDKContext.Provider value={SDKContextClass.instance}>
                    <MatrixClientContext.Provider value={client}>
                        <ScopedRoomContextProvider {...roomContext}>{children}</ScopedRoomContextProvider>
                    </MatrixClientContext.Provider>
                </SDKContext.Provider>
            ),
        };
    }

    beforeEach(async () => {
        client = stubClient();
        room = new Room(ROOM_ID, client, "@alice:example.org", {
            pendingEventOrdering: PendingEventOrdering.Detached,
        });
        DMRoomMap.setShared({
            getUserIdForRoomId: vi.fn(),
        } as unknown as DMRoomMap);

        setCardSpy = vi.spyOn(RightPanelStore.instance, "setCard");
        vi.spyOn(ShieldUtils, "shieldStatusForRoom").mockResolvedValue(ShieldUtils.E2EStatus.Normal);

        // Mock CallStore.instance.getCall to return null by default
        // Individual tests can override this when they need a specific Call object
        vi.spyOn(CallStore.instance, "getCall").mockReturnValue(null);

        // Reset the mock RoomViewStore
        mockRoomViewStore.isViewingCall.mockReturnValue(false);

        // Create a stable room context for this test
        roomContext = {
            ...RoomContext,
            roomId: ROOM_ID,
            roomViewStore: mockRoomViewStore,
        } as unknown as RoomContextType;

        vi.spyOn(
            TchapUIFeature,
            "isFeatureActiveForHomeserver",
        ).mockReturnValue(true);

        // make calls work
        vi.spyOn(room.currentState, "mayClientSendStateEvent").mockImplementation((key) => {
            if (key === ElementCallMemberEventType.name) return true;
            return false;
        });
        await setupAsyncStoreWithClient(CallStore.instance, client);
        vi.spyOn(CallStore.instance, "getConfiguredRTCTransports").mockReturnValue([{ 
            type: "livekit",
            livekit_service_url: "https://livekit"
        }])

        vi.spyOn(Modal, "createDialog").mockReturnValue({
            finished: Promise.resolve([true]),
            close: vi.fn(),
        });
         vi.spyOn(TchapRoomUtils, "getTchapRoomType").mockImplementation(() => Promise.resolve(TchapRoomType.Private));
    });

    afterEach(() => {
        vi.resetAllMocks();
        SettingsStore.reset();
    });

    it("renders the room header", () => {
        const { container } = render(<RoomHeader room={room} />, getWrapper());
        expect(container).toHaveTextContent(ROOM_ID);
    });

    it("opens the room summary", async () => {
        const user = userEvent.setup();
        const { container } = render(<RoomHeader room={room} />, getWrapper());

        await user.click(getByText(container, ROOM_ID));
        expect(setCardSpy).toHaveBeenCalledWith({ phase: RightPanelPhases.RoomSummary });
    });

    it("shows a face pile for rooms", async () => {
        const user = userEvent.setup();
        const members = [
            {
                userId: "@me:example.org",
                name: "Member",
                rawDisplayName: "Member",
                roomId: room.roomId,
                membership: KnownMembership.Join,
                getAvatarUrl: () => "mxc://avatar.url/image.png",
                getMxcAvatarUrl: () => "mxc://avatar.url/image.png",
            },
            {
                userId: "@you:example.org",
                name: "Member",
                rawDisplayName: "Member",
                roomId: room.roomId,
                membership: KnownMembership.Join,
                getAvatarUrl: () => "mxc://avatar.url/image.png",
                getMxcAvatarUrl: () => "mxc://avatar.url/image.png",
            },
            {
                userId: "@them:example.org",
                name: "Member",
                rawDisplayName: "Member",
                roomId: room.roomId,
                membership: KnownMembership.Join,
                getAvatarUrl: () => "mxc://avatar.url/image.png",
                getMxcAvatarUrl: () => "mxc://avatar.url/image.png",
            },
            {
                userId: "@bot:example.org",
                name: "Bot user",
                rawDisplayName: "Bot user",
                roomId: room.roomId,
                membership: KnownMembership.Join,
                getAvatarUrl: () => "mxc://avatar.url/image.png",
                getMxcAvatarUrl: () => "mxc://avatar.url/image.png",
            },
        ];
        room.currentState.setJoinedMemberCount(members.length);
        room.getJoinedMembers = vi.fn().mockReturnValue(members);

        const { container } = render(<RoomHeader room={room} />, getWrapper());

        expect(container).toHaveTextContent("4");

        const facePile = getByLabelText(document.body, "4 members");
        expect(facePile).toHaveTextContent("4");

        await user.click(facePile);

        expect(setCardSpy).toHaveBeenCalledWith({ phase: RightPanelPhases.MemberList });
    });

    it("has room info icon that opens the room info panel", async () => {
        const user = userEvent.setup();
        const { getAllByRole } = render(<RoomHeader room={room} />, getWrapper());
        const infoButton = getAllByRole("button", { name: "Room info" })[1];
        await user.click(infoButton);
        expect(setCardSpy).toHaveBeenCalledWith({ phase: RightPanelPhases.RoomSummary });
    });

    it("opens the thread panel", async () => {
        SdkConfig.put({
            tchap_features: {
                "feature_thread": ["*"]
            }
        });
        const user = userEvent.setup();
        render(<RoomHeader room={room} />, getWrapper());

        await user.click(getByLabelText(document.body, "Threads"));
        expect(setCardSpy).toHaveBeenCalledWith({ phase: RightPanelPhases.ThreadPanel });
    });

    it("opens the notifications panel", async () => {
        const user = userEvent.setup();
        await SettingsStore.setValue("feature_notifications", null, SettingLevel.DEVICE, true);

        render(<RoomHeader room={room} />, getWrapper());

        await user.click(getByLabelText(document.body, "Notifications"));
        expect(setCardSpy).toHaveBeenCalledWith({ phase: RightPanelPhases.NotificationPanel });
    });

    it("should not show voice call button in rooms larger than 2 members", async () => {
        mockRoomMembers(room, 3);
        render(<RoomHeader room={room} />, getWrapper());

        const videoButton = screen.getByRole("button", { name: "Video call" });
        expect(videoButton).toBeInTheDocument();
        expect(screen.queryByRole("button", { name: "Voice call" })).not.toBeInTheDocument();
    });

    describe("UIFeature.Voip disabled", () => {
        beforeEach(() => {
            SdkConfig.put({
                setting_defaults: {
                    [UIFeature.Voip]: false,
                },
            });
        });

        afterEach(() => {
            SdkConfig.reset();
            vi.restoreAllMocks();
        });

        it("should not show call buttons in rooms smaller than 3 members", async () => {
            mockRoomMembers(room, 2);
            render(<RoomHeader room={room} />, getWrapper());

            expect(screen.queryByRole("button", { name: "Video call" })).not.toBeInTheDocument();
            expect(screen.queryByRole("button", { name: "Voice call" })).not.toBeInTheDocument();
        });

        it("should not show call button in rooms larger than 2 members", async () => {
            mockRoomMembers(room, 3);
            render(<RoomHeader room={room} />, getWrapper());

            expect(screen.queryByRole("button", { name: "Video call" })).not.toBeInTheDocument();
            expect(screen.queryByRole("button", { name: "Voice call" })).not.toBeInTheDocument();
        });
    });

    describe("UIFeature.Widgets enabled (default)", () => {
        beforeEach(() => {
            SdkConfig.put({
                setting_defaults: {
                    [UIFeature.Widgets]: true,
                },
            });
        });

        afterEach(() => {
            SdkConfig.reset();
        });

        it("should show call buttons in a room with 2 members", () => {
            mockRoomMembers(room, 2);
            render(<RoomHeader room={room} />, getWrapper());
            const videoButton = screen.getByRole("button", { name: "Video call" });
            expect(videoButton).toBeInTheDocument();
        });

        it("should show call buttons in a room with more than 2 members", () => {
            mockRoomMembers(room, 3);
            render(<RoomHeader room={room} />, getWrapper());
            const videoButton = screen.getByRole("button", { name: "Video call" });
            expect(videoButton).toBeInTheDocument();
        });
    });

    describe("groups call disabled", () => {
        beforeEach(() => {
            SdkConfig.put({
                setting_defaults: {
                    [UIFeature.Widgets]: true,
                },
            });
        });

        afterEach(() => {
            SdkConfig.reset();
        });

        it("you can't call if there's already a call", () => {
            mockRoomMembers(room, 2);
            vi.spyOn(SDKContextClass.instance.legacyCallHandler, "getCallForRoom").mockReturnValue(
                // The JS-SDK does not export the class `MatrixCall` only the type
                {} as MatrixCall,
            );
            const { container } = render(<RoomHeader room={room} />, getWrapper());
            for (const button of getAllByLabelText(container, "Ongoing call")) {
                expect(button).toHaveAttribute("aria-disabled", "true");
            }
        });

        it("can call in large rooms if able to edit widgets", () => {
            mockRoomMembers(room, 10);
            vi.spyOn(room.currentState, "mayClientSendStateEvent").mockReturnValue(true);
            render(<RoomHeader room={room} />, getWrapper());

            const videoCallButton = screen.getByRole("button", { name: "Video call" });
            expect(videoCallButton).not.toHaveAttribute("aria-disabled", "true");
        });

        it("disable calls in large rooms by default", () => {
            mockRoomMembers(room, 10);
            vi.spyOn(room.currentState, "mayClientSendStateEvent").mockReturnValue(false);
            render(<RoomHeader room={room} />, getWrapper());
            expect(
                getByLabelText(document.body, "You do not have permission to start video calls", {
                    selector: "button",
                }),
            ).toHaveAttribute("aria-disabled", "true");
        });
    });

    describe("group call enabled", () => {
        beforeEach(async () => {
            SdkConfig.put({
                tchap_features: {
                    "feature_video_group_call": ["*"],
                    "feature_audio_call": ["*"],
                    "feature_video_call": ["*"],
                }
            });
            // Enable Element Call
            client._unstable_getRTCTransports = vi
                .fn()
                .mockResolvedValue([{ type: "livekit", livekit_service_url: "https://example.org" }]);
            // And ensure the CallStore has the transports configured.
            await setupAsyncStoreWithClient(CallStore.instance, client);
        });

        afterEach(() => {
            SdkConfig.reset();
            vi.restoreAllMocks();
        });

        it("can't call if there's an ongoing (pinned) call", () => {
            SdkConfig.add({
                element_call: {
                    use_exclusively: true,
                },
            });
            // allow element calls
            vi.spyOn(room.currentState, "mayClientSendStateEvent").mockReturnValue(true);
            vi.spyOn(WidgetLayoutStore.instance, "isInContainer").mockReturnValue(true);
            const widget = { type: "m.jitsi" } as IApp;
            vi.spyOn(CallStore.instance, "getCall").mockReturnValue({
                widget,
                on: () => {},
                off: () => {},
            } as unknown as Call);
            vi.spyOn(WidgetStore.instance, "getApps").mockReturnValue([widget]);
            render(<RoomHeader room={room} />, getWrapper());
            // Voice and video
            for (const button of screen.getAllByRole("button", { name: "Ongoing call" })) {
                expect(button).toHaveAttribute("aria-disabled", "true");
            }
        });

        it("buttons are disabled if there is an ongoing call", async () => {
            mockRoomMembers(room, 3);

            vi.spyOn(CallStore.prototype, "connectedCalls", "get").mockReturnValue(
                new Set([{ roomId: "some_other_room" } as Call]),
            );
            const { container } = render(<RoomHeader room={room} />, getWrapper());

            const [videoButton] = getAllByLabelText(container, "Ongoing call");

            expect(videoButton).toHaveAttribute("aria-disabled", "true");
        });

        it("join video call button is shown if there is an ongoing call", async () => {
            mockRoomMembers(room, 3);
            // Mock CallStore to return a call with 3 participants
            vi.spyOn(CallStore.instance, "getCall").mockReturnValue(createMockCall(ROOM_ID, 3));
            render(<RoomHeader room={room} />, getWrapper());
            const joinButton = getByLabelText(document.body, "Join video call");
            expect(joinButton).not.toHaveAttribute("aria-disabled", "true");
        });

        it("join voice call button is shown if there is an ongoing call", async () => {
            mockRoomMembers(room, 3);
            // Mock CallStore to return a call with 3 participants
            vi.spyOn(CallStore.instance, "getCall").mockReturnValue(createMockCall(ROOM_ID, 3, CallType.Voice));
            render(<RoomHeader room={room} />, getWrapper());
            const joinButton = getByLabelText(document.body, "Join voice call");
            expect(joinButton).not.toHaveAttribute("aria-disabled", "true");
        });

        it("clicking the join button of an ongoing video call joins as a video call", async () => {
            const user = userEvent.setup();
            mockRoomMembers(room, 3);
            vi.spyOn(CallStore.instance, "getCall").mockReturnValue(createMockCall(ROOM_ID, 3, CallType.Video, true));
            render(<RoomHeader room={room} />, getWrapper());

            const dispatcherSpy = vi.spyOn(dispatcher, "dispatch").mockImplementation(() => {});
            await user.click(getByLabelText(document.body, "Join video call"));

            expect(dispatcherSpy).toHaveBeenCalledWith(expect.objectContaining({ view_call: true, voiceOnly: false }));
        });

        it("clicking the join button of an ongoing voice call joins as a voice call", async () => {
            const user = userEvent.setup();
            mockRoomMembers(room, 3);
            vi.spyOn(CallStore.instance, "getCall").mockReturnValue(createMockCall(ROOM_ID, 3, CallType.Voice, true));
            render(<RoomHeader room={room} />, getWrapper());

            const dispatcherSpy = vi.spyOn(dispatcher, "dispatch").mockImplementation(() => {});
            await user.click(getByLabelText(document.body, "Join voice call"));

            expect(dispatcherSpy).toHaveBeenCalledWith(expect.objectContaining({ view_call: true, voiceOnly: true }));
        });

        it("join button is disabled if there is an other ongoing call", async () => {
            mockRoomMembers(room, 3);
            // Mock CallStore to return a call with 3 participants
            vi.spyOn(CallStore.instance, "getCall").mockReturnValue(createMockCall(ROOM_ID, 3));
            vi.spyOn(CallStore.prototype, "connectedCalls", "get").mockReturnValue(
                new Set([{ roomId: "some_other_room" } as Call]),
            );
            render(<RoomHeader room={room} />, getWrapper());
            const joinButton = getByLabelText(document.body, "Ongoing call");

            expect(joinButton).toHaveAttribute("aria-disabled", "true");
        });

        it("close lobby button is shown", async () => {
            mockRoomMembers(room, 3);

            mockRoomViewStore.isViewingCall.mockReturnValue(true);
            render(<RoomHeader room={room} />, getWrapper());
            expect(getByLabelText(document.body, "Close lobby")).toBeVisible();
        });

        it("close lobby button is shown if there is an ongoing call but we are viewing the lobby", async () => {
            mockRoomMembers(room, 3);
            // Mock CallStore to return a call with 3 participants
            vi.spyOn(CallStore.instance, "getCall").mockReturnValue(createMockCall(ROOM_ID, 3));
            mockRoomViewStore.isViewingCall.mockReturnValue(true);

            render(<RoomHeader room={room} />, getWrapper());
            expect(getByLabelText(document.body, "Close lobby")).toBeVisible();
        });
    });


    it("does not show a user status for non-DM rooms", async () => {
        await SettingsStore.setValue("feature_user_status", null, SettingLevel.DEVICE, true);
        vi.mocked(client.doesServerSupportExtendedProfiles).mockResolvedValue(true);
        vi.mocked(client.getExtendedProfileProperty).mockResolvedValue({ emoji: "🐎", text: "on a horse" });

        render(<RoomHeader room={room} />, getWrapper());

        expect(screen.queryByText("on a horse")).not.toBeInTheDocument();
        expect(client.doesServerSupportExtendedProfiles).not.toHaveBeenCalled();
    });

    it("shows a history icon if the room is encrypted and has shared history", async () => {
        vi.mocked(client.getCrypto()!).isEncryptionEnabledInRoom.mockResolvedValue(true);
        await room.addLiveEvents(
            [
                new MatrixEvent({
                    type: "m.room.history_visibility",
                    content: { history_visibility: "shared" },
                    sender: MatrixClientPeg.get()!.getSafeUserId(),
                    state_key: "",
                    room_id: room.roomId,
                }),
            ],
            { addToState: true },
        );

        render(<RoomHeader room={room} />, getWrapper());
        await waitFor(() => expect(getByLabelText(document.body, "New members see history")).toBeVisible());
    });

    describe("dm", () => {
        beforeEach(() => {
            // Make the mocked room a DM
            vi.mocked(DMRoomMap.shared().getUserIdForRoomId).mockImplementation((roomId) => {
                if (roomId === room.roomId) return "@user:example.com";
            });
            room.getMember = vi.fn((userId) => new RoomMember(room.roomId, userId));
            room.getJoinedMembers = vi.fn().mockReturnValue([
                {
                    userId: "@me:example.org",
                    name: "Member",
                    rawDisplayName: "Member",
                    roomId: room.roomId,
                    membership: KnownMembership.Join,
                    getAvatarUrl: () => "mxc://avatar.url/image.png",
                    getMxcAvatarUrl: () => "mxc://avatar.url/image.png",
                },
                {
                    userId: "@bob:example.org",
                    name: "Other Member",
                    rawDisplayName: "Other Member",
                    roomId: room.roomId,
                    membership: KnownMembership.Join,
                    getAvatarUrl: () => "mxc://avatar.url/image.png",
                    getMxcAvatarUrl: () => "mxc://avatar.url/image.png",
                },
            ]);
        });

        afterEach(() => {
            SdkConfig.reset();
        });

        it("shows the user status", async () => {
            await SettingsStore.setValue("feature_user_status", null, SettingLevel.DEVICE, true);
            vi.mocked(client.doesServerSupportExtendedProfiles).mockResolvedValue(true);
            vi.mocked(client.getExtendedProfileProperty).mockResolvedValue({ emoji: "🐎", text: "on a horse" });

            render(<RoomHeader room={room} />, getWrapper());

            await waitFor(() => expect(screen.getByText("on a horse")).toBeInTheDocument());
            expect(screen.getByText("🐎")).toBeInTheDocument();
        });

        it("updates user status when it changes", async () => {
            await SettingsStore.setValue("feature_user_status", null, SettingLevel.DEVICE, true);
            vi.mocked(client.doesServerSupportExtendedProfiles).mockResolvedValue(true);
            vi.mocked(client.getExtendedProfileProperty).mockResolvedValue({ emoji: "🐎", text: "on a horse" });

            render(<RoomHeader room={room} />, getWrapper());

            vi.mocked(client.getExtendedProfileProperty).mockResolvedValue({ emoji: "🐴", text: "is a horse" });
            client.emit(ClientEvent.UserProfileUpdate, "@bob:example.org", { emoji: "🐴", text: "is a horse" });

            await waitFor(() => expect(screen.getByText("is a horse")).toBeInTheDocument());
            expect(screen.getByText("🐴")).toBeInTheDocument();
        });

        it("does not show the user status when the feature is disabled", async () => {
            await SettingsStore.setValue("feature_user_status", null, SettingLevel.DEVICE, false);
            vi.mocked(client.doesServerSupportExtendedProfiles).mockResolvedValue(true);
            vi.mocked(client.getExtendedProfileProperty).mockResolvedValue({ emoji: "🐎", text: "on a horse" });

            render(<RoomHeader room={room} />, getWrapper());

            expect(screen.queryByText("on a horse")).not.toBeInTheDocument();
            expect(client.doesServerSupportExtendedProfiles).not.toHaveBeenCalled();
        });

        it("does not show the face pile for DMs", () => {
            SdkConfig.put({
                features: {
                    feature_notifications: false,
                },
            });
            const { asFragment } = render(<RoomHeader room={room} />, getWrapper());

            expect(asFragment()).toMatchSnapshot();
        });
    });



    it("should open room settings when clicking the room avatar", async () => {
        const user = userEvent.setup();
        render(<RoomHeader room={room} />, getWrapper());

        const dispatcherSpy = vi.spyOn(dispatcher, "dispatch");
        await user.click(getByLabelText(document.body, "Open room settings"));
        expect(dispatcherSpy).toHaveBeenCalledWith(expect.objectContaining({ action: "open_room_settings" }));
    });

    describe("Tchap custo", () => {
        it("should render as expected", async () => {
            const { container } = render(<RoomHeader room={room} />, getWrapper());
            expect(container).toMatchSnapshot();
        });

        it("renders the room header", () => {
            const { container } = render(<RoomHeader room={room} />, getWrapper());
            expect(container).toHaveTextContent(ROOM_ID);
        });

        it("display well the thread button when feature is activated", () => {
            render(<RoomHeader room={room} />, getWrapper());

            expect(screen.queryByRole("button", { name: "Threads" })).toBeInTheDocument();
        });

        it("hides the thread,video audio button when feature is deactivated", () => {
            vi.spyOn(
                TchapUIFeature,
                "isFeatureActiveForHomeserver",
            ).mockReturnValue(false);
            mockRoomMembers(room, 3);
             const { container }  = render(<RoomHeader room={room} />, getWrapper());

            expect(screen.queryByRole("button", { name: "Threads" })).not.toBeInTheDocument();
            expect(queryByLabelText(container, "Video call")).toBeNull();
        });

        it("hides the video group when feature is activated but it is a forum", () => {
            vi.spyOn(TchapRoomUtils, "getTchapRoomType").mockImplementation(() => Promise.resolve(TchapRoomType.Forum));

            vi.spyOn(
                TchapUIFeature,
                "isFeatureActiveForHomeserver",
            ).mockReturnValue(false);

            mockRoomMembers(room, 4);

            const { container } = render(<RoomHeader room={room} />, getWrapper());

            expect(queryByLabelText(container, "Video call")).toBeNull();
        });

        it("disables the video group when feature is activated user as not the right permissions", () => {
            mockRoomMembers(room, 4);
            // give  lower permissions to the user
            vi.spyOn(room.currentState, "mayClientSendStateEvent").mockReturnValue(false);

            const { container } = render(<RoomHeader room={room} />, getWrapper());

            expect(queryByLabelText(container, "Video call")).toBeNull();
        });
    });
});

/**
 * Creates a mock Call object with stable participants to prevent React dependency errors
 */
function createMockCall(
    roomId: string = "!1:example.org",
    participantCount: number = 0,
    callType: CallType = CallType.Video,
    isElementCall: boolean = false,
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
        widget: { id: "test-widget", type: isElementCall ? "m.call" : undefined },
        connectionState: "disconnected",
        callType,
        on: vi.fn(),
        off: vi.fn(),
        emit: vi.fn(),
    } as unknown as Call;
}

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
    room.getJoinedMembers = vi.fn().mockReturnValue(members);
}
