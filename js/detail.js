$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const publicationId = parseInt(params.get("id") || "0");
    if (!publicationId) {
        return;
    }
    // Charger la publication
    getPublication(publicationId).then(function (pub) {
        $("#publication-titre").text(pub.titre);
        $("#publication-contenu").text(pub.contenu);
    });
    // Charger les commentaires
    function chargerCommentaires() {
        getCommentaires(publicationId).then(function (commentaires) {
            const container = $(".comments-list");
            container.empty();
            commentaires.forEach(function (c) {
                const commentHtml = '<div class="d-flex mb-4">' +
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
    $("form").on("submit", function (e) {
        e.preventDefault();
        const contenu = $("textarea").val();
        if (!contenu.trim())
            return;
        const commentaire = {
            publicationId: publicationId,
            datePublication: new Date().toISOString().split("T")[0],
            contenu: contenu
        };
        postCommentaire(commentaire).then(function () {
            $("textarea").val("");
            chargerCommentaires();
        });
    });
});
