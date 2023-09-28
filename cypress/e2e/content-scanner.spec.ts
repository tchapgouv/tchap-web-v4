/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import RoomUtils from "../utils/room-utils";
import RandomUtils from "../utils/random-utils";

describe("Content Scanner", () => {
    const homeserverUrl = Cypress.env("E2E_TEST_USER_HOMESERVER_URL");
    const email = Cypress.env("E2E_TEST_USER_EMAIL");
    const password = Cypress.env("E2E_TEST_USER_PASSWORD");
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    beforeEach(() => {
        cy.loginUser(homeserverUrl, email, password);
    });

    const uploadFile = (file: string) => {
        // Upload a file from the message composer
        cy.get(".mx_MessageComposer_actions input[type='file']").selectFile(file, { force: true });

        cy.get(".mx_Dialog").within(() => {
            cy.findByRole("button", { name: "Upload" }).click();
        });

        // Wait until the file is sent
        cy.get(".mx_RoomView_statusArea_expanded").should("not.exist");
        cy.get(".mx_EventTile.mx_EventTile_last .mx_EventTile_receiptSent").should("exist");
    };

    it("displays 'Verified' after an image is uploaded", () => {
        const roomName = "test/" + today + "/content_scanner_" + RandomUtils.generateRandom(4);

        RoomUtils.createPrivateWithExternalRoom(roomName).then((roomId) => {
            //open room
            cy.get('[aria-label="' + roomName + '"]').click();

            uploadFile("cypress/fixtures/riot.png");

            // "Verified" should display once scanning is finished successfully
            cy.get(".mx_EventTile_image .mx_ContentScanningStatus_done--light");

            cy.leaveRoom(roomId);
        });
    });
});
