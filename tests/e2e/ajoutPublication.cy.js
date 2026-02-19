describe("Formulaire d'ajout de publication", function () {
    beforeEach(function () {
        cy.visit("/ajoutPublication.html");
    });

    it("devrait afficher le formulaire d'ajout", function () {
        cy.get("#formAjout").should("exist");
        cy.get("#titre").should("exist");
        cy.get("#auteur").should("exist");
        cy.get("#contenu").should("exist");
    });

    it("devrait afficher un dialogue jQuery UI de confirmation lors de la soumission", function () {
        cy.get("#titre").type("Publication de test");
        cy.get("#auteur").type("Auteur test");
        cy.get("#contenu").type("Contenu de test pour Cypress");
        cy.get("form button[type='submit']").click();

        cy.get(".ui-dialog").should("be.visible");
        cy.get(".ui-dialog-title").should("contain", "Confirmation");
    });

    it("devrait annuler la soumission en cliquant sur Annuler", function () {
        cy.get("#titre").type("Publication annulée");
        cy.get("#auteur").type("Auteur");
        cy.get("#contenu").type("Contenu");
        cy.get("form button[type='submit']").click();

        cy.get(".ui-dialog").should("be.visible");
        cy.contains(".ui-dialog button", "Annuler").click();

        cy.url().should("include", "ajoutPublication.html");
    });

    it("devrait soumettre la publication et rediriger vers index après confirmation", function () {
        var titre = "Publication Cypress " + Date.now();
        cy.get("#titre").type(titre);
        cy.get("#auteur").type("Cypress Bot");
        cy.get("#contenu").type("Contenu généré par Cypress pour les tests automatisés.");
        cy.get("form button[type='submit']").click();

        cy.get(".ui-dialog").should("be.visible");
        cy.contains(".ui-dialog button", "Confirmer").click();

        cy.url().should("include", "index.html");
        cy.get(".card-title").should("contain", titre);
    });

    it("ne devrait pas être liée depuis la page principale", function () {
        cy.visit("/index.html");
        cy.get("a[href*='ajoutPublication']").should("not.exist");
    });
});
