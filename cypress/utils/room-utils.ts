import Chainable = Cypress.Chainable;
import TchapCreateRoom from "../../src/tchap/lib/createTchapRoom";
import { TchapRoomType } from "../../src/tchap/@types/tchap";

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
    public static openRoom(roomName: string): Chainable<JQuery<HTMLElement>> {
        return cy.get('[aria-label="' + roomName + '"]').click();
    }
    public static openRoomAccessSettings(roomName: string): Chainable<JQuery<HTMLElement>> {
        cy.get('[aria-label="' + roomName + '"]').click(); //open room
        cy.get(".mx_LegacyRoomHeader_chevron").click();
        cy.get('[aria-label="Paramètres"] > .mx_IconizedContextMenu_label').click();
        return cy.get('[data-testid="settings-tab-ROOM_SECURITY_TAB"] > .mx_TabbedView_tabLabel_text').click();
    }
    public static openRoomInformation(roomName: string): Chainable<JQuery<HTMLElement>> {
        cy.get('[aria-label="' + roomName + '"]').click(); //open room
        return cy.get('[aria-label="Information du salon"]').click();
    }
    public static openPeopleMenu(roomName: string): Chainable<JQuery<HTMLElement>> {
        this.openRoomInformation(roomName);
        return cy.get(".mx_RoomSummaryCard_icon_people").click();
    }
}
