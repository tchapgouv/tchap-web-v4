import * as React from "react";
import { render, screen } from "@testing-library/react";

import ExpiredAccountDialog from "~tchap-web/src/tchap/components/views/dialogs/ExpiredAccountDialog";
import { flushPromises } from "~tchap-web/yarn-linked-dependencies/matrix-react-sdk/test/test-utils";

describe("ExpiredAccountDialog", () => {
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

    it("when 'I renewed' is clicked, and the account is renewed, it displays 'cool' and unblocks user (todo)", () => {});
    it("when 'I renewed' is clicked, and the account is not renewed, it displays 'not cool' and keeps dialog up (todo)", () => {});
});
