import React from "react";
import { render, cleanup, screen } from "jest-matrix-react";
import fetchMock from "@fetch-mock/jest";

import SdkConfig, { type ConfigOptions } from "~tchap-web/src/SdkConfig";
import Welcome from "~tchap-web/src/components/views/auth/Welcome";
import { flushPromises } from "~tchap-web/test/test-utils";

describe("<Welcome />", () => {
    const addMasFlowToMockConfig = (isActive: boolean = false) => {
        // mock SdkConfig.get("tchap_features")
        const config: ConfigOptions = { tchap_mas_flow: { isActive } };
        SdkConfig.put(config);
    };

    const renderWelcomePage = () => render(<Welcome />);

    afterEach(() => {
        cleanup();
    });

    it("returns welcome_mas html when mas_flow is active in config", async () => {
        addMasFlowToMockConfig(true);

        // we need to mock the call to the correct html page, since it is embeded in the component
        // we don't need to mock the other html page since it shouldnt call it, otherwise it will simply throw an error
        fetchMock.get("welcome_mas.html", { body: "<h1>MAS</h1>" });

        renderWelcomePage();
        await flushPromises();

        // the component should choose the correct html page based on the sso_flo active value
        expect(screen.getByRole("heading", { level: 1 }).textContent).toEqual("MAS");
        expect(screen.getByTestId("mx_welcome_screen_mas")).toBeInTheDocument();

        // should have white background
        const authWrapper = document.getElementsByClassName("mx_AuthPage")[0];
        expect(authWrapper).toHaveStyle({ "background-color": "rgb(255, 255, 255)" });
    });

    it("returns proconnect welcome html page without mas flow", async () => {
        addMasFlowToMockConfig(false);

        // we need to mock the call to the correct html page, since it is embeded in the component
        // we don't need to mock the other html page since it shouldnt call it, otherwise it will simply throw an error
        fetchMock.get("welcome_with_proconnect.html", { body: "<h1>proconnect</h1>" });

        renderWelcomePage();
        await flushPromises();

        // the component should choose the correct html page based on the sso_flo active value
        expect(screen.getByRole("heading", { level: 1 }).textContent).toEqual("proconnect");
        expect(screen.getByTestId("mx_welcome_screen")).toBeInTheDocument();
        // should not have white background, but image
        const authWrapper = document.getElementsByClassName("mx_AuthPage")[0];
        expect(authWrapper).not.toHaveStyle({ "background-color": "white" });
    });
});
