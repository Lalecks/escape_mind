/*
 * Enigme Poster
 */

export default function Poster() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";
    no_enigma.id = "poster_modal";

    let html = document.getElementById("Poster");

    let bg = document.createElement("img");
    bg.id = "Poster_bg";
    bg.classList = "magnifiedImg";
    bg.src = html.src;

    no_enigma.appendChild(bg);

    document.getElementById('desc_modal').innerHTML = '<a id="button" class="fas fa-search hoverable glass-effect"></a>' + document.getElementById('desc_modal').innerHTML;

    return no_enigma;
}
