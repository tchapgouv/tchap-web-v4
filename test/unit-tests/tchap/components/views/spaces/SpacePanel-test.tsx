import React from "react";
import { render, cleanup } from "@testing-library/react";

import { stubClient } from "~matrix-react-sdk/test/test-utils";
import { MatrixClientPeg } from "~matrix-react-sdk/src/MatrixClientPeg";
import { wrapInMatrixClientContext, wrapInSdkContext } from "~matrix-react-sdk/test/test-utils";
import { SdkContextClass } from "~matrix-react-sdk/src/contexts/SDKContext";
import UnwrappedSpacePanel from "~matrix-react-sdk/src/components/views/spaces/SpacePanel";
import SdkConfig, { ConfigOptions } from "~tchap-web/linked-dependencies/matrix-react-sdk/src/SdkConfig";

describe("<SpacePanel />", () => {
    const SpacePanel = wrapInSdkContext(wrapInMatrixClientContext(UnwrappedSpacePanel), SdkContextClass.instance);
    const featureName: string = "feature_thread";
    const homeserverName: string = "my.home.server";

    const addHomeserverToMockConfig = (homeservers: string[]) => {
        // mock SdkConfig.get("tchap_features")
        const config: ConfigOptions = { tchap_features: {} };
        config.tchap_features[featureName] = homeservers;
        SdkConfig.put(config);
    };

    const renderSpacePanel = () => render(<SpacePanel />);

    beforeEach(() => {
        stubClient();
        MatrixClientPeg.getHomeserverName = () => homeserverName;
    });

    afterEach(() => {
        cleanup();
    });

    it("returns true when the the homeserver include thread feature", () => {
        addHomeserverToMockConfig([homeserverName]);
        const { container } = renderSpacePanel();

        expect(container.getElementsByClassName("mx_ThreadsActivityCentre_container").length).toBe(1);
    });

    it("returns false when the the homeserver doesnt include thread feature", async () => {
        addHomeserverToMockConfig(["other.homeserver"]);
        const { container } = renderSpacePanel();

        expect(container.getElementsByClassName("mx_ThreadsActivityCentre_container").length).toBe(0);
    });
});
