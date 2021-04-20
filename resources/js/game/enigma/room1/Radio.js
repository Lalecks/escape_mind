/*
 * Enigme de la radio
 */
import {actualRoom} from "../../room_creation";
let url = "./resources/game/room" + actualRoom;

export default function Radio(){
    let radio_enigma = document.createElement("div");
    radio_enigma.id="enigme_modal";

    let radio_bg = document.createElement("img");
    radio_bg.id="Radio_bg";
    radio_bg.src="./resources/game/room" + actualRoom + "/enigma/Radio/Radio_00.png";

    let area = document.createElement("div");

    let cursor = document.createElement("span");
    cursor.id="enigme_radio_cursor";


    window.addEventListener("mousedown",function(event){
        console.log((event.screenX/window.innerWidth) - 0.26);
    });

    cursor.addEventListener("mousedown",function(event){
        cursor.style.left= (event.screenX/window.innerWidth)-0.25 + "%";
    })






    area.appendChild(cursor);

    radio_enigma.appendChild(radio_bg);
    radio_enigma.appendChild(area);

    return radio_enigma;
}

