/*
 * Enigme du lecteur
 */

import updateInventory from "../inventory";

export default function Lecteur() {
    let no_enigma = document.createElement("div");
    no_enigma.id = "enigme_modal";

    let html = document.getElementById("Lecteur");

    let bg = document.createElement("img");
    bg.id = "Radio_bg";
    bg.src = html.src;

    no_enigma.appendChild(bg);

    let cassette = null;
    try {
        cassette = document.getElementById("inv_Cassette");
    } catch (e) {
    }

    if (cassette !== null) {
        cassette.addEventListener("click", () => {
            alert("indice sonore : '11'");
            updateInventory("Cassette",false)
            let modal = document.querySelector(".modal");
            modal.classList.toggle("show-modal");
        })
    }


    return no_enigma;
}

