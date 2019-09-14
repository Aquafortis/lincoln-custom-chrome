/*! @preserve
 * Copyright (c) 2019 Aquafortis
 * Licensed under MPL-2.0 (https://github.com/Aquafortis/lincoln-custom)
 */
const chat = document.getElementById("widget");

function saveOptions(e) {
    e.preventDefault();

    if (chat.value == "Show") {
        chat.value = "Hide";
        chat.setAttribute("src", "../icons/chat-off-32.png");
    } else {
        chat.value = "Show";
        chat.setAttribute("src", "../icons/chat-on-32.png");
    }
    chrome.storage.sync.set({
        widget: chat.value
    });
}

function restoreOptions() {
    let keys = [
        "widget"
    ];
    chrome.storage.sync.get(keys, function(res) {
        chat.value = res.widget || "Show";
    });
}

function openHomepage() {
    chrome.tabs.update({
        url: "https://www.lincolnsentry.com.au/"
    });
    setTimeout(function() {
        window.close();
    }, 100);
}

function openSitemap() {
    chrome.tabs.update({
        url: "https://www.lincolnsentry.com.au/search/products/sitemap"
    });
    setTimeout(function() {
        window.close();
    }, 100);
}

function addFrame() {
    const frame = document.getElementById("latest");
    frame.setAttribute("src",
        "https://www.lincolnsentry.com.au/general-information/latest_releases");
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("home").addEventListener("click", openHomepage);
document.getElementById("sitemap").addEventListener("click", openSitemap);
document.getElementById("widget").addEventListener("click", saveOptions);
window.addEventListener("load", addFrame);
