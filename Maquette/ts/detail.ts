$(document).ready(function (): void {
    const params: URLSearchParams = new URLSearchParams(window.location.search);
    const publicationId: number = parseInt(params.get("id") || "0");

    if (!publicationId) {
        return;
    }

    // Charger la publication
    getPublication(publicationId).then(function (pub: Publication): void {
        $("#publication-titre").text(pub.titre);
        $("#publication-contenu").text(pub.contenu);
    });

    // Charger les commentaires
    function chargerCommentaires(): void {
        getCommentaires(publicationId).then(function (commentaires: Commentaire[]): void {
            const container: JQuery = $(".comments-list");
            container.empty();

            commentaires.forEach(function (c: Commentaire): void {
                const commentHtml: string = '<div class="d-flex mb-4">' +
                    '<div class="flex-shrink-0">' +
                        '<i class="bi bi-person-square fs-1 text-dark"></i>' +
                    '</div>' +
                    '<div class="flex-grow-1 ms-3">' +
                        '<p class="mb-0 small">' + c.contenu + '</p>' +
                    '</div>' +
                '</div>';
                container.append(commentHtml);
            });
        });
    }

    chargerCommentaires();

    // Soumission d'un commentaire
    $("form").on("submit", function (e: JQuery.Event): void {
        e.preventDefault();
        const contenu: string = $("textarea").val() as string;
        if (!contenu.trim()) return;

        const commentaire: Commentaire = {
            publicationId: publicationId,
            datePublication: new Date().toISOString().split("T")[0],
            contenu: contenu
        };

        postCommentaire(commentaire).then(function (): void {
            $("textarea").val("");
            chargerCommentaires();
        });
    });
});
