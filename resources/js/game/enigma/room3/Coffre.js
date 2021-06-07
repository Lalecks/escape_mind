/*
 * Enigme du coffre
 */

import changeAV from "../../game";
import addSound from "../../components/sound";
import updateInventory from "../gestionInventory";
import updateObject from "../../object";

let first_try = true;

export default function Coffre() {
    let html = document.getElementById("Coffre");
    let enigma = document.createElement("span");
    enigma.id = "modal_coffre";
    enigma.classList = "enigme_modal";

    let bg = document.createElement("img");
    bg.id = "Coffre_bg";
    bg.src = html.src;

    /* Verifie s'il y a une clé dans l'inventaire */
    let clef = null;
    try {
        clef = document.getElementById("inv_Clef");
    } catch (e) {}

    if (clef !== null && first_try) {
        clef.addEventListener("click", () => {
            if (first_try) {
                updateInventory("Clef", false)
                first_try = false;
                addSound("./resources/game/room3/audios/Locking.mp3", false);
                setTimeout(function () {
                    updateInventory("PhotoTrois", 1);
                }, 1000)
                setTimeout(function () {
                    changeAV(25);
                }, 1500)
            }
        })
    }
    enigma.appendChild(bg);
    return enigma;
}
