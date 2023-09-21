/// <reference types="cypress" />

import RoomUtils from "../../utils/room-utils";
import RandomUtils from "../../utils/random-utils";

describe("Check room access settings", () => {
    const homeserverUrl = Cypress.env("E2E_TEST_USER_HOMESERVER_URL");
    const email = Cypress.env("E2E_TEST_USER_EMAIL");
    const password = Cypress.env("E2E_TEST_USER_PASSWORD");
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

    beforeEach(() => {
        cy.loginUser(homeserverUrl, email, password);
    });

    afterEach(() => {
        // todo delete room, otherwise the test user will end up with a million identical rooms after a while.
    });

    it("creates a public room and check access settings", () => {
        const roomName = "test/" + today + "/public_room_check_access_settings" + RandomUtils.generateRandom(4);

        RoomUtils.createPublicRoom(roomName).then((roomId) => {
            RoomUtils.openRoomAccessSettings(roomName);

            //assert
            cy.get("#joinRule-invite-description").should("not.exist");
            cy.get("#joinRule-restricted-description").should("exist");
            cy.get("#joinRule-public-description").should("exist");

            //encryption switch should be off and disabled
            cy.contains(".mx_SettingsFlag", /^Chiffré$/).within(() => {
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-checked", "false");
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-disabled", "true");
            });

            //should not show more settings, nor invite guests
            cy.contains(".mx_SettingsTab_section", /^Afficher les paramètres avancés$/).should("not.exist");
            cy.contains(".mx_SettingsFlag", /^Activer l’accès visiteur$/).should("not.exist");

            cy.leaveRoom(roomId);
        });
    });

    it("creates a private room and check access settings", () => {
        const roomName = "test/" + today + "/private_room_check_access_settings" + RandomUtils.generateRandom(4);

        RoomUtils.createPrivateRoom(roomName).then((roomId) => {
            RoomUtils.openRoomAccessSettings(roomName);

            //assert
            cy.get("#joinRule-invite-description").should("exist");
            cy.get("#joinRule-restricted-description").should("exist");
            cy.get("#joinRule-public-description").should("not.exist");

            //encryption switch should be on
            cy.contains(".mx_SettingsFlag", /^Chiffré$/).within(() => {
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-checked", "true");
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-disabled", "true");
            });

            //external user access switch should not be on and not disabled
            cy.contains(".mx_SettingsFlag", /^Autoriser les externes à rejoindre ce salon$/).within(() => {
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-checked", "false");
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-disabled", "false");
            });

            cy.leaveRoom(roomId);
        });
    });

    it("creates a private room with external and check access settings", () => {
        const roomName = "test/" + today + "/external_room_check_access_settings" + RandomUtils.generateRandom(4);

        RoomUtils.createPrivateWithExternalRoom(roomName).then((roomId) => {
            RoomUtils.openRoomAccessSettings(roomName);

            //assert
            cy.get("#joinRule-invite-description").should("exist");
            cy.get("#joinRule-restricted-description").should("exist");
            cy.get("#joinRule-public-description").should("not.exist");

            //encryption switch should be on
            cy.contains(".mx_SettingsFlag", /^Chiffré$/).within(() => {
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-checked", "true");
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-disabled", "true");
            });

            // external user access switch should be on and disabled
            cy.contains(".mx_SettingsFlag", /^Autoriser les externes à rejoindre ce salon$/).within(() => {
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-checked", "true");
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-disabled", "true");
            });

            cy.leaveRoom(roomId);
        });
    });

    it("allow access for external users on a private room", () => {
        const roomName =
            "test/" + today + "/private_room_change_external_access_settings" + RandomUtils.generateRandom(4);

        RoomUtils.createPrivateRoom(roomName).then((roomId) => {
            RoomUtils.openRoomAccessSettings(roomName);

            // click on 'Allow the externals to join' this room
            cy.get(".tc_JoinRuleSettings_externs_switch .mx_ToggleSwitch").click();
            // click on the confirmation popup box
            cy.get('[data-testid="dialog-primary-button"]').click();

            //assert
            cy.contains(".mx_SettingsFlag", /^Autoriser les externes à rejoindre ce salon$/).within(() => {
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-checked", "true");
                cy.get(".mx_AccessibleButton").should("have.attr", "aria-disabled", "true");
            });
            //assert room header is updated
            cy.get(".tc_RoomHeader_external").should("exist");

            cy.leaveRoom(roomId);
        });
    });
});
