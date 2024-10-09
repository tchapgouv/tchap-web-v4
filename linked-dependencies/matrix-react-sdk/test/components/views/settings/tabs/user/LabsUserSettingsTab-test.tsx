/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LabsUserSettingsTab from "../../../../../../src/components/views/settings/tabs/user/LabsUserSettingsTab";
import SettingsStore from "../../../../../../src/settings/SettingsStore";
import SdkConfig from "../../../../../../src/SdkConfig";
import { SettingLevel } from "../../../../../../src/settings/SettingLevel";

describe("<LabsUserSettingsTab />", () => {
    const defaultProps = {
        closeSettingsFn: jest.fn(),
    };
    const getComponent = () => <LabsUserSettingsTab {...defaultProps} />;

    const settingsValueSpy = jest.spyOn(SettingsStore, "getValue");

    beforeEach(() => {
        jest.clearAllMocks();
        settingsValueSpy.mockReturnValue(false);
        SdkConfig.reset();
        SdkConfig.add({ brand: "BrandedClient" });
        localStorage.clear();
    });

    it("renders settings marked as beta as beta cards", () => {
        render(getComponent());
        expect(screen.getByText("Upcoming features").parentElement!).toMatchSnapshot();
    });

    it("does not render non-beta labs settings when disabled in config", () => {
        const sdkConfigSpy = jest.spyOn(SdkConfig, "get");
        render(getComponent());
        expect(sdkConfigSpy).toHaveBeenCalledWith("show_labs_settings");

        // only section is beta section
        expect(screen.queryByText("Early previews")).not.toBeInTheDocument();
    });

    it("renders non-beta labs settings when enabled in config", () => {
        // enable labs
        SdkConfig.add({ show_labs_settings: true });
        const { container } = render(getComponent());

        // non-beta labs section
        expect(screen.getByText("Early previews")).toBeInTheDocument();
        const labsSections = container.getElementsByClassName("mx_SettingsSubsection");
        expect(labsSections).toHaveLength(10);
    });

    describe("Rust crypto setting", () => {
        const SETTING_NAME = "Rust cryptography implementation";

        beforeEach(() => {
            SdkConfig.add({ show_labs_settings: true });
        });

        describe("Not enabled in config", () => {
            // these tests only works if the feature is not enabled in the config by default?
            const copyOfGetValueAt = SettingsStore.getValueAt;

            beforeEach(() => {
                SettingsStore.getValueAt = (
                    level: SettingLevel,
                    name: string,
                    roomId?: string,
                    isExplicit?: boolean,
                ) => {
                    if (level == SettingLevel.CONFIG && name === "feature_rust_crypto") return false;
                    return copyOfGetValueAt(level, name, roomId, isExplicit);
                };
            });

            afterEach(() => {
                SettingsStore.getValueAt = copyOfGetValueAt;
            });

            it("can be turned on if not already", async () => {
                // By the time the settings panel is shown, `MatrixClientPeg.initClientCrypto` has saved the current
                // value to the settings store.
                await SettingsStore.setValue("feature_rust_crypto", null, SettingLevel.DEVICE, false);

                const rendered = render(getComponent());
                const toggle = rendered.getByRole("switch", { name: SETTING_NAME });
                expect(toggle.getAttribute("aria-disabled")).toEqual("false");
                expect(toggle.getAttribute("aria-checked")).toEqual("false");

                const description = toggle.closest(".mx_SettingsFlag")?.querySelector(".mx_SettingsFlag_microcopy");
                expect(description).toHaveTextContent(/To disable you will need to log out and back in/);
            });

            it("cannot be turned off once enabled", async () => {
                await SettingsStore.setValue("feature_rust_crypto", null, SettingLevel.DEVICE, true);

                const rendered = render(getComponent());
                const toggle = rendered.getByRole("switch", { name: SETTING_NAME });
                expect(toggle.getAttribute("aria-disabled")).toEqual("true");
                expect(toggle.getAttribute("aria-checked")).toEqual("true");

                // Hover over the toggle to make it show the tooltip
                await userEvent.hover(toggle);

                await waitFor(() => {
                    const tooltip = screen.getByRole("tooltip");
                    expect(tooltip).toHaveTextContent(
                        "Once enabled, Rust cryptography can only be disabled by logging out and in again",
                    );
                });
            });
        });

        describe("Enabled in config", () => {
            beforeEach(() => {
                SdkConfig.add({ features: { feature_rust_crypto: true } });
            });

            it("can be turned on if not already", async () => {
                // By the time the settings panel is shown, `MatrixClientPeg.initClientCrypto` has saved the current
                // value to the settings store.
                await SettingsStore.setValue("feature_rust_crypto", null, SettingLevel.DEVICE, false);

                const rendered = render(getComponent());
                const toggle = rendered.getByRole("switch", { name: SETTING_NAME });
                expect(toggle.getAttribute("aria-disabled")).toEqual("false");
                expect(toggle.getAttribute("aria-checked")).toEqual("false");

                const description = toggle.closest(".mx_SettingsFlag")?.querySelector(".mx_SettingsFlag_microcopy");
                expect(description).toHaveTextContent(/It cannot be disabled/);
            });

            it("cannot be turned off once enabled", async () => {
                await SettingsStore.setValue("feature_rust_crypto", null, SettingLevel.DEVICE, true);

                const rendered = render(getComponent());
                const toggle = rendered.getByRole("switch", { name: SETTING_NAME });
                expect(toggle.getAttribute("aria-disabled")).toEqual("true");
                expect(toggle.getAttribute("aria-checked")).toEqual("true");

                // Hover over the toggle to make it show the tooltip
                await userEvent.hover(toggle);

                await waitFor(() => {
                    const tooltip = rendered.getByRole("tooltip");
                    expect(tooltip).toHaveTextContent(
                        "Rust cryptography cannot be disabled on this deployment of BrandedClient",
                    );
                });
            });
        });
    });
});
