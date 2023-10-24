document.getElementById("submit").addEventListener("click", async () => {

    const domain = document.getElementById("domain").value;

    // Début d'année
    const start = new Date(new Date().getFullYear(), 0, 1).getTime();

    // Fin d'année  
    const end = new Date(new Date().getFullYear(), 11, 31).getTime();

    const history = await chrome.history.search({
        text: domain,
        startTime: start,
        endTime: end
    });

    history.forEach(async item => {
        await chrome.history.deleteUrl({ url: item.url });
    });

    alert("Ok");

});