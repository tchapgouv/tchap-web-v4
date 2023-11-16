/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import RandomUtils from "../utils/random-utils";
import RoomUtils from "../utils/room-utils";

import type { MatrixClient, Room } from "matrix-js-sdk/src/matrix";
import { HomeserverInstance } from "matrix-react-sdk/cypress/plugins/utils/homeserver";

describe("Locked messages", () => {
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    beforeEach(() => {
        cy.loginByEmail();
    });

    afterEach(() => {
        //cy.leaveCurrentRoom();
    });

    it("displays understandable text when messages are locked", () => {
        const roomName = "test/" + today + "/locked_messages_" + RandomUtils.generateRandom(4);

        return cy.getClient().then((cli) => {
            return cy.createPrivateRoom(roomName).then((roomId) => {
                RoomUtils.openRoom(roomName);

                cy.getComposer().type("Test message{enter}");

                /*
                // causes errors of database closing which crashes test. Best to do things by button clicks.
                cy.wrap(0)
                    .then(() => cli.logout(true))
                    .then(() => cy.log(`Bob logged out second device`));
                */
                cy.findByRole("button", { name: "Menu utilisateur" }).click();

                // give a change for the outstanding requests queue to settle before logging out
                cy.wait(2000); // necessary ?

                cy.get(".mx_UserMenu_contextMenu").within(() => {
                    cy.findByRole("menuitem", { name: "Se déconnecter" }).click();
                });

                // Confirm you are leaving without setting up secure storage
                cy.findByRole("button", { name: "Se déconnecter quand-même" }).click();

                // Click through the alert dialog saying we are disconnected
                cy.contains(".mx_Dialog_title", "Déconnecté");
                cy.get(".mx_Dialog_primary").click();

                // Error : the database connection is closing. This crashes cypress.
                // -> just use cli.logout then, it's not worth all this button clicking !
                cy.loginByEmail();
            });
        });

        // log back in without recovery key : select Verify with other device, then escape the dialog without verifying.
        // go back to the room
        // messages should be locked.
    });
});
