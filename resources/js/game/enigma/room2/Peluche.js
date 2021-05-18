/*
 * Enigme peluche
 */

import updateInventory from "../inventory";
import updateObject from "../../object";
import changeAV from "../../game";
import {isMobile} from "../../../layouts/detecting_mobile";
let already_used = false;

export default function Peluche() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";
    no_enigma.id = "peluche_modal";

    let html = document.getElementById("Peluche");

    let bg = document.createElement("img");
    bg.id = "Peluche_bg";
    bg.src = html.src;

    if (!already_used){

        let move = document.createElement("div");
        move.id = "tirette_move";
        let tirette = document.createElement("div");
        tirette.id = "tirette";
        tirette.classList = "hoverable";

        tirette.appendChild(move);

        //mydiv = tirette
        //mydivheader = move

        dragElement(tirette);

        function dragElement(elmnt) {
            let pos1 = 0,
                pos2 = 0,
                eventType = "";

            if (document.getElementById(elmnt.id + "_move")) {
                /* if present, the header is where you move the DIV from:*/
                $("#" + elmnt.id + "_move").bind('touchstart mousedown', dragMouseDown);
                //document.getElementById(elmnt.id + "_move").addEventListener(eventType,dragMouseDown);
            } else {
                /* otherwise, move the DIV from anywhere inside the DIV:*/
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                let clientX = e.pageX;

                try {
                    let clientX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
                } catch (e){}


                // get the mouse cursor position at startup:
                pos2 = clientX;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                let div = document.getElementById("peluche_modal");
                let clientX = e.pageX;

                try {
                    let clientX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
                } catch (e){}

                pos1 = pos2 - clientX;
                pos2 = clientX;

                let percent = (100 * parseFloat((elmnt.offsetLeft - pos1) / parseFloat($("#peluche_modal").parent().width())));

                if (!already_used){
                    if (percent <= 60 && percent >= 39) {
                        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                    } else if (percent >= 60) {
                        elmnt.style.left = "60%";
                        //ajouter papier dans l'inventaire
                        updateInventory("Papier", 1);
                        updateObject("Peluche",0);
                        //retirer papier peluche
                        already_used=true;

                        //Fermeture de la modal
                        let modal = document.querySelector(".modal");
                        modal.classList.toggle("show-modal");
                        //lancer voix qui dit trouvé un papier
                        //lancer musique
                    } else {
                        reset();
                    }
                }

                window.removeEventListener('resize',reset);
                window.addEventListener('resize', reset);

                function reset(){
                    elmnt.style.left = "";
                }
            }

            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
        no_enigma.appendChild(tirette);

    }

    no_enigma.appendChild(bg);

    return no_enigma;
}
