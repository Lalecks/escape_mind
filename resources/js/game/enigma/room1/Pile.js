/*
 * Enigme de la radio
 */

import updateInventory from "../inventory";
import updateObject from "../../object";

let used = 0;

export default function Pile(nom_obj) {
    let enigma = document.createElement("div");
    enigma.id = "enigme_modal";
    used = 0;
    let html = document.getElementById(nom_obj);

    let bg = document.createElement("img");
    bg.id = nom_obj + "_bg";
    bg.src = html.src;
    bg.alt = html.id;

    enigma.appendChild(bg);

    if (!used) {
        let button = document.createElement("a");
        button.className = "btn btn-fill-primary hoverable glass-effect btn-animation_glitch";
        button.id = nom_obj + "button";
        button.innerText = "Récupérer";
        button.onclick = function () {
            //empeche le spam click
            updateInventory("Pile", "1");
            updateObject(nom_obj,true);
            let modal = document.querySelector(".modal");
            modal.classList.toggle("show-modal");
            used = 1;
        };
        enigma.appendChild(button);
    }


    return enigma;
}
