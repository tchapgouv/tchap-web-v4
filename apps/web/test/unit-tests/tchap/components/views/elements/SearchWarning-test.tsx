// @vitest-environment happy-dom

import { beforeEach, describe, expect, it } from "vitest";
import { render } from "test-utils-rtl";
import React from "react";

import SdkConfig from "~tchap-web/src/SdkConfig";
import SearchWarning, { WarningKind } from "~tchap-web/src/components/views/elements/SearchWarning";

describe("<SearchWarning />", () => {
    describe("with desktop builds available", () => {
        beforeEach(() => {
            SdkConfig.put({
                brand: "Element",
                desktop_builds: {
                    available: true,
                    logo: "https://logo",
                    url: "https://url",
                },
            });
        });

        it("renders with a logo by default", () => {
            const { asFragment, getByRole } = render(
                <SearchWarning isRoomEncrypted={true} kind={WarningKind.Search} />,
            );
            expect(getByRole("presentation")).toHaveAttribute("src", "https://logo");
            expect(asFragment()).toMatchSnapshot();
        });

        it("renders without a logo when showLogo=false", () => {
            const { asFragment, queryByRole } = render(
                <SearchWarning isRoomEncrypted={true} kind={WarningKind.Search} showLogo={false} />,
            );

            expect(queryByRole("img")).not.toBeInTheDocument();
            expect(asFragment()).toMatchSnapshot();
        });
    });
});
