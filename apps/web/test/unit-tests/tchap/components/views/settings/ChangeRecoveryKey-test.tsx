// @vitest-environment happy-dom

import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "test-utils-rtl";
import { type MatrixClient } from "matrix-js-sdk/src/matrix";
import userEvent from "@testing-library/user-event";
import { createTestClient, withClientContextRenderOptions } from "test-utils";
import { ChangeRecoveryKey } from "~tchap-web/src/components/views/settings/encryption/ChangeRecoveryKey";
import { copyPlaintext } from "~tchap-web/src/utils/strings";
import Modal from "~tchap-web/src/Modal";
import Spinner from "~tchap-web/src/components/views/elements/Spinner";
import TchapRecoveryCodeSuccessDialog from "~tchap-web/src/tchap/components/views/dialogs/TchapRecoveryCodeSuccessDialog";
import ErrorDialog from "~tchap-web/src/components/views/dialogs/ErrorDialog";

vi.mock("~tchap-web/src/utils/strings", () => ({
    copyPlaintext: vi.fn(),
}));

afterEach(() => {
    vi.restoreAllMocks();
});

describe("<ChangeRecoveryKey />", () => {
    let matrixClient: MatrixClient;

    beforeEach(() => {
        matrixClient = createTestClient();
        vi.spyOn(Modal, "createDialog").mockReturnValue({
            finished: Promise.resolve([true]),
            close: vi.fn(),
        });
    });

    function renderComponent(userHasRecoveryKey = true, onFinish = vi.fn(), onCancelClick = vi.fn()) {
        return render(
            <ChangeRecoveryKey
                userHasRecoveryKey={userHasRecoveryKey}
                onFinish={onFinish}
                onCancelClick={onCancelClick}
            />,
            withClientContextRenderOptions(matrixClient),
        );
    }

    describe("flow to set up a recovery key", () => {
        it("should display information about the recovery key", async () => {
            const user = userEvent.setup();

            const onCancelClick = vi.fn();
            const { asFragment } = renderComponent(false, vi.fn(), onCancelClick);
            await waitFor(() =>
                expect(
                    screen.getByText(
                        "Your key storage is protected by a recovery key. If you need a new recovery key after setup, you can recreate it by selecting ‘Change recovery key’.",
                    ),
                ).toBeInTheDocument(),
            );
            expect(asFragment()).toMatchSnapshot();

            await user.click(screen.getByRole("button", { name: "Cancel" }));
            expect(onCancelClick).toHaveBeenCalled();
        });

        it("should display the recovery key", async () => {
            const user = userEvent.setup();

            const onCancelClick = vi.fn();
            const { asFragment } = renderComponent(false, vi.fn(), onCancelClick);
            await waitFor(() => user.click(screen.getByRole("button", { name: "Continue" })));

            expect(screen.getByText("Save your recovery key somewhere safe")).toBeInTheDocument();
            expect(screen.getByText("encoded private key")).toBeInTheDocument();
            expect(asFragment()).toMatchSnapshot();

            // Test copy button
            await user.click(screen.getByRole("button", { name: "Copy" }));
            expect(copyPlaintext).toHaveBeenCalled();

            await user.click(screen.getByRole("button", { name: "Cancel" }));
            expect(onCancelClick).toHaveBeenCalled();
        });

        it("should ask the user to enter the recovery key", async () => {
            const user = userEvent.setup();

            const onFinish = vi.fn();
            const { asFragment } = renderComponent(false, onFinish);
            // Display the recovery key to save
            await waitFor(() => user.click(screen.getByRole("button", { name: "Continue" })));
            // Display the form to confirm the recovery key
            // :TCHAP: it is named action instead of Copy and continue because it is not loading the tchap translation overload
            await waitFor(() => user.click(screen.getByRole("button", { name: "action" })));

            // :TCHAP: should have copied the recovery code and continue
            expect(copyPlaintext).toHaveBeenCalled();

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
            expect(Modal.createDialog).toHaveBeenCalledWith(Spinner, undefined, "mx_Dialog_spinner");
            expect(setAccountDataSpy).toHaveBeenCalledWith("io.element.recovery", { enabled: true });
            expect(Modal.createDialog).toHaveBeenCalledWith(TchapRecoveryCodeSuccessDialog);
            expect(onFinish).toHaveBeenCalledWith();
        });

        it("should display errors from bootstrapSecretStorage", async () => {
            const consoleErrorSpy = vi.spyOn(console, "error").mockReturnValue(undefined);
            vi.mocked(matrixClient.getCrypto()!).bootstrapSecretStorage.mockRejectedValue(new Error("can't bootstrap"));

            const user = userEvent.setup();
            const { getByRole, getByText, getByTitle } = renderComponent(false);

            // Display the recovery key to save
            await waitFor(() => user.click(getByRole("button", { name: "Continue" })));

            // Display the form to confirm the recovery key
            // :TCHAP:  it is named action instead of Copy and continue because it is not loading the tchap translation overload
            await waitFor(() => user.click(getByRole("button", { name: "action" })));

            await waitFor(() => expect(getByText("Enter your recovery key to confirm")).toBeInTheDocument());

            const input = getByTitle("Enter recovery key");

            input.focus();

            await waitFor(() => user.paste("encoded private key"));

            const finishButton = getByRole("button", { name: "Finish set up" });
            await waitFor(() => {
                expect(finishButton).not.toBeDisabled();
            });

            await waitFor(() => user.click(finishButton));

            await waitFor(() =>
                expect(Modal.createDialog).toHaveBeenCalledWith(Spinner, undefined, "mx_Dialog_spinner"),
            );
            // : TCHAP: compare to element, we already mocked the modal
            expect(Modal.createDialog).toHaveBeenCalledWith(ErrorDialog, {
                title: "Failed to set up secret storage",
                description: "Error: can't bootstrap",
            });
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                "Failed to set up secret storage:",
                new Error("can't bootstrap"),
            );
        });
    });

    describe("flow to change the recovery key", () => {
        it("should display the recovery key", async () => {
            const { asFragment } = renderComponent();

            await waitFor(() => expect(screen.getByText("Change recovery key?")).toBeInTheDocument());
            expect(screen.getByText("encoded private key")).toBeInTheDocument();
            expect(asFragment()).toMatchSnapshot();
        });
    });
});
