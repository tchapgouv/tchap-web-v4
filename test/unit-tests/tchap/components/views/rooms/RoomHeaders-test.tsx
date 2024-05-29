import React from "react";
import { PendingEventOrdering, Room } from "matrix-js-sdk/src/matrix";
import { screen, render, RenderOptions } from "@testing-library/react";

import { stubClient } from "~matrix-react-sdk/test/test-utils";
import RoomHeader from "~matrix-react-sdk/src/components/views/rooms/RoomHeader";
import DMRoomMap from "~matrix-react-sdk/src/utils/DMRoomMap";
import { MatrixClientPeg } from "~matrix-react-sdk/src/MatrixClientPeg";
import MatrixClientContext from "~matrix-react-sdk/src/contexts/MatrixClientContext";
import SdkConfig from "~matrix-react-sdk/src/SdkConfig";

function getWrapper(): RenderOptions {
    return {
        wrapper: ({ children }) => (
            <MatrixClientContext.Provider value={MatrixClientPeg.safeGet()}>{children}</MatrixClientContext.Provider>
        ),
    };
}

describe("RoomHeader", () => {
    let room: Room;
    const ROOM_ID = "!1:example.org";
    const featurethreadName: string = "feature_thread";
    const homeserverName: string = "my.home.server";

    const mockFeatureConfig = (homeservers: string[], feature: string) => {
        // mock SdkConfig.get("tchap_features")
        const config: ConfigOptions = { tchap_features: {} };
        config.tchap_features[feature] = homeservers;
        SdkConfig.put(config);
    };

    beforeEach(async () => {
        stubClient();
        room = new Room(ROOM_ID, MatrixClientPeg.get()!, "@alice:example.org", {
            pendingEventOrdering: PendingEventOrdering.Detached,
        });
        DMRoomMap.setShared({
            getUserIdForRoomId: jest.fn(),
        } as unknown as DMRoomMap);
    });

    const getComponent = () => render(<RoomHeader room={room} />, getWrapper());

    afterEach(() => {
        SdkConfig.reset();
        jest.restoreAllMocks();
    });

    it("renders the room header", () => {
        const { container } = getComponent();
        expect(container).toHaveTextContent(ROOM_ID);
    });

    it("display well the thread button when feature is activated", async () => {
        mockFeatureConfig([homeserverName], featurethreadName);

        getComponent();

        expect(screen.queryByTestId("room-header-thread-button")).toBeInTheDocument;
    });

    it("hides the thread button when feature is deactivated", async () => {
        mockFeatureConfig(["other.homeserver"], featurethreadName);

        getComponent();

        expect(screen.queryByTestId("room-header-thread-button")).not.toBeInTheDocument;
    });
});
