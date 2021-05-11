/*
 * Objets sans enigmes
 */

export default function Defaut(nom_obj){
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";

    let html = document.getElementById(nom_obj);

    let bg = document.createElement("img");
    bg.id="Radio_bg";
    bg.src=html.src;

    no_enigma.appendChild(bg);

    return no_enigma;
}

