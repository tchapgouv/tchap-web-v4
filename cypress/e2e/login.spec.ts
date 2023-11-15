/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/// <reference types="cypress" />

describe("Login", () => {
    // Set language for browser.
    // This is only needed before login, since the login function sets language setting for user. Most tests don't need this.
    const frenchLanguageBrowserOpts = {
        onBeforeLoad(win): void {
            Object.defineProperty(win.navigator, "language", { value: "fr-FR" });
            Object.defineProperty(win.navigator, "languages", { value: ["fr"] });
            Object.defineProperty(win.navigator, "accept_languages", { value: ["fr"] });
        },
        headers: {
            "Accept-Language": "fr",
        },
    };

    beforeEach(() => {
        cy.visit("/#/login", frenchLanguageBrowserOpts);
    });

    afterEach(() => {});

    describe("m.login.password", () => {
        // Specify these values in env vars. You can use the .env file. See .env.example.
        // Will be replaced by a generated random user when we have a full docker setup
        const username = Cypress.env("E2E_TEST_USER_EMAIL");
        const password = Cypress.env("E2E_TEST_USER_PASSWORD");
        const securityKey = Cypress.env("E2E_TEST_USER_SECURITY_KEY");

        beforeEach(() => {
            // We use a pre-existing user on dev backend. If random user was created each time, we would use :
            // cy.registerUser(synapse, username, password);
        });

        // For now, the login is run against the default_server_config.m.homeserver.base_url present in config.json.
        it("logs in with an existing account and lands on the home screen", () => {
            cy.get("#mx_LoginForm_email", { timeout: 15000 }).should("be.visible");

            cy.get("#mx_LoginForm_email").type(username);
            cy.get("#mx_LoginForm_password").type(password);
            cy.get(".mx_Login_submit").click();

            // Enter security key
            cy.get(".mx_CompleteSecurityBody .mx_AccessibleButton")
                .contains("Vérifier avec un Code de Récupération")
                .click();
            cy.get("#mx_securityKey").type(securityKey);
            cy.get(".mx_AccessSecretStorageDialog .mx_Dialog_primary").click();

            // Success page displays. Click to continue.
            cy.get(".mx_E2EIcon_verified"); // check for presence of success icon
            cy.get(".mx_CompleteSecurityBody .mx_AccessibleButton_kind_primary").click();

            cy.url().should("contain", "/#/home");
        });
    });
});
