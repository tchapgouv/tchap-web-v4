// @vitest-environment happy-dom

import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "test-utils-rtl";
import React from "react";
import userEvent from "@testing-library/user-event";

import TchapMailSignature from "~tchap-web/src/tchap/components/views/settings/tabs/user/TchapMailSignature";

describe("TchapMailSignature", () => {
    const profileUri = "https://tchap.gouv.fr";
    const renderComponent = () => render(<TchapMailSignature userPermalink={profileUri} />);

    beforeEach(() => {
        // Mock clipboard API
        const ClipboardItemMock = vi.fn(function (data: Record<string, Blob>) {
            return data;
        }) as unknown as typeof ClipboardItem;
        ClipboardItemMock.supports = vi.fn().mockReturnValue(true);
        global.ClipboardItem = ClipboardItemMock;

        Object.defineProperty(navigator, "clipboard", {
            value: {
                write: vi.fn(),
            },
            writable: true,
            configurable: true,
        });
    });

    it("should copy html signature when clicking on the copy button", async () => {
        renderComponent();

        const copyButton = screen.getByRole("button", { name: "Copy" });

        await userEvent.click(copyButton);

        const signatureElement = document.querySelector(".mx_TchapMailSignature");
        const clipboardItem = new ClipboardItem({
            "text/html": new Blob([signatureElement?.innerHTML.trim() || ""], { type: "text/html" }),
            "text/plain": new Blob([signatureElement?.textContent || ""], { type: "text/plain" }),
        });

        // check that the signature is copied to the clipboard
        expect(navigator.clipboard.write).toHaveBeenCalledWith([clipboardItem]);
    });

    it("should go to user profile when clicking on contactez-moi sur tchap", async () => {
        renderComponent();

        const contactLink = screen.getByRole("link", { name: "Contactez-moi sur Tchap" });

        expect(contactLink).toHaveAttribute("href", profileUri);
    });

    it("should render correctly snapshot", () => {
        renderComponent();

        expect(screen.getByText("Contactez-moi sur Tchap")).toMatchSnapshot();
    });
});
