import React from "react";
import { render, cleanup, fireEvent, screen, act } from "jest-matrix-react";
import { mocked, type MockedObject } from "jest-mock";
import { SSOAction, type MatrixClient } from "matrix-js-sdk/src/matrix";

import type BasePlatform from "~tchap-web/src/BasePlatform";

import EmailVerificationPage from "~tchap-web/src/tchap/components/views/sso/EmailVerificationPage";
import TchapUtils from "~tchap-web/src/tchap/util/TchapUtils";
import { type ValidatedServerConfig } from "~tchap-web/src/utils/ValidatedServerConfig";
import { flushPromises, mockPlatformPeg, stubClient } from "~tchap-web/test/test-utils";
import Login from "~tchap-web/src/Login";
import SdkConfig, { type ConfigOptions } from "~tchap-web/src/SdkConfig";
import * as authorize from "~tchap-web/src/utils/oidc/authorize";
import * as routing from "~tchap-web/src/vector/routing";

jest.mock("~tchap-web/src/PlatformPeg");
jest.mock("~tchap-web/src/tchap/util/TchapUtils");
jest.mock("~tchap-web/src/Login");

describe("Tests sso and oidc native flow", () => {
    const userEmail = "marc@tchap.beta.gouv.fr";
    const defaultHsUrl = "https://matrix.agent1.fr";
    const secondHsUrl = "https://matrix.agent2.fr";

    const PlatformPegMocked: MockedObject<BasePlatform> = mockPlatformPeg();
    const mockedClient: MatrixClient = stubClient();
    const mockedTchapUtils = mocked(TchapUtils);
    const mockedLogin = Login as jest.Mock;

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

    describe("MAS flow deactivated", () => {
        beforeEach(() => {
            const config: ConfigOptions = { tchap_mas_flow: { isActive: false } };
            SdkConfig.put(config);

            mockedLogin.mockImplementation(() => ({
                hsUrl: defaultHsUrl,
                createTemporaryClient: jest.fn().mockReturnValue(mockedClient),
                getFlows: jest.fn().mockResolvedValue([{ type: "m.login.sso" }]),
            }));
        });

        afterEach(() => {
            cleanup();
            jest.restoreAllMocks();
        });

        it("returns error when empty email", async () => {
            renderEmailVerificationPage();

            // Put text in email field
            const emailField = screen.getByRole("textbox");
            fireEvent.focus(emailField);
            fireEvent.change(emailField, { target: { value: "" } });

            // click on proconnect button
            const proconnectButton = screen.getByTestId("proconnect-submit");

            await act(async () => {
                await fireEvent.click(proconnectButton);
            });

            // Submit button should be disabled
            expect(proconnectButton).toHaveAttribute("disabled");
        });

        it("returns inccorrect email", async () => {
            renderEmailVerificationPage();

            // Put text in email field
            const emailField = screen.getByRole("textbox");
            fireEvent.focus(emailField);
            fireEvent.change(emailField, { target: { value: "falseemail" } });

            // click on proconnect button
            const proconnectButton = screen.getByTestId("proconnect-submit");
            await act(async () => {
                await fireEvent.click(proconnectButton);
            });

            // Submit button should be disabled
            expect(proconnectButton).toHaveAttribute("disabled");
        });

        it("should throw error when homeserver catch an error", async () => {
            const { container } = renderEmailVerificationPage();

            // mock server returns an errorn, we dont need to mock the other implementation
            // since the code should throw an error before accessing them
            mockedValidatedServerConfig(true);

            // Put text in email field
            const emailField = screen.getByRole("textbox");
            fireEvent.focus(emailField);
            fireEvent.change(emailField, { target: { value: userEmail } });

            await flushPromises();
            // click on proconnect button
            const proconnectButton = screen.getByTestId("proconnect-submit");
            await act(async () => {
                await fireEvent.click(proconnectButton);
            });

            // Error classes should not appear
            expect(container.getElementsByClassName("mx_ErrorMessage").length).toBe(1);
        });

        it("should throw and error when connecting to proconnect error", async () => {
            const { container } = renderEmailVerificationPage();

            mockedValidatedServerConfig(false);
            // mock platform page startsso error
            mockedPlatformPegStartSSO(true);

            // Put text in email field
            const emailField = screen.getByRole("textbox");
            fireEvent.focus(emailField);
            fireEvent.change(emailField, { target: { value: userEmail } });

            await flushPromises();

            // click on proconnect button
            const proconnectButton = screen.getByTestId("proconnect-submit");
            await act(async () => {
                await fireEvent.click(proconnectButton);
            });

            // Error classes should not appear
            expect(container.getElementsByClassName("mx_ErrorMessage").length).toBe(1);
        });

        it("should start sso with correct homeserver 1", async () => {
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
            const proconnectButton = screen.getByTestId("proconnect-submit");
            await act(async () => {
                await fireEvent.click(proconnectButton);
            });

            expect(mockedTchapUtils.makeValidatedServerConfig).toHaveBeenCalledWith({
                base_url: defaultHsUrl,
                server_name: defaultHsUrl,
            });

            expect(PlatformPegMocked.startSingleSignOn).toHaveBeenNthCalledWith(
                1,
                mockedClient,
                "sso",
                "/home",
                "",
                SSOAction.LOGIN,
                userEmail,
            );
        });

        it("should start sso with correct homeserver 2", async () => {
            renderEmailVerificationPage();

            // Mock the implementation without error, what we want is to be sure they are called with the correct parameters
            mockedFetchHomeserverFromEmail(secondHsUrl);
            mockedValidatedServerConfig(false, secondHsUrl);
            mockedPlatformPegStartSSO(false);

            // Put text in email field
            const emailField = screen.getByRole("textbox");
            fireEvent.focus(emailField);
            fireEvent.change(emailField, { target: { value: userEmail } });

            await flushPromises();

            // click on proconnect button
            const proconnectButton = screen.getByTestId("proconnect-submit");
            await act(async () => {
                await fireEvent.click(proconnectButton);
            });

            expect(mockedTchapUtils.makeValidatedServerConfig).toHaveBeenCalledWith({
                base_url: secondHsUrl,
                server_name: secondHsUrl,
            });

            expect(PlatformPegMocked.startSingleSignOn).toHaveBeenNthCalledWith(
                1,
                mockedClient,
                "sso",
                "/home",
                "",
                SSOAction.LOGIN,
                userEmail,
            );
        });

        it("should display error when sso is not configured in homeserer", async () => {
            const { container } = renderEmailVerificationPage();

            // Mock the implementation without error, what we want is to be sure they are called with the correct parameters
            mockedFetchHomeserverFromEmail(secondHsUrl);
            mockedValidatedServerConfig(false, secondHsUrl);
            mockedPlatformPegStartSSO(false);
            // get flow without sso configured on homeserver
            mockedLogin.mockImplementation(() => ({
                hsUrl: secondHsUrl,
                createTemporaryClient: jest.fn().mockReturnValue(mockedClient),
                getFlows: jest.fn().mockResolvedValue([{ type: "m.login.password" }]),
            }));
            // Put text in email field
            const emailField = screen.getByRole("textbox");
            fireEvent.focus(emailField);
            fireEvent.change(emailField, { target: { value: userEmail } });

            await flushPromises();

            // click on proconnect button
            const proconnectButton = screen.getByTestId("proconnect-submit");
            await act(async () => {
                await fireEvent.click(proconnectButton);
            });

            expect(container.getElementsByClassName("mx_ErrorMessage").length).toBe(1);
        });
    });
    describe("MAS flow activated", () => {
        beforeEach(() => {
            const config: ConfigOptions = {
                tchap_mas_flow: {
                    isActive: true,
                    isMASmigration: false,
                },
            };

            SdkConfig.put(config);
            // Dans le beforeEach du bloc "MAS flow activated"
            jest.spyOn(authorize, "startOidcLogin").mockImplementation(jest.fn());

            mockedLogin.mockImplementation(() => ({
                hsUrl: defaultHsUrl,
                delegatedAuthentication: {},
                getFlows: jest.fn().mockResolvedValue([{ type: "oidcNativeFlow", clientId: "clientId" }]),
            }));
        });

        it("should display correct title and button label when mas flow is activated", () => {
            renderEmailVerificationPage();

            expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument();
            expect(screen.getByRole("heading", { name: "Sign in" })).toBeInTheDocument();
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
