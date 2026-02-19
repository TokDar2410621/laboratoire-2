$(document).ready(function () {
    let allPublications = [];
    function renderPublications(publications) {
        const container = $(".row.g-4");
        container.empty();
        publications.forEach(function (pub) {
            const card = '<div class="col-12 col-lg-4">' +
                '<div class="card h-100 border-2 border-dark overflow-hidden">' +
                '<img src="https://images.unsplash.com/photo-1729188430230-182d9e9c1cb5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="' + pub.titre + '">' +
                '<div class="card-header text-white rounded-0 py-2 px-3">' +
                '<h5 class="card-title m-0 fw-bold">' + pub.titre + '</h5>' +
                '</div>' +
                '<div class="card-body">' +
                '<p class="card-text">' + pub.contenu.substring(0, 150) + '...</p>' +
                '<a href="detailBlog.html?id=' + pub.id + '" class="stretched-link"></a>' +
                '</div>' +
                '</div>' +
                '</div>';
            container.append(card);
        });
    }
    // Charger les publications au chargement de la page
    getPublications().then(function (data) {
        allPublications = data;
        renderPublications(allPublications);
    });
    // Recherche
    $("input[type='text']").on("input", function () {
        const query = $(this).val().toLowerCase();
        const filtered = allPublications.filter(function (p) {
            return p.titre.toLowerCase().includes(query) || p.contenu.toLowerCase().includes(query);
        });
        renderPublications(filtered);
    });
    // Tri
    $("select.form-select").on("change", function () {
        const val = $(this).val();
        let sorted = allPublications.slice();
        if (val === "1") {
            sorted.sort(function (a, b) {
                return new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime();
            });
        }
        else if (val === "2") {
            sorted.sort(function (a, b) {
                return a.titre.localeCompare(b.titre);
            });
        }
        renderPublications(sorted);
    });
});
