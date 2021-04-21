/*
 * Enigme de la radio
 */
import {actualRoom} from "../../room_creation";
let url = "./resources/game/room" + actualRoom;
let modal = document.querySelector(".modal-content");

export default function Cassettes(){
    let casettes_enigma = document.createElement("div");
    casettes_enigma.id="enigme_modal";

    let radio_bg = document.createElement("img");
    radio_bg.id="Radio_bg";
    radio_bg.src="./resources/game/room" + actualRoom + "/enigma/Radio/Radio_00.png";

    casettes_enigma.appendChild(radio_bg);

    return casettes_enigma;
}

