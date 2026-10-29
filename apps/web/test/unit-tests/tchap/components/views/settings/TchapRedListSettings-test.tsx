// @vitest-environment happy-dom

import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "test-utils-rtl";
import React from "react";

import userEvent from "@testing-library/user-event";

import { flushPromises, stubClient } from "test-utils";
import TchapRedListSettings from "~tchap-web/src/tchap/components/views/settings/tabs/user/TchapRedListSettings";
import TchapUtils from "~tchap-web/src/tchap/util/TchapUtils";

vi.mock("~tchap-web/src/tchap/util/TchapUtils");

describe("TchapRedListSettings", () => {
    const renderComponent = () => render(<TchapRedListSettings />);

    beforeEach(() => {
        vi.mocked(stubClient());
    });

    it("should red list should be activated when initial value is true", async () => {
        vi.mocked(TchapUtils.getUserRedListInfo).mockResolvedValue(true);
        vi.mocked(TchapUtils.setUserRedListInfo).mockResolvedValue();

        renderComponent();

        await flushPromises();

        const switchElm = screen.getByRole("switch");

        expect(switchElm).toHaveAttribute("aria-checked", "true");
    });

    it("should red list should be desactivated when initial value is false", async () => {
        vi.mocked(TchapUtils.getUserRedListInfo).mockResolvedValue(false);
        vi.mocked(TchapUtils.setUserRedListInfo).mockResolvedValue();

        renderComponent();

        await flushPromises();

        const switchElm = screen.getByRole("switch");

        expect(switchElm).toHaveAttribute("aria-checked", "false");
    });

    it("should remove user from red list", async () => {
        // initial value
        vi.mocked(TchapUtils.getUserRedListInfo).mockResolvedValue(true);
        vi.mocked(TchapUtils.setUserRedListInfo).mockResolvedValue();

        renderComponent();

        await flushPromises();

        const switchElm = screen.getByRole("switch");

        userEvent.click(switchElm);

        waitFor(() => {
            expect(switchElm).toHaveAttribute("aria-checked", "false");
        });
    });

    it("should put user on red list", async () => {
        // initial value
        vi.mocked(TchapUtils.getUserRedListInfo).mockResolvedValue(false);
        vi.mocked(TchapUtils.setUserRedListInfo).mockResolvedValue();

        renderComponent();

        await flushPromises();

        const switchElm = screen.getByRole("switch");

        userEvent.click(switchElm);

        waitFor(() => {
            expect(switchElm).toHaveAttribute("aria-checked", "true");
        });
    });

    it("should get back to initial value if throws an error", async () => {
        // initial value
        vi.mocked(TchapUtils.getUserRedListInfo).mockResolvedValue(false);
        vi.mocked(TchapUtils.setUserRedListInfo).mockRejectedValue(new Error("error test"));

        renderComponent();

        await flushPromises();

        const switchElm = screen.getByRole("switch");

        userEvent.click(switchElm);

        waitFor(() => {
            expect(switchElm).toHaveAttribute("aria-checked", "false");
        });
    });
});
