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
    const url = `${homeserverUrl}/_matrix/client/r0/logout`;

    prelaunchFn?.();

    try {
        return cy.getClientIfPresent().then(matrixClient => {
            // Sometimes the matrixClient is not present or getAccessToken is not present. In that case, no logout.
            // Not sure when/why this happens.
            if (!matrixClient || !matrixClient.getAccessToken) {
                console.error('No matrixClient or accessToken. Cannot logout.');
                return;
            }
            return cy.request({
                url,
                method: "POST",
                body: {},
                headers: {
                    "Authorization": "Bearer " + matrixClient.getAccessToken(),
                },
            });
        });
    } catch (error) {
        console.error("Could not log out.", error);
        return cy.wrap('foo');
    }
});

// Needed to make this file a module
export { };
