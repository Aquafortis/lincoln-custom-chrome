function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        display: document.querySelector("#display").value
    });
}

function restoreOptions() {

    function setCurrentChoice(res) {
        document.querySelector("#display").value = res.display || "Show";
    }

    var getting = browser.storage.sync.get("display");
    getting.then(setCurrentChoice);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
