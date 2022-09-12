import React from "react";
import { render, screen } from "@testing-library/react";

import TchapJoinRuleSettings  from "../../../../../src/components/views/settings/TchapJoinRuleSettings";
import { createTestClient, mkStubRoom } from "matrix-react-sdk/test/test-utils/test-utils";

describe("TchapJoinRule", () => {

    beforeEach(() => {

        const props = {
            room: mkStubRoom("roomId", "roomName", createTestClient()),
            closeSettingsFn(){},
            onError(error: Error){}
        }

        render(<TchapJoinRuleSettings {...props} />);
    });

    it("should render the tchap join rule without spaces", () => {
        //just testing 
        //screen.getByText(text);
    });
});
