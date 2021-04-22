/*
 * Enigme de la radio
 */
import {actualRoom} from "../../room_creation";
import updateInventory from "../inventory";
import toggleModalCustom from "../../../layouts/modal";
import updateObject from "../../room_management";
let url = "./resources/game/room" + actualRoom;
let modal = document.querySelector(".modal-content");

export default function Cassettes(){
    let casettes_enigma = document.createElement("div");
    casettes_enigma.id="enigme_modal";

    let cassettes_html = document.getElementById("Cassettes");

    let cassettes_bg = document.createElement("img");
    cassettes_bg.id="Casettes_bg";
    cassettes_bg.src=cassettes_html.src;

    let cassettes_button = document.createElement("a");
    cassettes_button.className="btn btn-outline-primary hoverable";
    cassettes_button.id="Casettes_button";
    cassettes_button.innerText="Récupérer";
    cassettes_button.onclick = function(){
        updateInventory("Cassette","1");
        toggleModalCustom("","","");
        updateObject("Cassettes");

    };



    casettes_enigma.appendChild(cassettes_bg);
    casettes_enigma.appendChild(cassettes_button);

    return casettes_enigma;
}

