const API_BASE_URL = "http://localhost:3000";
function getPublications() {
    return fetch(API_BASE_URL + "/publications")
        .then(function (response) {
        return response.json();
    });
}
function getPublication(id) {
    return fetch(API_BASE_URL + "/publications/" + id)
        .then(function (response) {
        return response.json();
    });
}
function getCommentaires(publicationId) {
    return fetch(API_BASE_URL + "/commentaires?publicationId=" + publicationId)
        .then(function (response) {
        return response.json();
    });
}
function postPublication(publication) {
    return fetch(API_BASE_URL + "/publications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(publication)
    }).then(function (response) {
        return response.json();
    });
}
function postCommentaire(commentaire) {
    return fetch(API_BASE_URL + "/commentaires", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentaire)
    }).then(function (response) {
        return response.json();
    });
}
