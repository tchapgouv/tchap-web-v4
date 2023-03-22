describe("Check settings customization", () => {
    const homeserverUrl = Cypress.env("E2E_TEST_USER_HOMESERVER_URL");
    const email = Cypress.env("E2E_TEST_USER_EMAIL");
    const password = Cypress.env("E2E_TEST_USER_PASSWORD");

    beforeEach(() => {
        cy.loginUser(homeserverUrl, email, password);
    });

    it("show security configs without the things we dont like", () => {
        cy.get(".mx_UserMenu_userAvatar").click();
        cy.get('[aria-label="Sécurité et vie privée"]').click();

        /**
         * The section "Recherche de message" has been deleted, it was between "Sauvegarde automatique des messages" and "Signature croisée"
         * https://github.com/tchapgouv/tchap-web-v4/issues/466
         * see res/themes/tchap-common/css/_tchap_custom.pcss
         */
        cy.get(":nth-child(4) > :nth-child(1) > .mx_SettingsTab_subheading").should(
            "contain",
            "Sauvegarde automatique des messages",
        );
        cy.get(":nth-child(3) > .mx_SettingsTab_subheading").should("contain", "Signature croisée");
    });
});
