import React from "react";
import { render, screen } from "@testing-library/react";

import TchapJoinRuleSettings  from "../../../../../src/components/views/settings/TchapJoinRuleSettings";
import { createTestClient, mkStubRoom } from "matrix-react-sdk/test/test-utils/test-utils";


describe("TchapJoinRule", () => {

    //build stub props
    const props = {
        room: mkStubRoom("roomId", "roomName", createTestClient()),
        closeSettingsFn(){},
        onError(error: Error){},
    }

    beforeEach(() => {
        
    });


    it("should render the tchap join rule without spaces option", () => {
        //arrange
        render(<TchapJoinRuleSettings {...props} />);

        //assert that spaces option is not here while private and public are
        const privateText = "Private (invite only)"
        const publicText = "Public"
        const spaceText = "Anyone in a space can find and join"
        
        expect(screen.getByText(privateText)).toBeDefined();
        expect(screen.getByText(publicText)).toBeDefined();
        expect(screen.queryByText(spaceText)).toBe(null);
    });

});
