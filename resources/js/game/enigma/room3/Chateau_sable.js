/*
 * FIN TEMPORAIRE
 */

import changeAV from "../../game";

export default function Chateau() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";

    let html = document.getElementById("Chateau_Sable");

    let bg = document.createElement("img");
    bg.id = "Chateau_bg";
    bg.src = html.src;

    no_enigma.addEventListener("click",()=>{
        changeAV(25);
    });

    no_enigma.appendChild(bg);

    return no_enigma;
}
