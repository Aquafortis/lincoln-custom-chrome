/*! @preserve
 * Copyright (c) 2019 Aquafortis
 * Licensed under MPL-2.0 (https://github.com/Aquafortis/lincoln-custom-chrome)
 */
function saveOptions(e) {
    e.preventDefault();
    chrome.storage.sync.set({
        widget: document.querySelector("#widget").value
    });
    setTimeout(function() {
        window.close();
    }, 100);
}

function restoreOptions() {

    let keys = [
        "widget"
    ];

    chrome.storage.sync.get(keys, function(res) {
        document.querySelector("#widget").value = res.widget || "Show";
    });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
