/*
 * Enigme de la radio
 */
import {actualRoom} from "../../room_creation";
import updateInventory from "../inventory";
import toggleModalCustom from "../../../layouts/modal";
import updateObject from "../../room_management";

let url = "./resources/game/room" + actualRoom;
let modal = document.querySelector(".modal-content");
let used = 0;

export default function Cassettes(){


    let enigma = document.createElement("div");
    enigma.id="enigme_modal";

    let cassettes_html = document.getElementById("Cassettes");

    let bg = document.createElement("img");
    bg.id="Casettes_bg";
    bg.src=cassettes_html.src;

    enigma.appendChild(bg);

    console.log(used);
    if (!used){
        let button = document.createElement("a");
        button.className="btn btn-outline-primary hoverable";
        button.id="Casettes_button";
        button.innerText="Récupérer";
        button.onclick = function(){
            updateInventory("Cassette","1");
            toggleModalCustom("","","");
            updateObject("Cassettes");
            used = 1;
        };
        enigma.appendChild(button);
    }


    return enigma;
}

