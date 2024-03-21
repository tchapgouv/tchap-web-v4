import React from "react";
import { render, screen } from "@testing-library/react";

import UnwrappedUserMenu from "~tchap-web-dep/matrix-react-sdk/src/components/structures/UserMenu";
import { TestSdkContext } from "~tchap-web-dep/matrix-react-sdk/test/TestSdkContext";
import { stubClient, wrapInSdkContext } from "~tchap-web-dep/matrix-react-sdk/test/test-utils";
import { MatrixClient } from "~tchap-web-dep/matrix-js-sdk/src/matrix";

describe("<UserMenu>", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let client: MatrixClient;
    let sdkContext: TestSdkContext;

    beforeEach(() => {
        client = stubClient();
        sdkContext = new TestSdkContext();
    });

    describe("<UserMenu> UI", () => {
        beforeEach(() => {
            const UserMenu = wrapInSdkContext(UnwrappedUserMenu, sdkContext);
            render(<UserMenu isPanelCollapsed={false} />);
        });

        // If this snapshot change, you should consider to check what change on the UI side from element
        // it"s a good indicator to see if this could introduce some regression on our code
        it("should render as expected", async () => {
            // open the user menu
            screen.getByRole("button", { name: "a11y" }).click();

            const menu = screen.getByRole("menu");
            expect(menu).toMatchSnapshot();
        });

        // you can also add some specific ui check here
        // ...
    });

    // Here you can add some business logic check
    describe("<UserMenu> faq", () => {
        beforeEach(() => {
            const UserMenu = wrapInSdkContext(UnwrappedUserMenu, sdkContext);
            render(<UserMenu isPanelCollapsed={true} />);
        });

        it("should open the faq when clicking on the faq button", () => {
            global.open = jest.fn();
            // open the user menu
            screen.getByRole("button", { name: "a11y" }).click();
            // click on the faq
            screen.getByRole("menuitem", { name: "common" }).click();
            expect(global.open).toHaveBeenCalledTimes(1);
            expect(global.open).toHaveBeenCalledWith("https://www.tchap.gouv.fr/faq", "_blank");
        });
    });

    // Here are the tests for checking the props of the component
    describe("<UserMenu> props", () => {});
});
