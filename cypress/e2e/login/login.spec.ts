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

import { SynapseInstance } from "../../plugins/synapsedocker";

describe("Login", () => {
    let synapse: SynapseInstance;

    // Todo : set this more globally for all tests.
    const frenchLanguageBrowserOpts = {
        onBeforeLoad(win) {
            Object.defineProperty(win.navigator, 'language', { value: 'fr-FR' });
            Object.defineProperty(win.navigator, 'languages', { value: ['fr'] });
            Object.defineProperty(win.navigator, 'accept_languages', { value: ['fr'] });
        },
        headers: {
            'Accept-Language': 'fr',
        },
    };

    beforeEach(() => {
        cy.visit("/#/login", frenchLanguageBrowserOpts);
        cy.startSynapse("consent").then(data => {
            synapse = data;
        });
    });

    afterEach(() => {
        cy.stopSynapse(synapse);
    });

    describe("m.login.password", () => {
        // Specify these values in env vars. You can use the .env file. See .env.example.
        // Will be replaced by a generated random user when we have a full docker setup
        const username = Cypress.env('E2E_TEST_USER_EMAIL');
        const password = Cypress.env('E2E_TEST_USER_PASSWORD');
        const key = Cypress.env('E2E_TEST_USER_SECURITY_KEY');

        beforeEach(() => {
            // We use a pre-existing user on dev backend. If random user was created each time, we would use :
            // cy.registerUser(synapse, username, password);
        });

        // For now, the login is run against the default_server_config.m.homeserver.base_url present in config.json.
        it("logs in with an existing account and lands on the home screen", () => {
            cy.injectAxe();

            cy.get("#mx_LoginForm_username", { timeout: 15000 }).should("be.visible");
            cy.percySnapshot("Login");
            // cy.checkA11y();

            // For this test we use the default server so no needs to change the targeted homeserver.
            // For other HS here how to proceed :
            // cy.get(".mx_ServerPicker_change").click();
            // // cy.get(".mx_ServerPickerDialog_otherHomeserver").type(synapse.baseUrl);
            // cy.get(".mx_ServerPickerDialog_continue").click();
            // // wait for the dialog to go away
            // cy.get('.mx_ServerPickerDialog').should('not.exist');

            cy.get("#mx_LoginForm_username").type(username);
            cy.get("#mx_LoginForm_password").type(password);
            cy.startMeasuring("from-submit-to-home");
            cy.get(".mx_Login_submit").click();

            // TCHAP: Verify device step
            // this should not be necessary when creating users but for now I get this too often to ignore it
            // Feels free to delete when not needed
            cy.wait(4000); // Loading may take some time
            cy.get("body").then((body) => {
                if (body.find('.mx_CompleteSecurityBody').text().includes('Vérifier')) {
                    cy.get('.mx_AccessibleButton_kind_primary').last().click();
                    cy.get('#mx_securityKey').type(key);
                    cy.get('[data-test-id=dialog-primary-button]').click();

                    cy.get('.mx_AccessibleButton_kind_primary').first().click();
                }
            });

            cy.url().should('contain', '/#/home');
            cy.stopMeasuring("from-submit-to-home");
        });

        it.skip("logs in as external user", () => {
        });

        it.skip("logs in as external user on agent homeserver", () => {
        });
    });
});
