/*
 * FIN TEMPORAIRE
 */

import changeAV from "../../game";
import updateInventory from "../gestionInventory";
import addSound from "../../components/sound";

export default function Chateau() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";

    let html = document.getElementById("Chateau_Sable");

    let bg = document.createElement("img");
    bg.id = "Chateau_bg";
    bg.src = html.src;

    no_enigma.addEventListener("click",()=>{
        updateInventory("PhotoTrois", 1);
        addSound("./resources/game/global/inventory.mp3",false);
        setTimeout(function(){
            changeAV(25);
        },1500)
    });

    no_enigma.appendChild(bg);

    return no_enigma;
}
