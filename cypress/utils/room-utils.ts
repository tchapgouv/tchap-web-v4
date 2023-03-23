import Chainable = Cypress.Chainable;
import TchapCreateRoom from "../../src/lib/createTchapRoom";
import { TchapRoomType } from "../../src/@types/tchap";
export default class RoomUtils {
    public static createPublicRoom(roomName: string): Chainable<string> {
        return cy.createRoom(TchapCreateRoom.roomCreateOptions(roomName, TchapRoomType.Forum, false).createOpts);
    }
    public static createPrivateRoom(roomName: string): Chainable<string> {
        return cy.createRoom(TchapCreateRoom.roomCreateOptions(roomName, TchapRoomType.Private, false).createOpts);
    }
    public static createPrivateWithExternalRoom(roomName: string): Chainable<string> {
        return cy.createRoom(TchapCreateRoom.roomCreateOptions(roomName, TchapRoomType.External, false).createOpts);
    }
    public static openRoomAccessSettings(roomName: string): Chainable<JQuery<HTMLElement>> {
        //open room
        cy.get('[aria-label="' + roomName + '"]').click();
        cy.get(".mx_RoomHeader_chevron").click();
        cy.get('[aria-label="Paramètres"] > .mx_IconizedContextMenu_label').click();
        return cy.get('[data-testid="settings-tab-ROOM_SECURITY_TAB"] > .mx_TabbedView_tabLabel_text').click();
    }
}
