import React, { act } from "react";
import { fireEvent, logRoles, render, screen, waitFor } from "jest-matrix-react";
import { mocked } from "jest-mock";
import {
    EventType,
    JoinRule,
    MatrixEvent,
    Room,
    type MatrixClient,
    RoomMember,
    EventTimeline,
} from "matrix-js-sdk/src/matrix";

import TchapJoinRuleSettings from "~tchap-web/src/tchap/components/views/settings/TchapJoinRuleSettings";
import { TchapRoomAccessRule, TchapRoomAccessRulesEventId } from "~tchap-web/src/tchap/@types/tchap";
import { mkStubRoom, mockStateEventImplementation, mkEvent, stubClient } from "~tchap-web/test/test-utils/test-utils";
import DMRoomMap from "~tchap-web/src/utils/DMRoomMap";
import SdkConfig from "~tchap-web/src/SdkConfig";

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
    jest.spyOn(stubRoom.currentState, "getStateEvents").mockReturnValueOnce(
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
    jest.spyOn(stubRoom, "getMember").mockReturnValue(member);
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
    stubRoom.getJoinRule = jest.fn().mockReturnValue(joinRule);
    stubRoom.currentState.getJoinRule = jest.fn().mockReturnValue(joinRule);
    const events = [makeAccessEvent(accessRule)];
    mocked(stubRoom.currentState).getStateEvents.mockImplementation(mockStateEventImplementation(events));
    return stubRoom;
}

describe("TchapJoinRule", () => {
    beforeEach(() => {
        DMRoomMap.makeShared(stubClient());
        jest.spyOn(DMRoomMap.shared(), "getUserIdForRoomId").mockReturnValue(null);
    });

    it("should render the tchap join rule with only private option", () => {
        //build stub private room
        const props = {
            room: mkStubRoomWithInviteRule("roomId", "roomName", stubClient(), JoinRule.Invite),
            closeSettingsFn() {},
            onError(error: Error) {},
        };

        //arrange
        render(<TchapJoinRuleSettings {...props} />);

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
                stubClient(),
                JoinRule.Invite,
                TchapRoomAccessRule.Restricted,
            ),
            closeSettingsFn() {},
            onError(error: Error) {},
        };

        //arrange
        render(<TchapJoinRuleSettings {...props} />);

        expect(screen.queryByText(publicText)).toBe(null);
        expect(screen.queryByText(privateText)).toBeDefined();
        expect(screen.queryByText(allowExternalText)).toBeDefined();
        expect(screen.queryByText(spaceText)).toBe(null);
    });

    it("should render accesss room by link switch to be disable if member is not admin", async () => {
        //build stub private room
        const props = {
            room: mkStubRoomWithInviteRule("roomId", "roomName", stubClient(), JoinRule.Invite, false),
            closeSettingsFn() {},
            onError(error: Error) {},
        };

        render(<TchapJoinRuleSettings {...props} />);

        // link room access button
        const linkSwitch = screen.getByRole("switch", { name: "room_settings" });

        expect(linkSwitch).toBeDisabled();
        // should not see external link switch, since we didnt click on activate access by link
        expect(
            screen.queryByRole("switch", { name: "Allow external users to join this room" }),
        ).not.toBeInTheDocument();
    });

    it("should render standalone external switch when access link is activated and joinrule is invite", async () => {
        const cli = stubClient();
        cli.createAlias = jest.fn().mockResolvedValue({});

        SdkConfig.put({
            permalink_prefix: "https://tchap.gouv.fr",
        });

        const room = mkStubRoomWithInviteRule("roomId", "roomName", cli, JoinRule.Invite, true);

        jest.spyOn(room.getLiveTimeline().getState(EventTimeline.FORWARDS)!, "getStateEvents").mockReturnValue(
            new MatrixEvent({
                type: TchapRoomAccessRulesEventId,
                content: {
                    rule: "restricted",
                },
            }),
        );
        jest.spyOn(cli, "isRoomEncrypted").mockReturnValue(true);
        jest.spyOn(room.client, "sendStateEvent").mockResolvedValue({ event_id: "dada" });
        jest.spyOn(cli, "getRoom").mockReturnValue(room);
        // change join rule to public since we activated the access room by link
        // simulate the consequence on the  click of the activation of access link
        jest.spyOn(room.currentState, "getStateEvents").mockReturnValue(
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

        const { container } = render(<TchapJoinRuleSettings {...props} />);

        // click on access room by link
        const linkButton = screen.getByRole("switch", { name: "room_settings" });

        await waitFor(() => fireEvent.click(linkButton));

        // click confirm we want to activate access by link
        const okButton = screen.getByTestId("dialog-primary-button");
        await act(() => fireEvent.click(okButton));
        // should only display room link and external switch
        expect(screen.queryByText(privateText)).toBe(null);
        screen.debug();
        logRoles(container);
        // should see external link switch
        expect(screen.getByRole("switch", { name: "Allow external users to join this room" })).toBeInTheDocument();

        // should see copy link
        expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument();
    });
});
