describe("Page principale - Chargement des publications", function () {
    beforeEach(function () {
        cy.visit("/index.html");
    });

    it("devrait charger les publications depuis l'API", function () {
        cy.get(".row.g-4 .col-12").should("have.length.at.least", 7);
    });

    it("devrait afficher les titres des publications dans les cartes", function () {
        cy.get(".card-title").first().should("not.be.empty");
    });

    it("devrait afficher un extrait du contenu", function () {
        cy.get(".card-text").first().should("not.be.empty");
    });

    it("devrait avoir des liens vers la page de détail avec un paramètre id", function () {
        cy.get(".row.g-4 a[href*='detailBlog.html?id=']").should("have.length.at.least", 7);
    });

    it("devrait filtrer les publications par recherche", function () {
        cy.get("input[type='text']").type("JavaScript");
        cy.get(".row.g-4 .col-12").should("have.length.at.least", 1);
        cy.get(".card-title").first().should("contain", "JavaScript");
    });

    it("devrait trier les publications par titre", function () {
        cy.get("select.form-select").select("Titre");
        cy.get(".card-title").should("have.length.at.least", 1);
    });
});
