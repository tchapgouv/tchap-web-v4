/// <reference types="cypress" />

import RoomUtils from "../utils/room-utils";
import RandomUtils from "../utils/random-utils";

describe("Location", () => {
    const homeserverUrl = Cypress.env("E2E_TEST_USER_HOMESERVER_URL");
    const email = Cypress.env("E2E_TEST_USER_EMAIL");
    const password = Cypress.env("E2E_TEST_USER_PASSWORD");
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    beforeEach(() => {
        cy.loginUserByEmail(homeserverUrl, email, password);
    });

    it("does not show Location button in message composer", () => {
        // Create a room
        const roomName = "test/" + today + "/no_location_button/" + RandomUtils.generateRandom(4);
        RoomUtils.createPublicRoom(roomName).then((roomId) => {
            //open room
            cy.get('[aria-label="' + roomName + '"]').click();
            // Open menu in message composer
            cy.get(".mx_MessageComposer_actions").get(".mx_MessageComposer_buttonMenu").click();
            // Check the Location item is not there.
            cy.get(".mx_MessageComposer_Menu").get(".mx_MessageComposer_location").should("not.exist");

            cy.leaveRoom(roomId);
        });
    });
});
