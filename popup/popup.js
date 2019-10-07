/*! @preserve
 * Copyright (c) 2019 Aquafortis
 * Licensed under MPL-2.0 (https://github.com/Aquafortis/lincoln-custom)
 */
const chat = document.getElementById("widget");
const chatOff = "../icons/chat-off-64.png";
const chatOn = "../icons/chat-on-64.png";

function saveOptions(e) {
    e.preventDefault();

    if (chat.value == "Show") {
        chat.value = "Hide";
        chat.setAttribute("src", chatOff);
        localStorage.setItem("status", chatOff);
    } else {
        chat.value = "Show";
        chat.setAttribute("src", chatOn);
        localStorage.setItem("status", chatOn);
    }
    chrome.storage.local.set({
        widget: chat.value
    });
}

function restoreOptions() {
    chrome.storage.local.get(["widget"], function(data) {
        let state = localStorage.getItem("status");
        if (data.widget) {
            chat.setAttribute("src", state);
        } else {
            chat.setAttribute("src", chatOn);
        }
    });
}

function openHomepage() {
    chrome.tabs.update({
        url: "https://www.lincolnsentry.com.au/"
    });
    setTimeout(() => {
        window.close();
    }, 100);
}

function openSitemap() {
    chrome.tabs.update({
        url: "https://www.lincolnsentry.com.au/search/products/sitemap"
    });
    setTimeout(() => {
        window.close();
    }, 100);
}

function choice(random) {
    let index = Math.floor(Math.random() * random.length);
    return random[index];
}

function addFrame() {
    const frame = document.getElementById("frame");
    let sources = [
        "https://www.lincolnsentry.com.au/general-information/latest_releases",
        "https://www.lincolnsentry.com.au/general-information/promotions",
        "https://www.lincolnsentry.com.au/general-information/news-events",
        "https://www.lincolnsentry.com.au/go-rewards"
    ];
    let array = sources;
    let random = choice(array);
    let name = localStorage.getItem("random");
    let source = random;
    if (random !== name) {
        source = random;
        localStorage.setItem("random", source);
    } else {
        array = array.filter(value => value !== name);
        source = choice(array);
        localStorage.setItem("random", source);
    }
    frame.setAttribute("src", source);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("home").addEventListener("click", openHomepage);
document.getElementById("sitemap").addEventListener("click", openSitemap);
document.getElementById("widget").addEventListener("click", saveOptions);
window.addEventListener("load", addFrame);
