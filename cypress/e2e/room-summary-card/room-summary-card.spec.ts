/// <reference types="cypress" />

import RoomUtils from "../../utils/room-utils";
import RandomUtils from "../../utils/random-utils";

describe('Export room members feature', () => {
    const homeserverUrl = Cypress.env("E2E_TEST_USER_HOMESERVER_URL");
    const email = Cypress.env("E2E_TEST_USER_EMAIL");
    const password = Cypress.env("E2E_TEST_USER_PASSWORD");
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const roomName = "test/" + today + "/public_room_check_access_settings" + RandomUtils.generateRandom(4);

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

    it('calls generateAndDownloadTextFile function on button click and downloads the file', () => {
        RoomUtils.createPublicRoom(roomName).then((roomId) => {
            RoomUtils.openRoomInformation(roomName);
            cy.get('[id="exportRoomMembersButton"]')
                .click()
                .then(() => {
                    cy.readFile('cypress/downloads/members.txt')
                        .should('exist');
                });
        });
    });
});
