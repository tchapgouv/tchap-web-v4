import * as React from "react";
import { render, screen } from "@testing-library/react";

import ExpiredAccountDialog from "~tchap-web/src/tchap/components/views/dialogs/ExpiredAccountDialog";
import { flushPromises } from "~tchap-web/yarn-linked-dependencies/matrix-react-sdk/test/test-utils";
import TchapUtils from "~tchap-web/src/tchap/util/TchapUtils";

describe("ExpiredAccountDialog", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    describe("'Send email' button", () => {
        it("sends email when button is clicked", async () => {
            // true = email sent successfully
            const onRequestNewEmailMock = jest.fn().mockResolvedValue(true);

            const component = render(
                <ExpiredAccountDialog onFinished={jest.fn()} onRequestNewEmail={onRequestNewEmailMock} />,
            );
            const sendEmailButton = screen.getByTestId("dialog-send-email-button");
            sendEmailButton.click();

            expect(onRequestNewEmailMock).toHaveBeenCalled();
            // wait spinner is displayed
            expect(component.container.querySelector(".mx_InlineSpinner")).toBeTruthy();

            await flushPromises();
            // confirmation message is displayed
            screen.getByTestId("dialog-email-sent-message");
        });

        it("tells user if sending email failed", async () => {
            // false = email sending failed
            const onRequestNewEmailMock = jest.fn().mockResolvedValue(false);

            const component = render(
                <ExpiredAccountDialog onFinished={jest.fn()} onRequestNewEmail={onRequestNewEmailMock} />,
            );
            const sendEmailButton = screen.getByTestId("dialog-send-email-button");
            sendEmailButton.click();

            expect(onRequestNewEmailMock).toHaveBeenCalled();
            // wait spinner is displayed
            expect(component.container.querySelector(".mx_InlineSpinner")).toBeTruthy();

            await flushPromises();
            // confirmation message is displayed
            screen.getByTestId("dialog-email-failure-message");
        });

        it("sends only one email when button is clicked twice", async () => {
            // true = email sent successfully
            const onRequestNewEmailMock = jest.fn().mockResolvedValue(true);

            render(<ExpiredAccountDialog onFinished={jest.fn()} onRequestNewEmail={onRequestNewEmailMock} />);
            const sendEmailButton = screen.getByTestId("dialog-send-email-button");

            sendEmailButton.click();
            await flushPromises();
            sendEmailButton.click();
            await flushPromises();
            expect(onRequestNewEmailMock).toHaveBeenCalledTimes(1); // only 1 email sent
            screen.getByTestId("dialog-email-wait-message"); // user notified that they must wait
        });
    });

    describe("'I renewed my account' button", () => {
        it("if the account is renewed, it displays success message and ... ? (todo)", async () => {
            const onFinishedMock = jest.fn();
            jest.spyOn(TchapUtils, "isAccountExpired").mockResolvedValue(false);

            const component = render(
                <ExpiredAccountDialog onFinished={onFinishedMock} onRequestNewEmail={jest.fn()} />,
            );
            const iRenewedButton = component.getByTestId("dialog-primary-button");

            iRenewedButton.click();
            await flushPromises();

            // display happy message todo
            // "votre compte a été renouvelé"
            // primary label is "Rafraîchir la page"
            // click primary : onFinished
        });

        it("if the account is still not renewed, it displays explanation and keeps dialog up", async () => {
            const onFinishedMock = jest.fn();
            jest.spyOn(TchapUtils, "isAccountExpired").mockResolvedValue(true);

            const component = render(
                <ExpiredAccountDialog onFinished={onFinishedMock} onRequestNewEmail={jest.fn()} />,
            );
            const iRenewedButton = component.getByTestId("dialog-primary-button");

            iRenewedButton.click();
            await flushPromises();

            // display unhappy message
            screen.getByTestId("dialog-account-still-expired-message");
            expect(onFinishedMock).not.toHaveBeenCalled();
        });
    });
});
