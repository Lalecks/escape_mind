/*
 * REDUIRE LE TIMER
 */

import changeAV from "../../game";
import createTimer from "../../components/timer";

export default function Bouchon() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";

    let html = document.getElementById("Bouchon");

    let bg = document.createElement("img");
    bg.id = "Bouchon_bg";
    bg.src = html.src;

    no_enigma.addEventListener("click",()=>{
        createTimer("35");
    });

    no_enigma.appendChild(bg);

    return no_enigma;
}
