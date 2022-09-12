/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/// <reference types="cypress" />

import Chainable = Cypress.Chainable;

function openCreateRoomDialog(): Chainable<JQuery<HTMLElement>> {
    cy.get('[aria-label="Add room"]').click();
    cy.get('.mx_ContextualMenu [aria-label="New room"]').click();
    return cy.get(".mx_Dialog");
}

// TODO: starter implementation for DMs, for now it just open the dialog
function openCreateDMDialog(): Chainable<JQuery<HTMLElement>> {
    cy.get('.mx_RoomSublist_auxButton').first().click();
    return cy.get(".mx_Dialog");
}

describe("Create Room", () => {
    let homeserverShortname;
    beforeEach(() => {
        // todo we're going to do this a lot, maybe move to somewhere common
        const email = Cypress.env('E2E_TEST_USER_EMAIL');
        const password = Cypress.env('E2E_TEST_USER_PASSWORD');
        const homeserverUrl = Cypress.env('E2E_TEST_USER_HOMESERVER_URL');
        homeserverShortname = Cypress.env('E2E_TEST_USER_HOMESERVER_SHORT');
        if (!email || !password || !homeserverUrl || !homeserverShortname) {
            throw Error('Env vars not found : cypress needs ' +
                'E2E_TEST_USER_EMAIL, E2E_TEST_USER_PASSWORD, E2E_TEST_USER_HOMESERVER_URL and ' +
                'E2E_TEST_USER_HOMESERVER_SHORT.' +
                ' Set then in the .env file.');
        }

        cy.loginUser(homeserverUrl, email, password);
    });

    afterEach(() => {
        // todo logout ? Otherwise useless to login beforeEach
        // todo delete room, otherwise the test user will end up with a million identical rooms after a while.
    });

    it("should allow us to create a private room with name", () => {
        const name = "Test room 1 private";

        openCreateRoomDialog().within(() => {
            // Fill name
            cy.get('[label="Name"]').type(name);
            // Submit
            cy.startMeasuring("from-submit-to-room");
            cy.get(".mx_Dialog_primary").click();
        });

        // Url of room looks like :
        // http://localhost:8080/#/room/!kshfkshfkKSHJ:agent1.tchap.incubateur.net
        const roomUrlRegex = new RegExp("/#/room/![A-z0-9]+:" + homeserverShortname);
        cy.url().should("match", roomUrlRegex);
        cy.stopMeasuring("from-submit-to-room");
        cy.get(".mx_RoomHeader_nametext").contains(name);
    });

    // fixme: pas d'indicateur d'externes en v4
    it.skip("should allow us to create a private room with name and externs allowed", () => {
        const name = "Test room 1 externes";

        openCreateRoomDialog().within(() => {
            // Fill name
            cy.get('[label="Name"]').type(name);
            // Change room to external
            cy.get(".tc_TchapRoomTypeSelector_external").click();
            // Submit
            cy.startMeasuring("from-submit-to-room");
            cy.get(".mx_Dialog_primary").click();
        });

        // Url of room looks like :
        // http://localhost:8080/#/room/!kshfkshfkKSHJ:agent1.tchap.incubateur.net
        const roomUrlRegex = new RegExp("/#/room/![A-z0-9]+:" + homeserverShortname);
        cy.url().should("match", roomUrlRegex);
        cy.stopMeasuring("from-submit-to-room");
        cy.get(".mx_RoomHeader_nametext").contains(name);
    });

    it("should allow us to create a public room with name", () => {
        const name = "Test room 1 public";

        openCreateRoomDialog().within(() => {
            // Fill name
            cy.get('[label="Name"]').type(name);
            // Change room to public
            cy.get(".tc_TchapRoomTypeSelector_forum").click();
            // Submit
            cy.startMeasuring("from-submit-to-room");
            cy.get(".mx_Dialog_primary").click();
        });

        // Url of room looks like :
        // http://localhost:8080/#/room/!kshfkshfkKSHJ:agent1.tchap.incubateur.net
        const roomUrlRegex = new RegExp("/#/room/![A-z0-9]+:" + homeserverShortname);
        cy.url().should("match", roomUrlRegex);
        cy.stopMeasuring("from-submit-to-room");
        cy.get(".mx_RoomHeader_nametext").contains(name);
    });

    // TODO DMs are not tested for now
    it.skip("should allow us to create a DM with another user", () => {
        const invitee = "User 2";

        openCreateDMDialog().within(() => {
            // Fill name & topic
            cy.get('data-test-id="invite-dialog-input"').type(invitee);
            // TODO check if invitee is in list
            cy.get('.mx_InviteDialog_buttonAndSpinner').click();
            // Submit
            cy.startMeasuring("from-submit-to-room");
            cy.get(".mx_Dialog_primary").click();
        });

        const roomUrlRegex = new RegExp("/#/room/#test-room-1:" + homeserverShortname);
        cy.url().should("match", roomUrlRegex);
        cy.stopMeasuring("from-submit-to-room");
        cy.get(".mx_RoomHeader_nametext").contains(invitee);
        // cy.get(".mx_RoomHeader_topic").contains(topic);
    });
});
