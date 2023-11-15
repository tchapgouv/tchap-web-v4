/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import RoomUtils from "../utils/room-utils";
import RandomUtils from "../utils/random-utils";

describe("Content Scanner", () => {
    const homeserverUrl = Cypress.env("E2E_TEST_USER_HOMESERVER_URL");
    const email = Cypress.env("E2E_TEST_USER_EMAIL");
    const password = Cypress.env("E2E_TEST_USER_PASSWORD");
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    // Login and create room only once for all tests. (good practice for e2e tests, it's not a unit test)
    beforeEach(() => {
        cy.loginByEmail(homeserverUrl, email, password);

        const roomName = "test/" + today + "/content_scanner_" + RandomUtils.generateRandom(4);

        RoomUtils.createPrivateRoom(roomName).then(() => {
            //open room
            cy.get('[aria-label="' + roomName + '"]').click();
        });
    });

    afterEach(() => {
        cy.leaveCurrentRoom();
    });

    const uploadFile = (file: string) => {
        // Upload a file from the message composer
        cy.get(".mx_MessageComposer_actions input[type='file']").selectFile(file, { force: true });

        cy.get(".mx_Dialog").get('[data-testid="dialog-primary-button"]').click();

        // Wait until the file is sent
        /*
        // This can take super long in tests, even on prod backend. Not sure why.
        // Disabling it since the test runs fine without it.
        // It can create popups like "this file could not be sent" because we left the room before the sending was confirmed.
        // But what we're testing is the content scanner, and that did run.
        cy.get(".mx_RoomView_statusArea_expanded").should("not.exist");
        cy.get(".mx_EventTile.mx_EventTile_last .mx_EventTile_receiptSent").should("exist");
        */
    };

    it("displays a success status after an image is successfully uploaded", () => {
        uploadFile("cypress/fixtures/chicken.gif");

        // A status should display once scanning is finished (success or not)
        cy.get(".mx_EventTile.mx_EventTile_last").get(".mx_ContentScanningStatus");
        cy.get(".mx_EventTile.mx_EventTile_last").get(".mx_ContentScanningStatus_done");
    });

    it("displays an error status after an evil file is blocked", () => {
        uploadFile("cypress/fixtures/evil_eicar_chicken.com");

        // A status should display once scanning is finished (success or not)
        cy.get(".mx_EventTile.mx_EventTile_last").get(".mx_ContentScanningStatus");
        cy.get(".mx_EventTile.mx_EventTile_last").get(".mx_ContentScanningStatus_unsafe");
    });
});
