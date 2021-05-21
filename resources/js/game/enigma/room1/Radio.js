/*
 * Enigme de la radio
 */


import changeAV, {
    AV
} from "../../game";
import addSound from "../../components/sound";
let first_time = true;

export default function Radio() {

    if (first_time) {
        first_time = false;
        addSound('./resources/game/room1/audios/Radio_enigme_00.mp3');
    }

    let radio_enigma = document.createElement("div");
    radio_enigma.classList = "enigme_modal";
    radio_enigma.id = "modal_radio";

    let radio_html = document.getElementById("Radio");

    let radio_bg = document.createElement("img");
    radio_bg.id = "Radio_bg";
    radio_bg.src = radio_html.src;

    let area = document.createElement("div");
    area.className = "slidecontainer";

    let cursor = document.createElement("input");
    cursor.id = "radio_slider";
    cursor.className = "slider hoverable";
    cursor.type = "range";
    cursor.min = "0";
    cursor.max = "100";
    cursor.value = "50";

    let musique = document.createElement("audio");
    musique.id = "audio_Ramdam";
    musique.className = "Music";
    musique.hidden = true;
    musique.autoplay = false;
    musique.volume = 1;
    musique.src = "./resources/game/room1/audios/Radio_01.mp3";
    document.getElementById("Music").appendChild(musique);


    let interferences = document.createElement("audio");
    interferences.id = "audio_Interferences";
    interferences.className = "Foley";
    interferences.hidden = true;
    interferences.autoplay = false;
    interferences.loop = true;
    interferences.volume = 0.3;
    interferences.src = "./resources/game/room1/audios/Interferences_Radio_00.mp3";
    document.getElementById("Foley").appendChild(interferences);

    let actual_val = document.createElement("p");
    actual_val.innerText = (((50 / 105) * 13) + 87.3).toFixed(1) + " Hz";


    cursor.onchange = function () {
        //Correspond à la fréquence à trouver
        if (cursor.value === "36") {
            !interferences.paused ? interferences.pause() : null;
            /* Musique */
            !musique.paused ? musique.volume = 1 : musique.play();
            changeAV(3);
        } else {
            !musique.paused ? musique.volume = 0.00 : null;
            interferences.play();
        }
    }

    cursor.addEventListener('input', function () {
        actual_val.innerText = "" + (((cursor.value / 105) * 13) + 87.3).toFixed(1) + " Hz";
    }, false);

    area.appendChild(cursor);

    radio_enigma.appendChild(radio_bg);
    radio_enigma.appendChild(area);
    radio_enigma.appendChild(actual_val);

    return radio_enigma;
}
