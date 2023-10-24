document.getElementById("submit").addEventListener("click", async () => {

    const domain = document.getElementById("domain").value;

    const history = await chrome.history.search({ text: domain });

    history.forEach(async item => {
        await chrome.history.deleteUrl({ url: item.url });
    });

    alert("Ok");

});