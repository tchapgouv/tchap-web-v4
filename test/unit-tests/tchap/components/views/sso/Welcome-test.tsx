import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import fetchMock from "fetch-mock";

import SdkConfig, { ConfigOptions } from "~matrix-react-sdk/src/SdkConfig";
import Welcome from "~matrix-react-sdk/src/components/views/auth/Welcome";
import { flushPromises } from "~matrix-react-sdk/test/test-utils";

describe("<Welcome />", () => {
    const addSSOFlowToMockConfig = (isActive: boolean = false) => {
        // mock SdkConfig.get("tchap_features")
        const config: ConfigOptions = { tchap_sso_flow: { isActive } };
        SdkConfig.put(config);
    };

    const renderWelcomePage = () => render(<Welcome />);

    afterEach(() => {
        cleanup();
    });

    it("returns welcome_sso html when sso_flow is active in config ", async () => {
        addSSOFlowToMockConfig(true);

        // we need to mock the call to the correct html page, since it is embeded in the component
        // we don't need to mock the other html page since it shouldnt call it, otherwise it will simply throw an error
        fetchMock.get("/welcome_sso.html", { body: "<h1>SSO</h1>" });

        renderWelcomePage();
        await flushPromises();

        // the component should choose the correct html page based on the sso_flo active value
        expect(screen.getByRole("heading", { level: 1 }).textContent).toEqual("SSO");
    });

    it("returns normal welcome html page without sso flow ", async () => {
        addSSOFlowToMockConfig(false);

        // we need to mock the call to the correct html page, since it is embeded in the component
        // we don't need to mock the other html page since it shouldnt call it, otherwise it will simply throw an error
        fetchMock.get("/welcome.html", { body: "<h1>Welcome</h1>" });

        renderWelcomePage();
        await flushPromises();

        // the component should choose the correct html page based on the sso_flo active value
        expect(screen.getByRole("heading", { level: 1 }).textContent).toEqual("Welcome");
    });
});
