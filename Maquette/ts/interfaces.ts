interface Publication {
    id?: number;
    titre: string;
    auteur: string;
    datePublication: string;
    contenu: string;
}

interface Commentaire {
    id?: number;
    publicationId: number;
    datePublication: string;
    contenu: string;
}
