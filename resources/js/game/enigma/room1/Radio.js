/*
 * Enigme de la radio
 */
import {actualRoom} from "../../room_creation";
let url = "./resources/game/room" + actualRoom;
let modal = document.querySelector(".modal-content");

export default function Radio(){
    let radio_enigma = document.createElement("div");
    radio_enigma.id="enigme_modal";

    let radio_bg = document.createElement("img");
    radio_bg.id="Radio_bg";
    radio_bg.src="./resources/game/room" + actualRoom + "/enigma/Radio/Radio_00.png";

    let area = document.createElement("div");
    area.className = "slidecontainer";

    let cursor = document.createElement("input");
    cursor.id="radio_slider";
    cursor.className="slider";
    cursor.type="range";
    cursor.min="1";
    cursor.max="100";
    cursor.value="50";

    cursor.onchange=function(){
        console.log(cursor.value);
        if (cursor.value === "36"){
           alert("gg");
        }

    }

    area.appendChild(cursor);

    radio_enigma.appendChild(radio_bg);
    radio_enigma.appendChild(area);

    return radio_enigma;
}

