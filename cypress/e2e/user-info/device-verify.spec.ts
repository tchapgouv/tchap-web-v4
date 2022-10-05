/// <reference types="cypress" />

import RoomUtils from "../utils/room-utils";

describe("Check user info panel", () => {
    const homeserverUrl = Cypress.env('E2E_TEST_USER_HOMESERVER_URL');
    const email = Cypress.env('E2E_TEST_USER_EMAIL');
    const password = Cypress.env('E2E_TEST_USER_PASSWORD');
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');

    beforeEach(() => {
        cy.loginUser(homeserverUrl, email, password);
    });

    afterEach(() => {
        // todo delete room, otherwise the test user will end up with a million identical rooms after a while.
    });


    it.only("checks that verify device open legacy verification process", () => {
        const roomName = "test/"+today+"/check_devive_verify"+RandomUtils.generateRandom(4);

        RoomUtils.createPrivateRoom(roomName)
            .then((roomId) => {
                RoomUtils.openParticipants(roomName);
            

                cy.leaveRoom(roomId);
            });
    });

   
});

