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
        cy.leaveCurrentRoom();
    });

    it("displays understandable text when messages are locked", () => {
        const roomName = "test/" + today + "/locked_messages_" + RandomUtils.generateRandom(4);

        // logout throws uncaught error : the database connection is closing.
        // This crashes cypress, so we catch the error here.
        cy.on("uncaught:exception", (err, runnable, promise) => {
            // return false to prevent the error from
            // failing this test
            return false;
        });
        // this event will automatically be unbound when this
        // test ends because it's attached to 'cy'

        return cy.getClient().then((cli) => {
            return cy.createPrivateRoom(roomName).then((roomId) => {
                RoomUtils.openRoom(roomName);

                cy.getComposer().type("Hello{enter}");

                // Assert that the message is displayed at the bottom.
                cy.get(".mx_EventTile_last").findByText("Hello").should("exist");

                // Wait for message to be actually sent out.
                // (if it's timing out, it can be because encryption is super long because the user has a million devices.)
                cy.get(".mx_EventTile.mx_EventTile_last .mx_EventTile_receiptSent").should("exist");

                // Logout through clicking buttons. (When we used cli.logout we had problems with corrupted database.)
                cy.findByRole("button", { name: "Menu utilisateur" }).click();

                cy.get(".mx_UserMenu_contextMenu").within(() => {
                    cy.findByRole("menuitem", { name: "Se déconnecter" }).click();
                });

                // Confirm you are leaving without setting up secure storage
                cy.findByRole("button", { name: "Se déconnecter quand-même" }).click();

                // Reload the page and go to login. (otherwise we sometimes end up at /#/welcome)
                cy.reload();
                cy.visit("/#/login");

                cy.loginByEmail();

                // go back to the room
                RoomUtils.openRoom(roomName);

                // Messages should be locked, with customized error message.
                // Note : on second login the language "fr" doesn't appear to be set, I don't know why.
                cy.get(".mx_DecryptionFailureBody").contains(
                    /Ceci pourrait prendre un moment|This could take a while/g,
                );
            });
        });
    });
});
