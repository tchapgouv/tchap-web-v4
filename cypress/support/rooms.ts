/**
 * Copyright DINUM 2023
 */

/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import Chainable = Cypress.Chainable;
import type { ICreateRoomOpts } from "matrix-js-sdk/src/@types/requests";
import type { Room } from "matrix-js-sdk/src/models/room";

import TchapCreateRoom from "../../src/tchap/lib/createTchapRoom";
import { TchapRoomType } from "../../src/tchap/@types/tchap";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            /**
             * Leave a room.
             * @param roomId the id of the room to invite to
             */
            leaveRoom(roomId: string): Chainable<{}>;

            /**
             * Leave a room. If the leaving fails, log and carry on without crashing the test.
             * Needed until this is fixed : https://github.com/tchapgouv/synapse-manage-last-admin/issues/11
             * @param roomId the id of the room to invite to
             */
            leaveRoomWithSilentFail(roomId: string): Chainable<{}>;

            /**
             * Leave the room that we are currently in.
             */
            leaveCurrentRoom(): Chainable<{}>;

            /**
             * Leave the room that we are currently in. If the leaving fails, log and carry on without crashing the test.
             */
            leaveCurrentRoomWithSilentFail(): Chainable<{}>;

            /**
             * Create a room with given options.
             * @param options the options to apply when creating the room
             * @return the ID of the newly created room
             */
            createRoom(options: ICreateRoomOpts): Chainable<string>;

            createPublicRoom(roomName: string): Chainable<string>;

            createPrivateRoom(roomName: string): Chainable<string>;

            createPrivateWithExternalRoom(roomName: string): Chainable<string>;
        }
    }
}

Cypress.Commands.add("leaveRoom", (roomId: string): Chainable<{}> => {
    return cy.getClient().then((cli) => cli.leave(roomId));
});

Cypress.Commands.add("leaveRoomWithSilentFail", (roomId: string): Chainable<{}> => {
    return cy.getClient().then((cli) => {
        return cli.leave(roomId).catch((err) => {
            cy.log("COULD NOT LEAVE ROOM ! Continuing silently.", err);
            return {};
        });
    });
});

Cypress.Commands.add("leaveCurrentRoom", (): Chainable<{}> => {
    // We find the roomId to clean up from the current URL.
    return cy.url().then((urlString) => {
        const roomId = urlString.split("/#/room/")[1];
        if (roomId) {
            return cy.leaveRoom(roomId);
        } else {
            console.error("Did not find roomId in url. Not cleaning up.");
            return {};
        }
    });
});

Cypress.Commands.add("leaveCurrentRoomWithSilentFail", (): Chainable<{}> => {
    // We find the roomId to clean up from the current URL.
    return cy.url().then((urlString) => {
        const roomId = urlString.split("/#/room/")[1];
        if (roomId) {
            return cy.leaveRoomWithSilentFail(roomId);
        } else {
            console.error("Did not find roomId in url. Not cleaning up.");
            return {};
        }
    });
});

Cypress.Commands.add("createRoom", (options: ICreateRoomOpts): Chainable<string> => {
    return cy.window({ log: false }).then(async (win) => {
        const cli = win.mxMatrixClientPeg.matrixClient;
        const resp = await cli.createRoom(options);
        const roomId = resp.room_id;

        if (!cli.getRoom(roomId)) {
            await new Promise<void>((resolve) => {
                const onRoom = (room: Room) => {
                    if (room.roomId === roomId) {
                        cli.off(win.matrixcs.ClientEvent.Room, onRoom);
                        resolve();
                    }
                };
                cli.on(win.matrixcs.ClientEvent.Room, onRoom);
            });
        }

        return roomId;
    });
});

Cypress.Commands.add("createPublicRoom", (roomName: string): Chainable<string> => {
    return cy.createRoom(TchapCreateRoom.roomCreateOptions(roomName, TchapRoomType.Forum, false).createOpts);
});

Cypress.Commands.add("createPrivateRoom", (roomName: string): Chainable<string> => {
    return cy.createRoom(TchapCreateRoom.roomCreateOptions(roomName, TchapRoomType.Private, false).createOpts);
});

Cypress.Commands.add("createPrivateWithExternalRoom", (roomName: string): Chainable<string> => {
    return cy.createRoom(TchapCreateRoom.roomCreateOptions(roomName, TchapRoomType.External, false).createOpts);
});

// Needed to make this file a module
export {};
