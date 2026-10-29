// @vitest-environment happy-dom

import { beforeEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { logRoles, render, screen } from "test-utils-rtl";
import { type MatrixClient } from "matrix-js-sdk/src/matrix";

import UnwrappedUserMenu from "~tchap-web/src/tchap/components/structures/UserMenu.tsx";
import { TestSDKContext } from "test-utils";
import { stubClient, wrapInSdkContext } from "test-utils";
import dispatch from "~tchap-web/src/dispatcher/dispatcher";
import { Action } from "~tchap-web/src/dispatcher/actions";

describe("<UserMenu>", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let client: MatrixClient;
    let sdkContext: TestSDKContext;

    beforeEach(() => {
        client = stubClient();
        sdkContext = new TestSDKContext();
        vi.spyOn(dispatch, "dispatch");
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
});
