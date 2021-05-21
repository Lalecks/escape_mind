/*
 * Enigme Poster
 */

import addSound from "../../components/sound";
import {actualRoom} from "../../room_creation";
import Turn from "../room1/Turn";
import updateInventory from "../inventory";
import changeAV from "../../game";

let first_try = true;

export default function Affiche() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";
    no_enigma.id = "poster_modal";

    let html = document.getElementById("Poster");

    Turn(no_enigma,"./resources/game/room2/audios/Psy.mp3",first_try);

    setTimeout(function () {
        let back_face = document.getElementById("back_face");
        back_face.addEventListener("click",()=>{
            updateInventory("PhotoDeux",1);
            back_face.style.background = url("/resources/game/room2/objects/Dessin_01.gif");
            changeAV(15);
        });
    }, 1000);


    return no_enigma;
}
