/// <reference types="cypress" />

import RoomUtils from "../../utils/room-utils";
import RandomUtils from "../../utils/random-utils";

describe("Export room members feature", () => {
    const homeserverUrl = Cypress.env("E2E_TEST_USER_HOMESERVER_URL");
    const homeserverShort = Cypress.env("E2E_TEST_USER_HOMESERVER_SHORT");
    const email = Cypress.env("E2E_TEST_USER_EMAIL");
    const password = Cypress.env("E2E_TEST_USER_PASSWORD");
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    // todo normalize name
    const roomName = "test" + /*today + "exportroommembers" + */ RandomUtils.generateRandom(4);
    // This will fail if email has special characters.
    const userId = "@" + email.replace('@', '-') + ":" + homeserverShort;

    beforeEach(() => {
        cy.loginUser(homeserverUrl, email, password);
    });

    afterEach(() => {
        // todo delete room, otherwise the test user will end up with a million identical rooms after a while.
    });

    // it('should display the tooltip on button hover', () => {
    //     RoomUtils.createPublicRoom(roomName).then((roomId) => {
    //         RoomUtils.openRoomInformation(roomName);
    //         cy.get('[aria-label="Information du salon"]').click(); // open room information side panel
    //         cy.get('[id="exportRoomMembersButton"]')
    //             .trigger('mouseover')
    //             .get('[id="exportRoomMembersTooltip"]') // // tooltip should show
    //     });
    // });

    it("downloads the file when button is clicked", () => {
        RoomUtils.createPublicRoom(roomName).then((roomId) => {
            RoomUtils.openPeopleMenu(roomName);
            cy.get('[data-testid="exportRoomMembersButton"]')
                .click()
                .then(() => {
                    cy.readFile("cypress/downloads/membres_de_" + roomName + ".txt")
                        .should("eq", userId);
                });
        });
    });
});
