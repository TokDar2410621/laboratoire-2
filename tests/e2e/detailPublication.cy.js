describe("Page de détail - Consultation d'une publication", function () {
    beforeEach(function () {
        cy.visit("/detailBlog.html?id=1");
    });

    it("devrait charger le titre de la publication", function () {
        cy.get("#publication-titre").should("not.be.empty");
    });

    it("devrait afficher le bon titre", function () {
        cy.get("#publication-titre").should("contain", "Introduction");
    });

    it("devrait afficher le contenu de la publication", function () {
        cy.get("#publication-contenu").should("not.be.empty");
    });

    it("devrait charger les commentaires de la publication", function () {
        cy.get(".comments-list .d-flex").should("have.length.at.least", 1);
    });

    it("devrait afficher le texte des commentaires", function () {
        cy.get(".comments-list .d-flex p").first().should("not.be.empty");
    });
});
