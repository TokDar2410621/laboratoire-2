$(document).ready(function () {
    // Initialiser le dialogue jQuery UI
    $("#confirmDialog").dialog({
        autoOpen: false,
        modal: true,
        title: "Confirmation",
        buttons: {
            "Confirmer": function () {
                $(this).dialog("close");
                envoyerPublication();
            },
            "Annuler": function () {
                $(this).dialog("close");
            }
        }
    });
    // Ouvrir le dialogue lors de la soumission du formulaire
    $("#formAjout").on("submit", function (e) {
        e.preventDefault();
        $("#confirmDialog").dialog("open");
    });
    function envoyerPublication() {
        const publication = {
            titre: $("#titre").val(),
            auteur: $("#auteur").val(),
            datePublication: new Date().toISOString().split("T")[0],
            contenu: $("#contenu").val()
        };
        postPublication(publication).then(function () {
            window.location.href = "index.html";
        });
    }
});
