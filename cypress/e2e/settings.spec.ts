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
        cy.get("#mx_tabpanel_USER_SECURITY_TAB").contains("Sauvegarde automatique des messages");
        cy.get("#mx_tabpanel_USER_SECURITY_TAB").contains("Signature croisée");
        cy.get("#mx_tabpanel_USER_SECURITY_TAB").should("not.contain", "Recherche de message");
    });

    it("does not show Labs section", () => {
        cy.get(".mx_UserMenu_userAvatar").click();
        cy.get('[aria-label="Tous les paramètres"]').click();

        // General
        cy.get(".mx_UserSettingsDialog").get("[data-testid='settings-tab-USER_GENERAL_TAB']");
        cy.get(".mx_UserSettingsDialog").get("[data-testid='settings-tab-USER_LABS_TAB']").should("not.exist");
    });
});
