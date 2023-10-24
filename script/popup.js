document.getElementById("submit").addEventListener("click", async () => {

    const domain = document.getElementById("domain").value;

    const history = await chrome.history.search({ text: domain });

    history.forEach(item => {
        chrome.history.deleteUrl({ url: item.url });
    });

});

// Récupérer l'historique
// chrome.history.search({
//     text: '', // Filtrer par texte (optionnel)
//     startTime: 0, // Début de la recherche (optionnel) 
//     maxResults: 50 // Nombre max de résultats (optionnel)
// }, function (historyItems) {

//     // Afficher l'historique
//     historyItems.forEach(function (historyItem) {

//         console.log('URL: ' + historyItem.url);
//         console.log('Titre: ' + historyItem.title);
//         console.log('Date: ' + historyItem.lastVisitTime);

//     });

// });