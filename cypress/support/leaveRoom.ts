/**
 * Copyright DINUM 2023
 */

/// <reference types="cypress" />
import Chainable = Cypress.Chainable;
import type { Room } from "matrix-js-sdk/src/matrix";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            /**
             * Leave a room.
             * @param roomId the id of the room to invite to
             */
            leaveRoom(roomId: string): Chainable<{}>;
        }
    }
}

Cypress.Commands.add("leaveRoom", (roomId: string): Chainable<{}> => {
    return cy.getClient().then((cli) => cli.leave(roomId));
});
