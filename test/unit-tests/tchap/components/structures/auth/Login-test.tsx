/*
Copyright 2019-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { render, screen, waitForElementToBeRemoved } from "jest-matrix-react";
import { mocked } from "jest-mock";
import fetchMock from "@fetch-mock/jest";
import { type OidcClientConfig } from "matrix-js-sdk/src/matrix";
import * as Matrix from "matrix-js-sdk/src/matrix";

import SdkConfig, { type ConfigOptions } from "~tchap-web/src/SdkConfig";
import { mkServerConfig } from "~tchap-web/test/test-utils";
import Login from "~tchap-web/src/components/structures/auth/Login";

jest.useRealTimers();

const oidcStaticClientsConfig = {
    "https://staticallyregisteredissuer.org/": {
        client_id: "static-clientId-123",
    },
};

describe("Login", function () {
    const mockClient = mocked({
        login: jest.fn().mockResolvedValue({}),
        loginFlows: jest.fn(),
    } as unknown as Matrix.MatrixClient);

    const addMASToMockConfig = (isActive: boolean = false) => {
        // mock SdkConfig.get("tchap_features")
        const config: ConfigOptions = { tchap_mas_flow: { isActive, temp_is_MAS_migration: isActive } };
        SdkConfig.put(config);
    };
    beforeEach(function () {
        SdkConfig.put({
            brand: "test-brand",
            disable_custom_urls: true,
            oidc_static_clients: oidcStaticClientsConfig,
        });
        mockClient.login.mockClear().mockResolvedValue({
            access_token: "TOKEN",
            device_id: "IAMADEVICE",
            user_id: "@user:server",
        });
        mockClient.loginFlows.mockClear().mockResolvedValue({ flows: [{ type: "m.login.password" }] });
        jest.spyOn(Matrix, "createClient").mockImplementation((opts) => {
            mockClient.idBaseUrl = opts.idBaseUrl;
            mockClient.baseUrl = opts.baseUrl;
            return mockClient;
        });
        fetchMock.mockReset();
        fetchMock.get("https://matrix.org/_matrix/client/versions", {
            unstable_features: {},
            versions: ["v1.1"],
        });
    });

    afterEach(function () {
        fetchMock.mockRestore();
        SdkConfig.reset(); // we touch the config, so clean up
    });

    function getRawComponent(
        hsUrl = "https://matrix.org",
        isUrl = "https://vector.im",
        delegatedAuthentication?: OidcClientConfig,
    ) {
        return (
            <Login
                serverConfig={mkServerConfig(hsUrl, isUrl, delegatedAuthentication)}
                onLoggedIn={() => {}}
                onRegisterClick={() => {}}
                onServerConfigChange={() => {}}
            />
        );
    }

    function getComponent(hsUrl?: string, isUrl?: string, delegatedAuthentication?: OidcClientConfig) {
        return render(getRawComponent(hsUrl, isUrl, delegatedAuthentication));
    }

    it("should show form without server link in tchap", async () => {
        const { container } = getComponent();
        await waitForElementToBeRemoved(() => screen.queryAllByLabelText("Loading…"));

        expect(container.querySelector("form")).toBeTruthy();
        expect(container.querySelectorAll(".mx_ServerPicker_change")).toHaveLength(0);
    });

    it("should show both SSO button and username+password if both are available", async () => {
        mockClient.loginFlows.mockResolvedValue({ flows: [{ type: "m.login.password" }, { type: "m.login.sso" }] });

        const { container } = getComponent();
        await waitForElementToBeRemoved(() => screen.queryAllByLabelText("Loading…"));

        expect(container.querySelector("form")).toBeTruthy();

        expect(container.getElementsByClassName("tc_pronnect").length).toBe(1);
        expect(container.getElementsByClassName("mx_AuthHeader").length).toBe(1);
    });

    it("should show correct UI when MAS is activated", async () => {
        addMASToMockConfig(true);
        mockClient.loginFlows.mockResolvedValue({ flows: [{ type: "m.login.password" }, { type: "m.login.sso" }] });

        const { container } = getComponent();

        screen.debug();
        // should not include auth headers
        expect(container.getElementsByClassName("mx_AuthHeader").length).toBe(0);
    });
});
