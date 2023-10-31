/// <reference types="cypress" />

import RoomUtils from "../../utils/room-utils";
import RandomUtils from "../../utils/random-utils";
import { normalize } from "matrix-js-sdk/src/utils";

describe("Export room members feature", () => {
    const homeserverUrl = Cypress.env("E2E_TEST_USER_HOMESERVER_URL");
    const homeserverShort = Cypress.env("E2E_TEST_USER_HOMESERVER_SHORT");
    const email = Cypress.env("E2E_TEST_USER_EMAIL");
    const password = Cypress.env("E2E_TEST_USER_PASSWORD");
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    beforeEach(() => {
        cy.loginUser(homeserverUrl, email, password);
    });

    afterEach(() => {});

    it("should display the tooltip on button hover", () => {
        const roomName = "test/" + today + "/export_room_members/" + RandomUtils.generateRandom(4);
        RoomUtils.createPublicRoom(roomName).then((roomId) => {
            RoomUtils.openPeopleMenu(roomName);
            cy.get('[data-testid="tc_exportRoomMembersButton"]')
                .trigger("mouseover")
                .get(".tc_exportRoomMembersTooltip"); // tooltip should show
            cy.leaveRoom(roomId);
        });
    });

    it("downloads the file when button is clicked", () => {
        const roomName = "test/" + today + "/export_room_members/" + RandomUtils.generateRandom(4);
        const normalizedRoomName = normalize(roomName);

        const normalizedEmail = email.replace("@", "-"); // This will fail if email has additional special characters.
        const userIdRegexString =
            "^" +
            "@" +
            normalizedEmail.replaceAll(".", "\\.") + // escape dots
            "[0-9]{0,3}" + // if the account has been deleted and recreated, there is an additional number here.
            ":" +
            homeserverShort +
            "$";
        const userIdRegex = new RegExp(userIdRegexString);

        RoomUtils.createPublicRoom(roomName).then((roomId) => {
            RoomUtils.openPeopleMenu(roomName);
            cy.get('[data-testid="tc_exportRoomMembersButton"]')
                .click()
                .then(() => {
                    cy.readFile("cypress/downloads/membres_de_" + normalizedRoomName + ".txt").should(
                        "match",
                        userIdRegex,
                    );
                });
            cy.leaveRoom(roomId);
        });
    });
});
