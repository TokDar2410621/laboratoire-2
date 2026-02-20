const API_BASE_URL: string = "http://localhost:3000";

function getPublications(): Promise<Publication[]> {
    return fetch(API_BASE_URL + "/publications")
        .then(function (response: Response): Promise<Publication[]> {
            return response.json();
        });
}

function getPublication(id: number): Promise<Publication> {
    return fetch(API_BASE_URL + "/publications/" + id)
        .then(function (response: Response): Promise<Publication> {
            return response.json();
        });
}

function getCommentaires(publicationId: number): Promise<Commentaire[]> {
    return fetch(API_BASE_URL + "/commentaires?publicationId=" + publicationId)
        .then(function (response: Response): Promise<Commentaire[]> {
            return response.json();
        });
}

function postPublication(publication: Publication): Promise<Publication> {
    return fetch(API_BASE_URL + "/publications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(publication)
    }).then(function (response: Response): Promise<Publication> {
        return response.json();
    });
}

function postCommentaire(commentaire: Commentaire): Promise<Commentaire> {
    return fetch(API_BASE_URL + "/commentaires", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentaire)
    }).then(function (response: Response): Promise<Commentaire> {
        return response.json();
    });
}
