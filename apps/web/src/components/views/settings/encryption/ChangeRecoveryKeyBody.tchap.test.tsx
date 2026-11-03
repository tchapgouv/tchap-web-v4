// @vitest-environment happy-dom

import React from "react";
import { describe, it, expect, vi, afterEach, beforeEach } from "vitest";
import { render, screen, waitFor } from "test-utils-rtl";
import { type MatrixClient } from "matrix-js-sdk/src/matrix";
import userEvent from "@testing-library/user-event";
import { createTestClient, withClientContextRenderOptions } from "test-utils";
import { copyPlainTextToClipboard } from "@element-hq/element-web-shared-utils";

import { ChangeRecoveryKeyBody } from "./ChangeRecoveryKeyBody";
import Modal from "../../../../Modal";
import ErrorDialog from "../../dialogs/ErrorDialog";
import { DeviceListener } from "../../../../device-listener";
// :TCHAP: recovery-code-flow-improve
import Spinner from "../../elements/Spinner";
import TchapRecoveryCodeSuccessDialog from "~tchap-web/src/tchap/components/views/dialogs/TchapRecoveryCodeSuccessDialog";
// end :TCHAP:

vi.mock("@element-hq/element-web-shared-utils", async () => ({
    ...(await vi.importActual("@element-hq/element-web-shared-utils")),
    copyPlainTextToClipboard: vi.fn(),
}));

afterEach(() => {
    vi.restoreAllMocks();
});

describe("<ChangeRecoveryKeyBody /> (Tchap)", () => {
    let matrixClient: MatrixClient;

    beforeEach(() => {
        matrixClient = createTestClient();
        // :TCHAP: recovery-code-flow-improve - Tchap opens a spinner then a success dialog, which must close for onFinish to run
        vi.spyOn(Modal, "createDialog").mockReturnValue({
            finished: Promise.resolve([true]),
            close: vi.fn(),
        } as any);
        // end :TCHAP:
    });

    function renderComponent(userHasRecoveryKey = true, onFinish = vi.fn(), onCancelClick = vi.fn()) {
        return render(
            <ChangeRecoveryKeyBody
                userHasRecoveryKey={userHasRecoveryKey}
                onFinish={onFinish}
                onCancelClick={onCancelClick}
            />,
            withClientContextRenderOptions(matrixClient),
        );
    }

    describe("flow to set up a recovery key", () => {
        it("should display the recovery key", async () => {
            const user = userEvent.setup();

            const onCancelClick = vi.fn();
            const { asFragment } = renderComponent(false, vi.fn(), onCancelClick);

            await waitFor(() => expect(screen.getByText("Save your recovery key somewhere safe")).toBeInTheDocument());
            expect(screen.getByText("encoded private key")).toBeInTheDocument();
            expect(asFragment()).toMatchSnapshot();

            // Test copy button
            await user.click(screen.getByRole("button", { name: "Copy" }));
            expect(copyPlainTextToClipboard).toHaveBeenCalled();

            await user.click(screen.getByRole("button", { name: "Cancel" }));
            expect(onCancelClick).toHaveBeenCalled();
        });

        it("should ask the user to enter the recovery key", async () => {
            vi.spyOn(DeviceListener.sharedInstance(), "keyStorageOutOfSyncNeedsBackupReset").mockResolvedValue(false);

            const user = userEvent.setup();

            const onFinish = vi.fn();
            const { asFragment } = renderComponent(false, onFinish);

            // Display the form to confirm the recovery key
            await waitFor(() => user.click(screen.getByRole("button", { name: "action" })));

            await waitFor(() => expect(screen.getByText("Enter your recovery key to confirm")).toBeInTheDocument());
            expect(asFragment()).toMatchSnapshot();

            // The finish button should be disabled by default
            const finishButton = screen.getByRole("button", { name: "Finish set up" });
            expect(finishButton).toHaveAttribute("aria-disabled", "true");

            const input = screen.getByTitle("Enter recovery key");
            // If the user enters an incorrect recovery key, the finish button should be disabled
            // and we display an error message
            await userEvent.type(input, "wrong recovery key");
            expect(finishButton).toHaveAttribute("aria-disabled", "true");
            expect(screen.getByText("The recovery key you entered is not correct.")).toBeInTheDocument();
            expect(asFragment()).toMatchSnapshot();

            const setAccountDataSpy = vi.spyOn(matrixClient, "setAccountData");
            await userEvent.clear(input);
            // If the user enters the correct recovery key, the finish button should be enabled
            await userEvent.type(input, "encoded private key");
            await waitFor(() => expect(finishButton).not.toHaveAttribute("aria-disabled", "true"));

            await user.click(finishButton);
            expect(setAccountDataSpy).toHaveBeenCalledWith("io.element.recovery", { enabled: true });
            // :TCHAP: recovery-code-flow-improve - key copied on continue, spinner then success dialog before finishing
            expect(copyPlainTextToClipboard).toHaveBeenCalledWith("encoded private key");
            expect(Modal.createDialog).toHaveBeenCalledWith(Spinner, undefined, "mx_Dialog_spinner");
            expect(Modal.createDialog).toHaveBeenCalledWith(TchapRecoveryCodeSuccessDialog);
            // end :TCHAP:
            expect(onFinish).toHaveBeenCalledWith();
        });

        it("should reset key backup if needed", async () => {
            vi.spyOn(DeviceListener.sharedInstance(), "keyStorageOutOfSyncNeedsBackupReset").mockResolvedValue(true);

            const user = userEvent.setup();

            const onFinish = vi.fn();
            renderComponent(false, onFinish);

            // Display the form to confirm the recovery key
            await waitFor(() => user.click(screen.getByRole("button", { name: "action" })));

            await waitFor(() => expect(screen.getByText("Enter your recovery key to confirm")).toBeInTheDocument());

            const finishButton = screen.getByRole("button", { name: "Finish set up" });

            const input = screen.getByTitle("Enter recovery key");

            // If the user enters the correct recovery key, the finish button should be enabled
            await userEvent.type(input, "encoded private key");

            await user.click(finishButton);
            expect(matrixClient.getCrypto()!.resetKeyBackup).toHaveBeenCalled();
        });

        it("should not reset key backup if not needed", async () => {
            vi.spyOn(DeviceListener.sharedInstance(), "keyStorageOutOfSyncNeedsBackupReset").mockResolvedValue(false);

            const user = userEvent.setup();

            const onFinish = vi.fn();
            renderComponent(false, onFinish);

            // Display the form to confirm the recovery key
            await waitFor(() => user.click(screen.getByRole("button", { name: "action" })));

            await waitFor(() => expect(screen.getByText("Enter your recovery key to confirm")).toBeInTheDocument());

            const finishButton = screen.getByRole("button", { name: "Finish set up" });

            const input = screen.getByTitle("Enter recovery key");

            // If the user enters the correct recovery key, the finish button should be enabled
            await userEvent.type(input, "encoded private key");

            await user.click(finishButton);
            expect(matrixClient.getCrypto()!.resetKeyBackup).not.toHaveBeenCalled();
        });

        it("should display errors from bootstrapSecretStorage", async () => {
            const consoleErrorSpy = vi.spyOn(console, "error").mockReturnValue(undefined);
            vi.mocked(matrixClient.getCrypto()!).bootstrapSecretStorage.mockRejectedValue(new Error("can't bootstrap"));

            const user = userEvent.setup();
            const { getByRole, getByText, getByTitle } = renderComponent(false);

            // Display the form to confirm the recovery key
            await waitFor(() => user.click(getByRole("button", { name: "action" })));

            await waitFor(() => expect(getByText("Enter your recovery key to confirm")).toBeInTheDocument());

            const finishButton = getByRole("button", { name: "Finish set up" });
            const input = getByTitle("Enter recovery key");
            await userEvent.type(input, "encoded private key");

            await waitFor(() => {
                expect(finishButton).not.toBeDisabled();
            });

            await user.click(finishButton);

            // :TCHAP: recovery-code-flow-improve - Modal is mocked for the whole suite, so there is no OK button to click
            await waitFor(() =>
                expect(Modal.createDialog).toHaveBeenCalledWith(ErrorDialog, {
                    title: "Failed to set up secret storage",
                    description: "Error: can't bootstrap",
                }),
            );
            // end :TCHAP:

            expect(consoleErrorSpy).toHaveBeenCalledWith(
                "Failed to set up secret storage:",
                new Error("can't bootstrap"),
            );
        });

        it("should disallow repeated attempts to change the recovery key", async () => {
            vi.spyOn(DeviceListener.sharedInstance(), "keyStorageOutOfSyncNeedsBackupReset").mockResolvedValue(false);

            const mockFn = vi.mocked(matrixClient.getCrypto()!).bootstrapSecretStorage.mockImplementation(() => {
                // Pretend to do some work.
                return new Promise((r) => setTimeout(r, 200));
            });

            const user = userEvent.setup();
            const { getByRole, getByText, getByTitle } = renderComponent(false);

            // Display the form to confirm the recovery key
            await waitFor(() => user.click(getByRole("button", { name: "action" })));

            await waitFor(() => expect(getByText("Enter your recovery key to confirm")).toBeInTheDocument());

            const finishButton = getByRole("button", { name: "Finish set up" });
            const input = getByTitle("Enter recovery key");
            await userEvent.type(input, "encoded private key");

            await waitFor(() => {
                expect(finishButton).not.toBeDisabled();
            });

            await user.click(finishButton);
            await user.click(finishButton);
            await user.click(finishButton);

            await waitFor(() => expect(mockFn).toHaveBeenCalledTimes(1));
        });
    });

    describe("flow to change the recovery key", () => {
        it("should display the recovery key", async () => {
            const { asFragment } = renderComponent();

            await waitFor(() => expect(screen.getByText("Change recovery key?")).toBeInTheDocument());
            expect(screen.getByText("encoded private key")).toBeInTheDocument();
            expect(asFragment()).toMatchSnapshot();
        });

        it("should ask the user to enter the recovery key", async () => {
            vi.spyOn(DeviceListener.sharedInstance(), "keyStorageOutOfSyncNeedsBackupReset").mockResolvedValue(false);

            const user = userEvent.setup();

            const onFinish = vi.fn();
            const { asFragment } = renderComponent(true, onFinish);

            // Display the form to confirm the recovery key
            await waitFor(() => user.click(screen.getByRole("button", { name: "action" })));

            await waitFor(() =>
                expect(
                    screen.getByText("Enter your new recovery key below to finish. Your old one will no longer work."),
                ).toBeInTheDocument(),
            );
            expect(asFragment()).toMatchSnapshot();

            // The finish button should be disabled by default
            const finishButton = screen.getByRole("button", { name: "Confirm new recovery key" });
            expect(finishButton).toHaveAttribute("aria-disabled", "true");

            const input = screen.getByTitle("Enter recovery key");
            // If the user enters an incorrect recovery key, the finish button should be disabled
            // and we display an error message
            await userEvent.type(input, "wrong recovery key");
            expect(finishButton).toHaveAttribute("aria-disabled", "true");
            expect(screen.getByText("The recovery key you entered is not correct.")).toBeInTheDocument();
            expect(asFragment()).toMatchSnapshot();

            const setAccountDataSpy = vi.spyOn(matrixClient, "setAccountData");
            await userEvent.clear(input);
            // If the user enters the correct recovery key, the finish button should be enabled
            await userEvent.type(input, "encoded private key");
            await waitFor(() => expect(finishButton).not.toHaveAttribute("aria-disabled", "true"));

            await user.click(finishButton);
            expect(setAccountDataSpy).toHaveBeenCalledWith("io.element.recovery", { enabled: true });
            expect(onFinish).toHaveBeenCalledWith();
        });
    });
});
