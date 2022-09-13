/*
Copyright 2022 DINUM
*/

/// <reference types="cypress" />

import Chainable = Cypress.Chainable;

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            /**
             * Logs out the currently logged in user.
             * @param homeserverUrl the homeserver to connect to over http
             * @param prelaunchFn optional function to run before the app is visited
             */
            logout(
                homeserverUrl: string,
                prelaunchFn?: () => void,
            );
        }
    }
}

Cypress.Commands.add("logout", (
    homeserverUrl: string,
    prelaunchFn?: () => void,
): Chainable => {
    // XXX: work around Cypress not clearing IDB between tests
    cy.window({ log: false }).then(win => {
        win.indexedDB.databases().then(databases => {
            databases.forEach(database => {
                win.indexedDB.deleteDatabase(database.name);
            });
        });
    });

    const url = `${homeserverUrl}/_matrix/client/r0/logout`;

    prelaunchFn?.();

    return cy.getClient().then(matrixClient => {
        return cy.request({
            url,
            method: "POST",
            body: {},
            headers: {
                "Authorization": "Bearer " + matrixClient.getAccessToken(),
            },
        });
    });
});

// Needed to make this file a module
export { };
