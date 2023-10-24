// Fonction de suppression des occurences des noms de domaines
document.getElementById("submit").addEventListener("click", async () => {

    // Récupération du nom de domaine provenant du formulaire
    const domain = document.getElementById("domain").value;

    if (domain === '') {
        alert("Champ de saisie vide !!");
    }
    else {
        // Début d'année
        const start = new Date(new Date().getFullYear(), 0, 1).getTime();

        // Fin d'année  
        const end = new Date(new Date().getFullYear(), 11, 31).getTime();

        // Recherche du nom de domaine dans l'historique, 
        // la recherche sur fait sur toute l'année courante d'où la présence des paramètres *startTime* et *endTime*
        const history = await chrome.history.search({
            text: domain,
            startTime: start,
            endTime: end
        });

        if (history.length === 0) {
            // afficher message d'erreur
            alert("Aucune occurrence de ce domaine trouvée");
        } else {

            // Suppression de chaque occurence du nom de domaine
            history.forEach(async item => {
                await chrome.history.deleteUrl({ url: item.url });
            });

            alert("Suppression terminée");

        }
    }

});