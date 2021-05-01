/*
 * Enigme du Jukebox
 */

export default function Jukebox(){
    let no_enigma = document.createElement("div");
    no_enigma.id="enigme_modal";

    let html = document.getElementById("Jukebox");

    let bg = document.createElement("img");
    bg.id="Radio_bg";
    bg.src=html.src.replace("_00","_01");

    no_enigma.appendChild(bg);

    return no_enigma;
}

