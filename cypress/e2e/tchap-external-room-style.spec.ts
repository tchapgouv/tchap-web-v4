/// <reference types="cypress" />

import RoomUtils from "../utils/room-utils";
import RandomUtils from "../utils/random-utils";

describe("Style of external rooms", () => {
    const homeserverUrl = Cypress.env("E2E_TEST_USER_HOMESERVER_URL");
    const email = Cypress.env("E2E_TEST_USER_EMAIL");
    const password = Cypress.env("E2E_TEST_USER_PASSWORD");
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    beforeEach(() => {
        cy.loginUserByEmail(homeserverUrl, email, password);
    });

    it("displays special header in external private room", () => {
        const roomName = "test/" + today + "/external_room_header_" + RandomUtils.generateRandom(4);

        RoomUtils.createPrivateWithExternalRoom(roomName).then((roomId) => {
            //open room
            cy.get('[aria-label="' + roomName + '"]').click();

            cy.get(".mx_LegacyRoomHeader").within(() => {
                cy.get(".tc_RoomHeader_external"); // "ouvert aux externes"
                cy.get(".mx_DecoratedRoomAvatar_icon_external"); // lock icon on room avatar
            });

            cy.leaveRoom(roomId);
        });
    });
});
