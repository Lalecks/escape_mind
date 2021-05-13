/*
 * Enigme du lecteur
 */

import updateInventory from "../inventory";

export default function Lecteur() {
    let enigma = document.createElement("div");
    enigma.classList = "enigme_modal";
    enigma.id = "lecteur_modal";

    let html = document.getElementById("Lecteur");

    let bg = document.createElement("img");
    bg.id = "Radio_bg";
    bg.src = html.src;


    enigma.appendChild(bg);

    let div_but = document.createElement("div");
    div_but.id = "div_buttons";

    let controls = ["play", "reverse", "stop", "rec", "previous", "next"]

    for (let i = 0; i < 6; i++) {
        let but = document.createElement("button");
        but.id = "Lecteur_" + controls[i];
        but.alt = "Boutton " + controls[i];
        but.href = "#";
        but.classList = "Lecteur_button hoverable";

        div_but.appendChild(but);
    }

    enigma.appendChild(div_but);

    /* Verifie s'il y a une cassette dans l'inventaire */
    let cassette = null;
    try {
        cassette = document.getElementById("inv_Cassette");
    } catch (e) {}

    if (cassette !== null) {
        cassette.addEventListener("click", () => {
            alert("Musique : 'Les petits bateaux'");
            updateInventory("Cassette", false)
            let modal = document.querySelector(".modal");
            modal.classList.toggle("show-modal");
        })
    }

    return enigma;
}
