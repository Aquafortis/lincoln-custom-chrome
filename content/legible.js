/*! @preserve
 * Copyright (c) 2019 Aquafortis
 * Licensed under MPL-2.0 (https://github.com/Aquafortis/legible-lincoln)
 */
function setSection() {
    "use strict";

    let section = document.getElementsByClassName("lsSitemap");
    if (section.length) {
        for (let s = 0; s < section.length; s++) {
            section[s].setAttribute("id", "legible");
        }
    }
}

function setTargets() {
    "use strict";

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

function chatWidget() {
    "use strict";

    function gotDisplay(item) {
        let display = "Show";
        if (item.display) {
            display = item.display;
        }
        if (display === "Hide") {
            document.getElementById("chat-widget-container")
                .style.display = "none";
        }
    }
    let getting = browser.storage.sync.get("display");
    getting.then(gotDisplay);
}

window.addEventListener("load", () => {
    setSection();
    setTargets();
    chatWidget();
});
