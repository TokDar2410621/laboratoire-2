$(document).ready(function (): void {

    // Initialiser le dialogue jQuery UI
    ($("#confirmDialog") as any).dialog({
        autoOpen: false,
        modal: true,
        title: "Confirmation",
        buttons: {
            "Confirmer": function (): void {
                ($(this) as any).dialog("close");
                envoyerPublication();
            },
            "Annuler": function (): void {
                ($(this) as any).dialog("close");
            }
        }
    });

    // Ouvrir le dialogue lors de la soumission du formulaire
    $("#formAjout").on("submit", function (e: JQuery.Event): void {
        e.preventDefault();
        ($("#confirmDialog") as any).dialog("open");
    });

    function envoyerPublication(): void {
        const publication: Publication = {
            titre: $("#titre").val() as string,
            auteur: $("#auteur").val() as string,
            datePublication: new Date().toISOString().split("T")[0],
            contenu: $("#contenu").val() as string
        };

        postPublication(publication).then(function (): void {
            window.location.href = "index.html";
        });
    }
});
