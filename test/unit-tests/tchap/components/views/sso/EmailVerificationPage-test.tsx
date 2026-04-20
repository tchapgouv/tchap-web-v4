import React from "react";
import { render, fireEvent, screen, act } from "jest-matrix-react";
import { mocked, type MockedObject } from "jest-mock";
import { SSOAction, type MatrixClient } from "matrix-js-sdk/src/matrix";

import type BasePlatform from "~tchap-web/src/BasePlatform";

import EmailVerificationPage from "~tchap-web/src/tchap/components/views/sso/EmailVerificationPage";
import TchapUtils from "~tchap-web/src/tchap/util/TchapUtils";
import { type ValidatedServerConfig } from "~tchap-web/src/utils/ValidatedServerConfig";
import { flushPromises } from "~tchap-web/test/test-utils";
import Login from "~tchap-web/src/Login";
import * as authorize from "~tchap-web/src/utils/oidc/authorize";
import * as routing from "~tchap-web/src/vector/routing";

jest.mock("~tchap-web/src/tchap/util/TchapUtils");
jest.mock("~tchap-web/src/Login");

describe("Tests sso and oidc native flow", () => {
    const userEmail = "marc@tchap.beta.gouv.fr";
    const defaultHsUrl = "https://matrix.agent1.fr";
    const mockedTchapUtils = mocked(TchapUtils);
    const mockedLogin = Login as jest.Mock;
    let PlatformPegMocked: MockedObject<BasePlatform>;

    const mockedFetchHomeserverFromEmail = (hs: string = defaultHsUrl) => {
        mockedTchapUtils.fetchHomeserverForEmail.mockImplementation(() =>
            Promise.resolve({ base_url: hs, server_name: hs }),
        );
    };

    const mockedValidatedServerConfig = (withError: boolean = false, hsUrl: string = defaultHsUrl) => {
        if (withError) {
            mockedTchapUtils.makeValidatedServerConfig.mockImplementation(() => {
                throw new Error();
            });
        } else {
            mockedTchapUtils.makeValidatedServerConfig.mockImplementation(() =>
                Promise.resolve({
                    hsUrl: defaultHsUrl,
                    hsName: "hs",
                    hsNameIsDifferent: false,
                    isUrl: "",
                    isDefault: true,
                    isNameResolvable: true,
                    warning: "",
                } as ValidatedServerConfig),
            );
        }
    };

    const mockedPlatformPegStartSSO = (withError: boolean) => {
        if (withError) {
            jest.spyOn(PlatformPegMocked, "startSingleSignOn").mockImplementation(() => {
                throw new Error();
            });
        } else {
            jest.spyOn(PlatformPegMocked, "startSingleSignOn").mockImplementation(() => {});
        }
    };

    // Créer un mock pour onServerConfigChange
    const onServerConfigChangeMock = jest.fn();

    const renderEmailVerificationPage = () =>
        render(<EmailVerificationPage onServerConfigChange={onServerConfigChangeMock} />);

    describe("MAS flow activated", () => {
        beforeEach(() => {
            // Dans le beforeEach du bloc "MAS flow activated"
            jest.spyOn(authorize, "startOidcLogin").mockImplementation(jest.fn());

            mockedLogin.mockImplementation(() => ({
                hsUrl: defaultHsUrl,
                delegatedAuthentication: {},
                getFlows: jest.fn().mockResolvedValue([{ type: "oidcNativeFlow", clientId: "clientId" }]),
            }));
        });

        it("should display correct title and button label when mas flow is activated", () => {
            const { container } = renderEmailVerificationPage();

            expect(screen.getByTestId("mas-submit")).toBeInTheDocument();
            expect(container.getElementsByClassName("mx_AuthHeader").length).toBe(0);
        });

        it("should call start oidc native flow with login_hint", async () => {
            jest.spyOn(routing, "getScreenFromLocation").mockReturnValue({
                screen: "email-precheck-sso",
                params: {
                    createAccount: false,
                },
            });

            renderEmailVerificationPage();

            // Mock the implementation without error, what we want is to be sure they are called with the correct parameters
            mockedFetchHomeserverFromEmail(defaultHsUrl);
            mockedValidatedServerConfig(false, defaultHsUrl);
            mockedPlatformPegStartSSO(false);

            // Put text in email field
            const emailField = screen.getByRole("textbox");
            fireEvent.focus(emailField);
            fireEvent.change(emailField, { target: { value: userEmail } });

            await flushPromises();

            // click on proconnect button
            const proconnectButton = screen.getByTestId("mas-submit");
            await act(async () => {
                await fireEvent.click(proconnectButton);
            });

            expect(authorize.startOidcLogin).toHaveBeenCalledWith(
                undefined, // delegatedAuthentication is undefined in this test
                expect.anything(), // clientId
                expect.anything(), // hsUrl
                expect.anything(), // isUrl
                expect.anything(), // isRegistration
                userEmail, // loginHint - c'est ce paramètre que nous voulons vérifier
            );
        });

        it("should call start oidc native flow with createAccount", async () => {
            // We clicked on create account button from welcome page
            jest.spyOn(routing, "getScreenFromLocation").mockReturnValue({
                screen: "email-precheck-sso",
                params: {
                    createAccount: true,
                },
            });

            renderEmailVerificationPage();

            // Mock the implementation without error, what we want is to be sure they are called with the correct parameters
            mockedFetchHomeserverFromEmail(defaultHsUrl);
            mockedValidatedServerConfig(false, defaultHsUrl);
            mockedPlatformPegStartSSO(false);

            // Put text in email field
            const emailField = screen.getByRole("textbox");
            fireEvent.focus(emailField);
            fireEvent.change(emailField, { target: { value: userEmail } });

            await flushPromises();

            // click on proconnect button
            const proconnectButton = screen.getByTestId("mas-submit");
            await act(async () => {
                await fireEvent.click(proconnectButton);
            });

            expect(authorize.startOidcLogin).toHaveBeenCalledWith(
                undefined, // delegatedAuthentication is undefined in this test
                expect.anything(), // clientId
                expect.anything(), // hsUrl
                expect.anything(), // isUrl
                true, // isRegistration
                userEmail, // loginHint - c'est ce paramètre que nous voulons vérifier
            );
        });
    });
});
