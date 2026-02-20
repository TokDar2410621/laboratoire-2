describe("Ajout de commentaires", function () {
    beforeEach(function () {
        cy.visit("/detailBlog.html?id=1");
    });

    it("devrait avoir un formulaire avec un textarea et un bouton submit", function () {
        cy.get("form textarea").should("exist");
        cy.get("form button[type='submit']").should("exist");
    });

    it("devrait soumettre un nouveau commentaire via l'API", function () {
        var commentText = "Commentaire de test Cypress " + Date.now();
        cy.get("form textarea").type(commentText);
        cy.get("form button[type='submit']").click();

        cy.get(".comments-list").should("contain", commentText);
    });

    it("devrait vider le textarea après la soumission", function () {
        cy.get("form textarea").type("Un commentaire de test");
        cy.get("form button[type='submit']").click();
        cy.get("form textarea").should("have.value", "");
    });
});
