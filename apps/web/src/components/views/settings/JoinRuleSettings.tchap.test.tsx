/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

// @vitest-environment happy-dom

import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { act, fireEvent, render, screen, waitFor, within } from "test-utils-rtl";
import {
    EventType,
    type GuestAccess,
    type HistoryVisibility,
    JoinRule,
    MatrixEvent,
    Room,
    ClientEvent,
    RoomMember,
    MatrixError,
    Visibility,
    EventTimeline,
    MatrixClient,
} from "matrix-js-sdk/src/matrix";
import { KnownMembership } from "matrix-js-sdk/src/types";
import {
    clearAllModals,
    flushPromises,
    getMockClientWithEventEmitter,
    mkEvent,
    mkStubRoom,
    mockClientMethodsRooms,
    mockClientMethodsServer,
    mockClientMethodsUser,
    mockStateEventImplementation,
} from "test-utils";

import { filterBoolean } from "../../../utils/arrays";
import JoinRuleSettings, { type JoinRuleSettingsProps } from "./JoinRuleSettings";
import { PreferredRoomVersions } from "../../../utils/PreferredRoomVersions";
import SettingsStore from "../../../settings/SettingsStore";
import { SDKContextClass } from "../../../contexts/SDKContextClass.ts";
import DMRoomMap from "../../../utils/DMRoomMap.ts";
import { TchapRoomAccessRule, TchapRoomAccessRulesEventId, TchapRoomType } from "~tchap-web/src/tchap/@types/tchap.ts";
import * as tchapRoomHook from "~tchap-web/src/tchap/util/TchapRoomHook";
import SdkConfig from "~tchap-web/src/SdkConfig.ts";

describe("<JoinRuleSettings />", () => {
    const userId = "@alice:server.org";
    const client = getMockClientWithEventEmitter({
        ...mockClientMethodsUser(userId),
        ...mockClientMethodsServer(),
        ...mockClientMethodsRooms([]),
        getDomain: vi.fn(),
        getLocalAliases: vi.fn().mockReturnValue([]),
        sendStateEvent: vi.fn(),
        upgradeRoom: vi.fn(),
        getProfileInfo: vi.fn(),
        invite: vi.fn().mockResolvedValue(undefined),
        isRoomEncrypted: vi.fn().mockReturnValue(false),
        getRoomDirectoryVisibility: vi.fn(),
        setRoomDirectoryVisibility: vi.fn(),
        matrixRTC: { on: vi.fn() },
        createAlias: vi.fn().mockResolvedValue({})
    });
    const roomId = "!room:server.org";
    const newRoomId = "!roomUpgraded:server.org";

    const defaultProps = {
        room: new Room(roomId, client, userId),
        closeSettingsFn: vi.fn(),
        onError: vi.fn(),
    };
    const getComponent = (props: Partial<JoinRuleSettingsProps> = {}) =>
        render(<JoinRuleSettings {...defaultProps} {...props} />);

    const setRoomStateEvents = (
        room: Room,
        roomVersion: string,
        joinRule?: JoinRule,
        guestAccess?: GuestAccess,
        history?: HistoryVisibility,
    ): void => {
        const events = filterBoolean<MatrixEvent>([
            new MatrixEvent({
                type: EventType.RoomCreate,
                content: { room_version: roomVersion },
                sender: userId,
                state_key: "",
                room_id: room.roomId,
            }),
            guestAccess &&
                new MatrixEvent({
                    type: EventType.RoomGuestAccess,
                    content: { guest_access: guestAccess },
                    sender: userId,
                    state_key: "",
                    room_id: room.roomId,
                }),
            history &&
                new MatrixEvent({
                    type: EventType.RoomHistoryVisibility,
                    content: { history_visibility: history },
                    sender: userId,
                    state_key: "",
                    room_id: room.roomId,
                }),
            joinRule &&
                new MatrixEvent({
                    type: EventType.RoomJoinRules,
                    content: { join_rule: joinRule },
                    sender: userId,
                    state_key: "",
                    room_id: room.roomId,
                }),
        ]);

        room.currentState.setStateEvents(events);
    };

    beforeEach(() => {
        client.sendStateEvent.mockReset().mockResolvedValue({ event_id: "test" });
        client.isRoomEncrypted.mockReturnValue(false);
        client.upgradeRoom.mockResolvedValue({ replacement_room: newRoomId });
        client.getRoom.mockReturnValue(null);
        vi.spyOn(SettingsStore, "getValue").mockImplementation((setting) => setting === "feature_ask_to_join");
        DMRoomMap.makeShared(client);

        vi.spyOn(tchapRoomHook, "useTchapRoom").mockReturnValue({
            currentRoomType: TchapRoomType.Private,
            updateTchapRoomType: vi.fn().mockResolvedValue(TchapRoomType.Private),
        });
    });

    type TestCase = [string, { label: string; unsupportedRoomVersion: string; preferredRoomVersion: string }];
    const testCases: TestCase[] = [
        [
            JoinRule.Knock,
            {
                label: "Ask to join",
                unsupportedRoomVersion: "6",
                preferredRoomVersion: PreferredRoomVersions.KnockRooms,
            },
        ],
        [
            JoinRule.Restricted,
            {
                label: "Space members",
                unsupportedRoomVersion: "8",
                preferredRoomVersion: PreferredRoomVersions.RestrictedRooms,
            },
        ],
    ];

    describe.each(testCases)("%s rooms", (joinRule, { label, unsupportedRoomVersion, preferredRoomVersion }) => {
        afterEach(async () => {
            await clearAllModals();
        });

        describe(`when room does not support join rule ${joinRule}`, () => {
            it(`should not show ${joinRule} room join rule when upgrade is disabled`, () => {
                // room that doesn't support the join rule
                const room = new Room(roomId, client, userId);
                setRoomStateEvents(room, unsupportedRoomVersion);

                getComponent({ room: room, promptUpgrade: false });

                expect(screen.queryByText(label)).not.toBeInTheDocument();
            });

            it(`should show ${joinRule} room join rule when upgrade is enabled`, () => {
                // room that doesn't support the join rule
                const room = new Room(roomId, client, userId);
                setRoomStateEvents(room, unsupportedRoomVersion);

                getComponent({ room: room, promptUpgrade: true });

                expect(within(screen.getByText(label)).getByText("Upgrade required")).toBeInTheDocument();
            });

            it(`upgrades room when changing join rule to ${joinRule}`, async () => {
                const deferredInvites: PromiseWithResolvers<any>[] = [];
                // room that doesn't support the join rule
                const room = new Room(roomId, client, userId);
                const parentSpace = new Room("!parentSpace:server.org", client, userId);
                vi.spyOn(SDKContextClass.instance.spaceStore, "getKnownParents").mockReturnValue(
                    new Set([parentSpace.roomId]),
                );
                setRoomStateEvents(room, unsupportedRoomVersion);
                const memberAlice = new RoomMember(roomId, "@alice:server.org");
                const memberBob = new RoomMember(roomId, "@bob:server.org");
                const memberCharlie = new RoomMember(roomId, "@charlie:server.org");
                vi.spyOn(room, "getMembersWithMembership").mockImplementation((membership) =>
                    membership === KnownMembership.Join ? [memberAlice, memberBob] : [memberCharlie],
                );
                const upgradedRoom = new Room(newRoomId, client, userId);
                setRoomStateEvents(upgradedRoom, preferredRoomVersion);
                client.getRoom.mockImplementation((id) => {
                    if (roomId === id) return room;
                    if (parentSpace.roomId === id) return parentSpace;
                    return null;
                });

                // resolve invites by hand
                // flushPromises is too blunt to test reliably
                client.invite.mockImplementation(() => {
                    const p = Promise.withResolvers<{}>();
                    deferredInvites.push(p);
                    return p.promise;
                });

                getComponent({ room: room, promptUpgrade: true });

                fireEvent.click(screen.getByText(label));

                const dialog = await screen.findByRole("dialog");

                fireEvent.click(within(dialog).getByText("Upgrade"));

                expect(client.upgradeRoom).toHaveBeenCalledWith(roomId, preferredRoomVersion, undefined);

                expect(within(dialog).getByText("Upgrading room")).toBeInTheDocument();

                await flushPromises();

                await expect(within(dialog).findByText("Loading new room")).resolves.toBeInTheDocument();

                // "create" our new room, have it come thru sync
                client.getRoom.mockImplementation((id) => {
                    if (roomId === id) return room;
                    if (newRoomId === id) return upgradedRoom;
                    if (parentSpace.roomId === id) return parentSpace;
                    return null;
                });
                client.emit(ClientEvent.Room, upgradedRoom);

                // invite users
                expect(await screen.findByText("Sending invites... (0 out of 2)")).toBeInTheDocument();
                deferredInvites.pop()!.resolve({});
                expect(await screen.findByText("Sending invites... (1 out of 2)")).toBeInTheDocument();
                deferredInvites.pop()!.resolve({});

                // Usually we see "Updating space..." in the UI here, but we
                // removed the assertion about it, because it sometimes fails,
                // presumably because it disappeared too quickly to be visible.

                await flushPromises();

                // done, modal closed
                await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
            });

            it(`upgrades room with no parent spaces or members when changing join rule to ${joinRule}`, async () => {
                // room that doesn't support the join rule
                const room = new Room(roomId, client, userId);
                setRoomStateEvents(room, unsupportedRoomVersion);
                const upgradedRoom = new Room(newRoomId, client, userId);
                setRoomStateEvents(upgradedRoom, preferredRoomVersion);

                getComponent({ room: room, promptUpgrade: true });

                fireEvent.click(screen.getByText(label));

                const dialog = await screen.findByRole("dialog");

                fireEvent.click(within(dialog).getByText("Upgrade"));

                expect(client.upgradeRoom).toHaveBeenCalledWith(roomId, preferredRoomVersion, undefined);

                expect(within(dialog).getByText("Upgrading room")).toBeInTheDocument();

                await flushPromises();

                await expect(within(dialog).findByText("Loading new room")).resolves.toBeInTheDocument();

                // "create" our new room, have it come thru sync
                client.getRoom.mockImplementation((id) => {
                    if (roomId === id) return room;
                    if (newRoomId === id) return upgradedRoom;
                    return null;
                });
                client.emit(ClientEvent.Room, upgradedRoom);

                await flushPromises();
                await flushPromises();

                // done, modal closed
                expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
            });
        });
    });

    describe("knock rooms directory visibility", () => {
        const getCheckbox = () => screen.getByRole("checkbox");
        let room: Room;

        beforeEach(() => (room = new Room(roomId, client, userId)));

        describe("when join rule is knock", () => {
            beforeEach(() => setRoomStateEvents(room, PreferredRoomVersions.KnockRooms, JoinRule.Knock));

            it("should set the visibility to public", async () => {
                vi.spyOn(client, "getRoomDirectoryVisibility").mockResolvedValue({ visibility: Visibility.Private });
                vi.spyOn(client, "setRoomDirectoryVisibility").mockResolvedValue({});
                getComponent({ room });
                fireEvent.click(getCheckbox());
                await act(async () => await flushPromises());
                expect(client.setRoomDirectoryVisibility).toHaveBeenCalledWith(roomId, Visibility.Public);
                expect(getCheckbox()).toBeChecked();
            });

            it("should set the visibility to private", async () => {
                vi.spyOn(client, "getRoomDirectoryVisibility").mockResolvedValue({ visibility: Visibility.Public });
                vi.spyOn(client, "setRoomDirectoryVisibility").mockResolvedValue({});
                getComponent({ room });
                await act(async () => await flushPromises());
                fireEvent.click(getCheckbox());
                await act(async () => await flushPromises());
                expect(client.setRoomDirectoryVisibility).toHaveBeenCalledWith(roomId, Visibility.Private);
                expect(getCheckbox()).not.toBeChecked();
            });

            it("should call onError if setting visibility fails", async () => {
                const error = new MatrixError();
                vi.spyOn(client, "getRoomDirectoryVisibility").mockResolvedValue({ visibility: Visibility.Private });
                vi.spyOn(client, "setRoomDirectoryVisibility").mockRejectedValue(error);
                getComponent({ room });
                fireEvent.click(getCheckbox());
                await act(async () => await flushPromises());
                expect(getCheckbox()).not.toBeChecked();
                expect(defaultProps.onError).toHaveBeenCalledWith(error);
            });
        });

        describe("when the room version is unsupported and upgrade is enabled", () => {
            it("should disable the checkbox", () => {
                setRoomStateEvents(room, "6", JoinRule.Invite);
                getComponent({ promptUpgrade: true, room });
                expect(getCheckbox()).toBeDisabled();
            });
        });

        describe("when join rule is not knock", () => {
            beforeEach(() => {
                setRoomStateEvents(room, PreferredRoomVersions.KnockRooms, JoinRule.Invite);
                getComponent({ room });
            });

            it("should disable the checkbox", () => {
                expect(getCheckbox()).toBeDisabled();
            });

            it("should set the visibility to private by default", () => {
                expect(getCheckbox()).not.toBeChecked();
            });
        });
    });

    it("should not show knock room join rule", async () => {
        vi.spyOn(SettingsStore, "getValue").mockReturnValue(false);
        const room = new Room(newRoomId, client, userId);
        setRoomStateEvents(room, PreferredRoomVersions.KnockRooms);
        getComponent({ room });
        expect(screen.queryByText("Ask to join")).not.toBeInTheDocument();
    });

    // :TCHAP:
    //assert that spaces option is not here while private and public are
    const privateText = "Private (invite only)";
    const publicText = "Public";
    const allowExternalText = "Allow external users to join this room";
    const spaceText = "Anyone in a space can find and join";
    function mkStubRoomWithInviteRule(
        roomId: string,
        name: string,
        client: MatrixClient,
        joinRule: JoinRule,
        isAdmin: boolean = false,
    ): Room {
        const stubRoom: Room = new Room(roomId, client, name);
        // Just once, since the next value can be changed depending on the actions in the test
        vi.spyOn(stubRoom.currentState, "getStateEvents").mockReturnValueOnce(
            new MatrixEvent({
                type: EventType.RoomJoinRules,
                content: {
                    join_rule: joinRule,
                },
            }),
        );
    
        const member = new RoomMember(roomId, "@userId");
        // mock user as powerlevel : admin or not
        member.powerLevel = isAdmin ? 100 : 0;
        vi.spyOn(stubRoom, "getMember").mockReturnValue(member);
        return stubRoom;
    }
    
    const makeAccessEvent = (rule: TchapRoomAccessRule = TchapRoomAccessRule.Restricted) =>
        mkEvent({
            type: TchapRoomAccessRulesEventId,
            event: true,
            content: {
                rule: rule,
            },
        } as any);
    
    function mkStubRoomWithAccessRule(
        roomId: string,
        name: string,
        client: MatrixClient,
        joinRule: JoinRule,
        accessRule: TchapRoomAccessRule,
    ): Room {
        const stubRoom: Room = mkStubRoom(roomId, name, client);
        stubRoom.getJoinRule = vi.fn().mockReturnValue(joinRule);
        stubRoom.currentState.getJoinRule = vi.fn().mockReturnValue(joinRule);
        const events = [makeAccessEvent(accessRule)];
        vi.mocked(stubRoom.currentState).getStateEvents.mockImplementation(mockStateEventImplementation(events));
        return stubRoom;
    }

    it("should render the tchap join rule with only private option", () => {
        //build stub private room
        const props = {
            room: mkStubRoomWithInviteRule("roomId", "roomName", client, JoinRule.Invite),
            closeSettingsFn() {},
            onError(error: Error) {},
        };

        //arrange
        render(<JoinRuleSettings {...props} />);

        expect(screen.queryByText(publicText)).toBe(null);
        expect(screen.queryByText(privateText)).toBeDefined();
        expect(screen.queryByText(allowExternalText)).toBe(null);
        expect(screen.queryByText(spaceText)).toBe(null);
    });

    it("should render the tchap join rule with only private option with restricted access rules", () => {
        //build stub private room
        const props = {
            room: mkStubRoomWithAccessRule(
                "roomId",
                "roomName",
                client,
                JoinRule.Invite,
                TchapRoomAccessRule.Restricted,
            ),
            closeSettingsFn() {},
            onError(error: Error) {},
        };

        //arrange
        render(<JoinRuleSettings {...props} />);

        expect(screen.queryByText(publicText)).toBe(null);
        expect(screen.queryByText(privateText)).toBeDefined();
        expect(screen.queryByText(allowExternalText)).toBeDefined();
        expect(screen.queryByText(spaceText)).toBe(null);
    });

    it("should render accesss room by link switch to be disable if member is not admin", async () => {
        //build stub private room
        const props = {
            room: mkStubRoomWithInviteRule("roomId", "roomName", client, JoinRule.Invite, false),
            closeSettingsFn() {},
            onError(error: Error) {},
        };

        render(<JoinRuleSettings {...props} />);

        // link room access button
        const linkSwitch = screen.getByRole("switch", { name: "room_settings" });

        expect(linkSwitch).toBeDisabled();
    });

    it("should render standalone external switch when access link is activated and joinrule is invite", async () => {

        SdkConfig.put({
            permalink_prefix: "https://tchap.gouv.fr",
        });

        const room = mkStubRoomWithInviteRule("roomId", "roomName", client, JoinRule.Invite, true);

        vi.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "getStateEvents").mockReturnValue(
            new MatrixEvent({
                type: TchapRoomAccessRulesEventId,
                content: {
                    rule: "restricted",
                },
            }),
        );
        vi.spyOn(client, "isRoomEncrypted").mockReturnValue(true);
        vi.spyOn(room.client, "sendStateEvent").mockResolvedValue({ event_id: "dada" });
        vi.spyOn(client, "getRoom").mockReturnValue(room);
        // change join rule to public since we activated the access room by link
        // simulate the consequence on the  click of the activation of access link
        vi.spyOn(room.currentState, "getStateEvents").mockReturnValue(
            new MatrixEvent({
                type: EventType.RoomJoinRules,
                content: {
                    join_rule: "Public",
                },
            }),
        );

        //build stub private room
        const props = {
            room,
            closeSettingsFn() {},
            onError(error: Error) {},
        };

        render(<JoinRuleSettings {...props} />);

        // click on access room by link
        const linkButton = screen.getByRole("switch", { name: "room_settings" });

        await waitFor(() => fireEvent.click(linkButton));

        // click confirm we want to activate access by link
        const okButton = screen.getByTestId("dialog-primary-button");
        await act(() => fireEvent.click(okButton));
        // should only display room link and external switch
        expect(screen.queryByText(privateText)).toBe(null);
        screen.debug();
        // should see external link switch
        expect(screen.getByRole("switch", { name: "Allow external users to join this room" })).toBeInTheDocument();

        // should see copy link
        expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument();
    });
    // end :TCHAP:
});
