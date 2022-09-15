/// <reference types="cypress" />

import RoomUtils from "../utils/room-utils";

describe("Check room access settings", () => {
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

    it.only("creates a public room and check access settings", () => {
        const roomName = "test/"+today+"/public_room_check_access_settings";

        RoomUtils.createPublicRoom(roomName);

        openRoomAccessSettings();

        //assert
        cy.get('#joinRule-invite-description').should('not.exist');
        cy.get('#joinRule-restricted-description').should('not.exist');
        cy.get('#joinRule-public-description').should('exist');

        //encryption switch should be off and disabled
        cy.contains(".mx_SettingsFlag", /^Chiffré$/).within(() => {
            cy.get('.mx_AccessibleButton').should('have.attr', 'aria-checked', 'false');
            cy.get('.mx_AccessibleButton').should('have.attr', 'aria-disabled', 'true');
        });

        //should not show more settings, nor invite guests
        cy.contains('.mx_SettingsTab_section', /^Afficher les paramètres avancés$/).should('not.exist');
        cy.contains('.mx_SettingsFlag', /^Activer l’accès visiteur$/).should('not.exist');
    });

    it("creates a private room and check access settings", () => {
        const roomName = "test/"+today+"/private_room_check_access_settings";

        RoomUtils.createPrivateRoom(roomName);

        openRoomAccessSettings();

        //assert
        cy.get('#joinRule-invite-description').should('exist');
        cy.get('#joinRule-restricted-description').should('not.exist');
        cy.get('#joinRule-public-description').should('not.exist');

        //encryption switch should be on
        cy.contains(".mx_SettingsFlag", /^Chiffré$/).within(() => {
            cy.get('.mx_AccessibleButton').should('have.attr', 'aria-checked', 'true');
            cy.get('.mx_AccessibleButton').should('have.attr', 'aria-disabled', 'true');
        });
    });

    it("creates a private room with external and check access settings", () => {
        const roomName = "test/"+today+"/private_room_check_access_settings";

        RoomUtils.createPrivateRoomWithExternal(roomName);

        openRoomAccessSettings();

        //assert
        cy.get('#joinRule-invite-description').should('exist');
        cy.get('#joinRule-restricted-description').should('not.exist');
        cy.get('#joinRule-public-description').should('not.exist');

        //encryption switch should be on
        cy.contains(".mx_SettingsFlag", /^Chiffré$/).within(() => {
            cy.get('.mx_AccessibleButton').should('have.attr', 'aria-checked', 'true');
            cy.get('.mx_AccessibleButton').should('have.attr', 'aria-disabled', 'true');
        });
    });
});

function openRoomAccessSettings() {
    cy.get('.mx_RoomHeader_chevron').click();
    cy.get('[aria-label="Paramètres"] > .mx_IconizedContextMenu_label').click();
    cy.get('[data-testid="settings-tab-ROOM_SECURITY_TAB"] > .mx_TabbedView_tabLabel_text').click();
}
