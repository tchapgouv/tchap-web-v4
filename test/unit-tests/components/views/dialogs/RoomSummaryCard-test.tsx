/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MatrixEvent, Room } from "matrix-js-sdk/src/matrix";

import { _t } from "../../../../../yarn-linked-dependencies/matrix-react-sdk/src/languageHandler";
import { generateAndDownloadTextFile } from "../../../../../src/tchap/util/TchapExportFiles"; /* :TCHAP: */
import DMRoomMap from "../../../../../yarn-linked-dependencies/matrix-react-sdk/src/utils/DMRoomMap";
import RoomSummaryCard from "../../../../../yarn-linked-dependencies/matrix-react-sdk/src/components/views/right_panel/RoomSummaryCard";
import MatrixClientContext from "../../../../../yarn-linked-dependencies/matrix-react-sdk/src/contexts/MatrixClientContext";
import * as settingsHooks from "../../../../../yarn-linked-dependencies/matrix-react-sdk/src/hooks/useSettings";
import {
    getMockClientWithEventEmitter,
    mockClientMethodsUser,
} from "../../../../../yarn-linked-dependencies/matrix-react-sdk/test/test-utils";
import { RoomPermalinkCreator } from "../../../../../yarn-linked-dependencies/matrix-react-sdk/src/utils/permalinks/Permalinks";

jest.mock("../../../../../src/tchap/util/TchapExportFiles", () => ({
    generateAndDownloadTextFile: jest.fn(),
}));

describe("<RoomSummaryCard />", () => {
    const userId = "@alice:domain.org";
    const mockClient = getMockClientWithEventEmitter({
        ...mockClientMethodsUser(userId),
        isRoomEncrypted: jest.fn(),
        getRoom: jest.fn(),
    });
    const roomId = "!room:domain.org";
    const room = new Room(roomId, mockClient, userId);
    const roomCreateEvent = new MatrixEvent({
        type: "m.room.create",
        room_id: roomId,
        sender: userId,
        content: {
            creator: userId,
            room_version: "5",
        },
        state_key: "",
    });
    room.currentState.setStateEvents([roomCreateEvent]);
    const defaultProps = {
        room,
        onClose: jest.fn(),
        permalinkCreator: new RoomPermalinkCreator(room),
    };
    const getComponent = (props = {}) =>
        render(<RoomSummaryCard {...defaultProps} {...props} />, {
            wrapper: ({ children }) => (
                <MatrixClientContext.Provider value={mockClient}>{children}</MatrixClientContext.Provider>
            ),
        });

    const featureEnabledSpy = jest.spyOn(settingsHooks, "useFeatureEnabled");

    beforeEach(() => {
        jest.clearAllMocks();
        DMRoomMap.makeShared();

        mockClient.getRoom.mockReturnValue(room);
        jest.spyOn(room, "isElementVideoRoom").mockRestore();
        jest.spyOn(room, "isCallRoom").mockRestore();
        featureEnabledSpy.mockReset().mockReturnValue(false);
    });

    describe("Export room members feature", () => {
        it("should display the export button", () => {
            const { getByText } = getComponent();

            expect(getByText(_t("Export room members (txt)"))).toBeInTheDocument();
        });

        it("should display the tooltip on button click", () => {
            const { getByText } = getComponent();

            // NB: We simulate clicking and not hovering (although we should since it is a tooltip), because the fireEvent doesn't handle hovering
            // Before clicking, tooltip is hidden
            expect(
                getByText(
                    _t(
                        "By exporting the members of the room, you obtain the identifiers of the participants that you can copy/paste to invite them into another room.",
                    ),
                ),
            ).not.toBeVisible();

            fireEvent.click(getByText("Export room members (txt)"));

            // After clicking, tooltip must be visible
            expect(
                getByText(
                    _t(
                        "By exporting the members of the room, you obtain the identifiers of the participants that you can copy/paste to invite them into another room.",
                    ),
                ),
            ).toBeVisible();
        });

        it("calls generateAndDownloadTextFile function on button click", () => {
            const { getByText } = getComponent();

            fireEvent.click(getByText(_t("Export room members (txt)")));

            expect(generateAndDownloadTextFile).toHaveBeenCalled();
        });
    });
});
