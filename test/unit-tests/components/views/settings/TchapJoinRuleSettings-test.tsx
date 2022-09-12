import React from "react";
import { render, screen } from "@testing-library/react";

import TchapJoinRuleSettings  from "../../../../../src/components/views/settings/TchapJoinRuleSettings";
import { createTestClient, mkStubRoom } from "matrix-react-sdk/test/test-utils/test-utils";
import { EventTimeline, JoinRule, MatrixClient, Room, RoomState } from "matrix-js-sdk/src/matrix";
import { normalize } from "matrix-js-sdk/src/utils";


function mkStubRoomWithInviteRule(roomId: string, name: string, client: MatrixClient, joinRule: JoinRule): Room {
    const stubRoom:Room = mkStubRoom(roomId,name,client);
    stubRoom.getJoinRule =  jest.fn().mockReturnValue(joinRule);
    stubRoom.currentState.getJoinRule = jest.fn().mockReturnValue(joinRule);
    return stubRoom;
}

describe("TchapJoinRule", () => {


    beforeEach(() => {  });

    it("should render the tchap join rule with only private option", () => {
        //build stub private room 
        const props = {
            room: mkStubRoomWithInviteRule("roomId", "roomName", createTestClient(), JoinRule.Invite),
            closeSettingsFn(){},
            onError(error: Error){},
        }
        
        //arrange
        render(<TchapJoinRuleSettings {...props} />);

        //assert that spaces option is not here while private and public are
        const privateText = "Private (invite only)"
        const publicText = "Public"
        const spaceText = "Anyone in a space can find and join"
        
        expect(screen.queryByText(publicText)).toBe(null);
        expect(screen.queryByText(privateText)).toBeDefined();
        expect(screen.queryByText(spaceText)).toBe(null);
    });

    /*
    Impossible to mock a room to be considered as Public from TchapJoinRuleSettings point of view
    it("should render the tchap join rule with only public option", () => {
        //build stub private room 
        const props = {
            room: mkStubRoomWithInviteRule("roomId", "roomName", createTestClient(), JoinRule.Public),
            closeSettingsFn(){},
            onError(error: Error){},
        }
        
        //arrange
        render(<TchapJoinRuleSettings {...props} />);

        //assert that spaces option is not here while private and public are
        const privateText = "Private (invite only)"
        const publicText = "Public"
        const spaceText = "Anyone in a space can find and join"
        
        expect(screen.getByText(privateText)).toBe(null);
        expect(screen.getByText(publicText)).toBeDefined();
        expect(screen.queryByText(spaceText)).toBe(null);
    });
    */

});
