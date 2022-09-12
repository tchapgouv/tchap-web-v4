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
    beforeEach(() => {
    });

    afterEach(() => {
    });

    describe("loginWithUrl works", () => {
        // Specify these values in env vars. You can use the .env file. See .env.example.
        // Will be replaced by a generated random user when we have a full docker setup
        const email = Cypress.env('E2E_TEST_USER_EMAIL');
        const password = Cypress.env('E2E_TEST_USER_PASSWORD');
        const homeserverUrl = Cypress.env('E2E_TEST_USER_HOMESERVER_URL');

        beforeEach(() => {
            // We use a pre-existing user on dev backend. If random user was created each time, we would use :
            // cy.registerUser(synapse, username, password);
        });

        it("logs in with an existing account", () => {
            if (!email || !password || !homeserverUrl) {
                throw Error('Env vars not found : cypress needs ' +
                    'E2E_TEST_USER_EMAIL, E2E_TEST_USER_PASSWORD and E2E_TEST_USER_HOMESERVER_URL.' +
                    ' Set then in the .env file.');
            }

            cy.loginUser(homeserverUrl, email, password);
        });
    });
});
