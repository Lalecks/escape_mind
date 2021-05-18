/*
 * Enigme tablette
 */

import updateInventory from "../inventory";
let nb_piles = 0;

export default function Tablette() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";

    let html = document.getElementById("Tablette");

    let bg = document.createElement("img");
    bg.id = "Radio_bg";
    bg.classList = "magnifiedImg";
    bg.src = html.src;

    no_enigma.appendChild(bg);

    let piles = null;
    try {
        piles = document.getElementById("inv_Pile");
    } catch (e) {
    }
    // let empalcemen


    // Gerer le nombre de pile + informer le joueur
    // if (piles !== null) {
    //
    //
    //     piles.addEventListener("click", () => {
    //         alert("Un mot apparait");
    //         updateInventory("Papier", false);
    //         updateInventory("Code", true);
    //         let modal = document.querySelector(".modal");
    //         modal.classList.toggle("show-modal");
    //     })
    // }

    return no_enigma;
}
