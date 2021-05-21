/*
 * Enigme Poster
 */

import addSound from "../../components/sound";
import {actualRoom} from "../../room_creation";
import Turn from "./Turn";

let first_try = true;

export default function Affiche() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";
    no_enigma.id = "poster_modal";

    let html = document.getElementById("Poster");

    Turn(no_enigma,"./resources/game/room2/audios/Psy.mp3",first_try);

    return no_enigma;
}
