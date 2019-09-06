/*! @preserve
 * Copyright (c) 2019 Aquafortis
 * Licensed under MPL-2.0 (https://github.com/Aquafortis/lincoln-custom)
 */
const website = location.href;
const sitemap = "lincolnsentry.com.au/search/products/sitemap";

function setTargets() {
    "use strict";

    if (website.substring(1).match(sitemap)) {
        let section = document.getElementsByClassName("lsSitemap");
        if (section.length) {
            for (let s = 0; s < section.length; s++) {
                section[s].setAttribute("id", "legible");
            }
        }
    }

    if (website.substring(1).match(sitemap)) {
        window.addEventListener("mouseover", () => {
            let anchors = document.getElementById("legible")
                .getElementsByTagName("a");
            if (anchors.length) {
                for (let a = 0; a < anchors.length; a++) {
                    anchors[a].setAttribute("target", "_blank");
                }
            }
        });
    }
}

function chatWidget() {
    "use strict";

    chrome.storage.sync.get(["widget"], function(res) {
        let widget = "Show";
        if (res.widget) {
            widget = res.widget;
        }
        if (widget == "Hide") {
            document.getElementById("chat-widget-container")
                .style.display = "none";
        }
    });
}

window.addEventListener("load", () => {
    setTargets();
    chatWidget();
});
