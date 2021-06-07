/*
 * Enigme de la radio
 */

import updateInventory from "../gestionInventory";
import updateObject from "../../object";
import addSound from "../../components/sound";

let used = 0;

export default function Cassettes() {
    let enigma = document.createElement("div");
    enigma.classList = "enigme_modal";

    let html = document.getElementById("Cassettes");

    let bg = document.createElement("img");
    bg.id = "Cassettes_bg";
    bg.src = html.src;
    bg.alt = html.id;

    enigma.appendChild(bg);

    if (!used) {
        let button = document.createElement("a");
        button.className = "btn btn-fill-primary hoverable glass-effect btn-animation_glitch";
        button.id = "Casettes_button";
        button.innerText = "Récupérer";
        button.onclick = function () {
            //empeche le spam click
            if (!used) {
                updateInventory("Cassette", "1");
                updateObject("Cassettes", false);
                addSound("./resources/game/global/inventory.mp3", false);
                bg.src = html.src;
                button.innerText = "Déjà récupéré !";
            }
            used = 1;
        };
        enigma.appendChild(button);
    }
    return enigma;
}
