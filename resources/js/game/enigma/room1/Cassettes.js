/*
 * Enigme de la radio
 */

import updateInventory from "../inventory";
import updateObject from "../../object";

let used = 0;

export default function Cassettes() {


    let enigma = document.createElement("div");
    enigma.id = "enigme_modal";

    let cassettes_html = document.getElementById("Cassettes");

    let bg = document.createElement("img");
    bg.id = "Casettes_bg";
    bg.src = cassettes_html.src;
    bg.alt = bg.id;

    enigma.appendChild(bg);

    console.log(used);
    if (!used) {
        let button = document.createElement("a");
        button.className = "btn btn-fill-primary hoverable glass-effect btn-animation_glitch";
        button.id = "Casettes_button";
        button.innerText = "Récupérer";
        button.onclick = function () {
            updateInventory("Cassette", "1");
            //createModal();
            updateObject("Cassettes");
            used = 1;
        };
        enigma.appendChild(button);
    }


    return enigma;
}
