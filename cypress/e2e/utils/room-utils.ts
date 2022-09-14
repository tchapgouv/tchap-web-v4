import Chainable = Cypress.Chainable;

export default class RoomUtils {

    static openCreateRoomDialog(): Chainable<JQuery<HTMLElement>> {
        const addRoomLabel = "Ajouter un salon";
        const newRoomLabel = "Nouveau salon";
        cy.get(`[aria-label="${addRoomLabel}"]`).click();
        cy.get(`.mx_ContextualMenu [aria-label="${newRoomLabel}"]`).click();
        return cy.get(".mx_Dialog");
    }


    static createPrivateRoom(roomName: string) {
        RoomUtils.openCreateRoomDialog().within(() => {
          // Fill name
          const nameLabel = "Nom";
          cy.get(`[label="${nameLabel}"]`).type(roomName);
          // Submit
          cy.startMeasuring("from-submit-to-room");
          cy.get(".mx_Dialog_primary").click();
        });
    }

    static createPublicRoom(roomName: string) {
        RoomUtils.openCreateRoomDialog().within(() => {
          // Fill name
          const nameLabel = "Nom";
          cy.get(`[label="${nameLabel}"]`).type(roomName);
          // Change room to public
          cy.get(".tc_TchapRoomTypeSelector_forum").click();
          // Submit
          cy.startMeasuring("from-submit-to-room");
          cy.get(".mx_Dialog_primary").click();
        });
    }

    static createPrivateRoomWithExternal(roomName: string) {
        RoomUtils.openCreateRoomDialog().within(() => {
          // Fill name
          const nameLabel = "Nom";
          cy.get(`[label="${nameLabel}"]`).type(roomName);
          // Change room to public
          cy.get(".tc_TchapRoomTypeSelector_external").click();
          // Submit
          cy.startMeasuring("from-submit-to-room");
          cy.get(".mx_Dialog_primary").click();
        });
    }
}

