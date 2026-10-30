// @vitest-environment happy-dom

import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "test-utils-rtl";

import { type MatrixEvent } from "matrix-js-sdk/src/matrix";
import { CallErrorCode, CallState } from "matrix-js-sdk/src/webrtc/call";

import type LegacyCallEventGrouper from "~tchap-web/src/components/structures/LegacyCallEventGrouper";

import LegacyCallEvent from "~tchap-web/src/components/views/messages/LegacyCallEvent";
import BugReportDialog from "~tchap-web/src/components/views/dialogs/BugReportDialog";
import Modal from "~tchap-web/src/Modal";

const THEIR_USER_ID = "@them:here";

// Inspired heavily from element's test.
describe("<LegacyCallEvent>", () => {
    let callInviteEvent: Record<string, any>;
    let callEventGrouper: Record<string, any>;

    beforeEach(() => {
        callInviteEvent = {
            sender: {
                userId: THEIR_USER_ID,
            },
        };

        callEventGrouper = {
            addListener: vi.fn(),
            removeListener: vi.fn(),
            invite: vi.fn().mockReturnValue(callInviteEvent),
            isVoice: true,
        };

        Modal.createDialog = vi.fn();
        // @ts-ignore mock (type error because empty return)
        vi.mocked(Modal.createDialog).mockReturnValue({});
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    const renderEvent = () => {
        return render(
            <LegacyCallEvent
                mxEvent={callInviteEvent as unknown as MatrixEvent}
                callEventGrouper={callEventGrouper as unknown as LegacyCallEventGrouper}
            />,
        );
    };

    it("shows 'Report a problem' button if the call ended cleanly", () => {
        callEventGrouper.state = CallState.Ended;
        callEventGrouper.hangupReason = CallErrorCode.UserHangup;

        const component = renderEvent();

        const button = component.getByRole("button");
        expect(button).toMatchSnapshot(); // note : this does not check presence of icon, because no css.
    });

    it("clicking 'Report a problem' button opens BugReportDialog", () => {
        callEventGrouper.state = CallState.Ended;
        callEventGrouper.hangupReason = CallErrorCode.UserHangup;

        renderEvent();

        screen.getByText("Report a problem").click();
        expect(Modal.createDialog).toHaveBeenCalledWith(BugReportDialog, {
            initialText: "tchap_voip_bug_report_prefill",
            label: "voip-feedback", // important for the rageshake.
        });
    });

    it("does not show 'Report a problem' button in other cases", () => {
        // We're not testing all cases. This is unspecified state+hangupReason.

        renderEvent();

        expect(() => screen.getByText("Report a problem")).toThrow();
        expect(Modal.createDialog).not.toHaveBeenCalled();
    });
});
