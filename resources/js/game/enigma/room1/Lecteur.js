/*
 * Enigme du lecteur
 */

import updateInventory from "../gestionInventory";
import updateObject from "../../object";
import addSound from "../../components/sound";

let isItIn = false;
let first_try = true;

export default function Lecteur() {
    let enigma = document.createElement("div");
    enigma.classList = "enigme_modal";
    enigma.id = "lecteur_modal";

    let html = document.getElementById("Lecteur");

    let bg = document.createElement("img");
    bg.id = "Radio_bg";
    bg.src = html.src;

    enigma.appendChild(bg);

    if (!isItIn) {
        /* Verifie s'il y a une cassette dans l'inventaire */
        let cassette = null;
        try {
            cassette = document.getElementById("inv_Cassette");
        } catch (e) {}

        if (cassette !== null) {
            cassette.addEventListener("click", () => {
                updateObject("Lecteur", 0);
                updateInventory("Cassette", false)
                isItIn = true;
                controlMusic(bg, enigma);
                addSound("./resources/game/room2/audios/Chanson_en_boucle.mp3", false);
            })
        }
    } else {
        //SI LA CASSETTE EST DEDANS
        controlMusic(bg, enigma);
    }
    return enigma;
}

function controlMusic(bg, enigma) {
    bg.src = "./resources/game/room1/objects/Lecteur_01.png";

    let div_but = document.createElement("div");
    div_but.id = "div_buttons";

    /* Musique */
    let musique = document.createElement("audio");
    musique.id = "audio_Les_petits_bateaux";
    musique.className = "Music";
    musique.hidden = true;
    musique.autoplay = false;
    musique.volume = 1;
    document.getElementById("Music").appendChild(musique);

    let controls = ["stop", "previous", "reverse", "play", "next", "record"];
    let previous_case = 0;

    for (let i = 0; i < 6; i++) {
        let but = document.createElement("button");
        but.id = "Lecteur_" + controls[i];
        but.alt = "Boutton " + controls[i];
        but.href = "#";
        but.classList = "Lecteur_button hoverable";

        switch (i) {
            case 0:
                but.addEventListener("click", () => {
                    (!musique.paused) ? musique.pause(): null;
                    previous_case = 0;
                })
                break;
            case 2:
                but.addEventListener("click", () => {
                    if (previous_case !== 2) musique.src = "./resources/game/room1/audios/Les_petits_bateaux_01.mp3";
                    (!musique.paused) ? musique.pause(): musique.play();
                    previous_case = 2;
                })
                break;
            case 3:
                but.addEventListener("click", () => {
                    if (previous_case !== 3) musique.src = "./resources/game/room1/audios/Les_petits_bateaux_00.mp3";
                    (!musique.paused) ? musique.pause(): musique.play();
                    previous_case = 3;
                })
                break;
            default:
        }
        div_but.appendChild(but);
    }
    enigma.appendChild(div_but);
}
