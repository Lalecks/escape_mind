/*
 * Enigme de la radio
 */
import {actualRoom} from "../../room_creation";
let url = "./resources/game/room" + actualRoom;

function radio(){
    let radio_enigma = document.createElement("div");
    radio_enigma.id="Radio_enigma";

    let radio_bg = document.createElement("img");
    radio_bg.id="Radio_bg";
    radio_bg.src="";

    let area = document.createElement("div");

    let cursor = document.createElement("span");
    cursor.style="width: 0; height: 0; border-left: 25px solid transparent;"  +
        "border-right: 25px solid transparent; border-bottom: 50px solid #555;";


    area.appendChild(cursor);

    radio_enigma.appendChild(radio_bg);
    radio_enigma.appendChild(area);
}

