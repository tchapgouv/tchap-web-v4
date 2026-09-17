import React from "react";
import { logRoles, render, screen } from "jest-matrix-react";
import { type MatrixClient } from "matrix-js-sdk/src/matrix";

import UnwrappedUserMenu from "~tchap-web/src/tchap/components/structures/UserMenu.tsx";
import { TestSDKContext } from "~tchap-web/test/unit-tests/TestSDKContext.ts";
import { stubClient, wrapInSdkContext } from "~tchap-web/test/test-utils";
import dispatch from "~tchap-web/src/dispatcher/dispatcher";
import { Action } from "~tchap-web/src/dispatcher/actions";

describe("<UserMenu>", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let client: MatrixClient;
    let sdkContext: TestSDKContext;

    beforeEach(() => {
        client = stubClient();
        sdkContext = new TestSDKContext();
        jest.spyOn(dispatch, "dispatch");
    });

    describe("<UserMenu> open directly all parameters", () => {

        it("should open the faq when clicking on the faq button", () => {
            const UserMenu = wrapInSdkContext(UnwrappedUserMenu, sdkContext);
            const { container } = render(<UserMenu isPanelCollapsed={true} />);
            // open the user menu
            screen.getByRole("button", { name: "User menu" }).click();
            // click on the faq
            logRoles(container);
            expect(dispatch.dispatch).toHaveBeenCalledWith({ action: Action.ViewUserSettings, initialTabId: undefined, props: undefined })
            expect(container).toMatchSnapshot();
        });
    });

    // Here are the tests for checking the props of the component
    describe("<UserMenu> props", () => {});
});
