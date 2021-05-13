/*
 * Enigme du Jukebox
 */

export default function Jukebox() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";
    no_enigma.id = "jukebok_modal";

    let html = document.getElementById("Jukebox");

    let bg = document.createElement("img");
    bg.classList = "magnifiedImg";
    bg.id = "Radio_bg";
    bg.src = html.src.replace("_00", "_01");

    no_enigma.appendChild(bg);

    document.getElementById('desc_modal').innerHTML = '<a id="button" class="fas fa-search hoverable glass-effect"></a>' + document.getElementById('desc_modal').innerHTML;

    return no_enigma;
}
