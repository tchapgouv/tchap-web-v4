/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { fireEvent, render, screen, within } from "jest-matrix-react";
import React from "react";
import { type MatrixClient, ThreepidMedium } from "matrix-js-sdk/src/matrix";
import { logger } from "matrix-js-sdk/src/logger";
import userEvent from "@testing-library/user-event";
import { type MockedObject } from "jest-mock-vitest-adapter";
import { ToastContext, ToastRack } from "@element-hq/web-shared-components";

import AccountUserSettingsTab from "~tchap-web/src/components/views/settings/tabs/user/AccountUserSettingsTab";
import { SDKContext } from "~tchap-web/src/contexts/SDKContext";
import { TestSDKContext } from "~tchap-web/test/unit-tests/TestSDKContext.ts";
import SettingsStore from "~tchap-web/src/settings/SettingsStore";
import {
    getMockClientWithEventEmitter,
    mockClientMethodsServer,
    mockClientMethodsUser,
    mockPlatformPeg,
    flushPromises,
} from "~tchap-web/test/test-utils";
import { UIFeature } from "~tchap-web/src/settings/UIFeature";
import MatrixClientContext from "~tchap-web/src/contexts/MatrixClientContext";
import Modal from "~tchap-web/src/Modal";
import TchapUIFeature from "~tchap-web/src/tchap/util/TchapUIFeature";

let changePasswordOnError: (e: Error) => void;
let changePasswordOnFinished: () => void;

jest.mock(
    "~tchap-web/src/components/views/settings/ChangePassword",
    () =>
        ({ onError, onFinished }: { onError: (e: Error) => void; onFinished: () => void }) => {
            changePasswordOnError = onError;
            changePasswordOnFinished = onFinished;
            return <button>Mock change password</button>;
        },
);

describe("<AccountUserSettingsTab />", () => {
    const defaultProps = {
        closeSettingsFn: jest.fn(),
    };

    const userId = "@alice:server.org";
    let mockClient: MockedObject<MatrixClient>;

    let stores: TestSDKContext;

    const getComponent = () => (
        <MatrixClientContext.Provider value={mockClient}>
            <SDKContext.Provider value={stores}>
                <ToastContext.Provider value={new ToastRack()}>
                    <AccountUserSettingsTab {...defaultProps} />
                </ToastContext.Provider>
            </SDKContext.Provider>
        </MatrixClientContext.Provider>
    );

    beforeEach(() => {
        jest.spyOn(SettingsStore, "getValue").mockReturnValue(false);
        mockPlatformPeg();
        jest.clearAllMocks();
        jest.spyOn(SettingsStore, "getValue").mockRestore();
        jest.spyOn(logger, "error").mockRestore();

        mockClient = getMockClientWithEventEmitter({
            ...mockClientMethodsUser(userId),
            ...mockClientMethodsServer(),
            getCapabilities: jest.fn(),
            getThreePids: jest.fn(),
            getIdentityServerUrl: jest.fn(),
            deleteThreePid: jest.fn(),
            getMediaConfig: jest.fn(),
            getAuthMetadata: jest.fn().mockRejectedValue(new Error("not implemented")),
        });

        mockClient.getCapabilities.mockResolvedValue({});
        mockClient.getThreePids.mockResolvedValue({
            threepids: [],
        });
        mockClient.deleteThreePid.mockResolvedValue({
            id_server_unbind_result: "success",
        });

        stores = new TestSDKContext();
        stores._client = mockClient;
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("does not show account management link when not available", () => {
        const { queryByTestId } = render(getComponent());

        expect(queryByTestId("external-account-management-outer")).toBeFalsy();
        expect(queryByTestId("external-account-management-link")).toBeFalsy();
    });

    it("show account management link in expected format", async () => {
        const accountManagementLink = "https://id.server.org/my-account";
        mockClient.getAuthMetadata.mockResolvedValue({
            account_management_uri: accountManagementLink,
        } as any);

        render(getComponent());

        const manageAccountLink = await screen.findByRole("button", { name: "Manage account" });
        expect(manageAccountLink.getAttribute("href")).toMatch(accountManagementLink);
    });

    describe("deactivate account", () => {
        it("should not render section when account deactivation feature is disabled", () => {
            jest.spyOn(SettingsStore, "getValue").mockImplementation(
                (settingName) => settingName !== UIFeature.Deactivate,
            );
            render(getComponent());

            expect(screen.queryByText("Deactivate Account")).not.toBeInTheDocument();
            expect(SettingsStore.getValue).toHaveBeenCalledWith(UIFeature.Deactivate);
        });
        it("should not render section when account is managed externally", async () => {
            jest.spyOn(SettingsStore, "getValue").mockImplementation(
                (settingName) => settingName === UIFeature.Deactivate,
            );
            // account is managed externally when we have delegated auth configured
            const accountManagementLink = "https://id.server.org/my-account";
            mockClient.getAuthMetadata.mockResolvedValue({
                account_management_uri: accountManagementLink,
            } as any);
            render(getComponent());

            await flushPromises();

            expect(screen.queryByText("Deactivate Account")).not.toBeInTheDocument();
        });
        it("should render section when account deactivation feature is enabled", () => {
            jest.spyOn(SettingsStore, "getValue").mockImplementation(
                (settingName) => settingName === UIFeature.Deactivate,
            );
            render(getComponent());

            expect(screen.getByText("Deactivate Account", { selector: "h2" }).parentElement!).toMatchSnapshot();
        });
        it("should display the deactivate account dialog when clicked", async () => {
            jest.spyOn(SettingsStore, "getValue").mockImplementation(
                (settingName) => settingName === UIFeature.Deactivate,
            );

            const finishedDeferred = Promise.withResolvers<[boolean]>();
            const createDialogFn = jest.fn().mockReturnValue({ finished: finishedDeferred.promise });
            jest.spyOn(Modal, "createDialog").mockImplementation(createDialogFn);

            render(getComponent());

            await userEvent.click(screen.getByRole("button", { name: "Deactivate Account" }));

            expect(createDialogFn).toHaveBeenCalled();
        });
        it("should close settings if account deactivated", async () => {
            jest.spyOn(SettingsStore, "getValue").mockImplementation(
                (settingName) => settingName === UIFeature.Deactivate,
            );

            const finishedDeferred = Promise.withResolvers<[boolean]>();
            const createDialogFn = jest.fn().mockReturnValue({ finished: finishedDeferred.promise });
            jest.spyOn(Modal, "createDialog").mockImplementation(createDialogFn);

            render(getComponent());

            await userEvent.click(screen.getByRole("button", { name: "Deactivate Account" }));

            finishedDeferred.resolve([true]);
            await flushPromises();

            expect(defaultProps.closeSettingsFn).toHaveBeenCalled();
        });
        it("should not close settings if account not deactivated", async () => {
            jest.spyOn(SettingsStore, "getValue").mockImplementation(
                (settingName) => settingName === UIFeature.Deactivate,
            );

            const finishedDeferred = Promise.withResolvers<[boolean]>();
            const createDialogFn = jest.fn().mockReturnValue({ finished: finishedDeferred.promise });
            jest.spyOn(Modal, "createDialog").mockImplementation(createDialogFn);

            render(getComponent());

            await userEvent.click(screen.getByRole("button", { name: "Deactivate Account" }));

            finishedDeferred.resolve([false]);
            await flushPromises();

            expect(defaultProps.closeSettingsFn).not.toHaveBeenCalled();
        });
    });


    describe("Password change", () => {
        beforeEach(() => {
            mockClient.getCapabilities.mockResolvedValue({
                "m.change_password": {
                    enabled: true,
                },
            });
        });

        it("should display a dialog if password change succeeded", async () => {
            const createDialogFn = jest.fn();
            jest.spyOn(Modal, "createDialog").mockImplementation(createDialogFn);

            render(getComponent());

            const changeButton = await screen.findByRole("button", { name: "Mock change password" });
            userEvent.click(changeButton);

            expect(changePasswordOnFinished).toBeDefined();
            changePasswordOnFinished();

            expect(createDialogFn).toHaveBeenCalledWith(expect.anything(), {
                title: "Success",
                description: "Your password was successfully changed.",
            });
        });

        it("should display an error if password change failed", async () => {
            const ERROR_STRING =
                "Your password must contain exactly 5 lowercase letters, a box drawing character and the badger emoji.";

            const createDialogFn = jest.fn();
            jest.spyOn(Modal, "createDialog").mockImplementation(createDialogFn);

            render(getComponent());

            const changeButton = await screen.findByRole("button", { name: "Mock change password" });
            userEvent.click(changeButton);

            expect(changePasswordOnError).toBeDefined();
            changePasswordOnError(new Error(ERROR_STRING));

            expect(createDialogFn).toHaveBeenCalledWith(expect.anything(), {
                title: "Error changing password",
                description: ERROR_STRING,
            });
        });
    });

    describe("Tchap custo", () => {
        it("should render red list section feature is enabled", () => {
            jest.spyOn(TchapUIFeature, "isFeatureActiveForHomeserver").mockImplementation(
                (featureName: string) => featureName === "feature_red_list",
            );
            const { container } = render(getComponent());

            expect(container).toMatchSnapshot();
        });

        it("should display not 3pid email addresses and phone numbers", async () => {
            render(getComponent());

            await flushPromises();

            expect(screen.queryByTestId("mx_AccountEmailAddresses")).toBeNull();
            expect(screen.queryByTestId("mx_AccountPhoneNumbers")).toBeNull();
        });
    })
});
