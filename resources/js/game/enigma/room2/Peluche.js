/*
 * Enigme peluche
 */

import updateInventory from "../gestionInventory";
import updateObject from "../../object";

import {
    isMobile
} from "../../../layouts/detecting_mobile";
import addSound from "../../components/sound";
let already_used = false;
let first_try = true;

export default function Peluche() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";
    no_enigma.id = "peluche_modal";

    let html = document.getElementById("Peluche");

    let bg = document.createElement("img");
    bg.id = "Peluche_bg";
    bg.src = html.src;

    if (first_try) {
        try {
            setTimeout(function () {
                addSound("./resources/game/room2/audios/Sacha_Lapin_00.mp3", false);
            }, 100);
        } catch (e) {}

        first_try = false;
    }

    if (!already_used) {

        let move = document.createElement("div");
        move.id = "tirette_move";
        let tirette = document.createElement("div");
        tirette.id = "tirette";
        tirette.classList = "hoverable";

        tirette.appendChild(move);

        dragElement(tirette);

        no_enigma.appendChild(tirette);

        function dragElement(elmnt) {
            let pos1 = 0,
                pos2 = 0;

            if (isMobile) {
                $(elmnt).bind('touchmove mousedown', function (e) {
                    let clientX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.clientX;
                    pos2 = clientX;
                    $(document).bind('touchend mouseup', function () {
                        document.ontouchend = "null";
                        document.ontouchmove = "null";
                    });

                    $(document).bind('touchmove mousemove', function (ev) {
                        let div = document.getElementById("peluche_modal");

                        clientX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.clientX;

                        pos1 = pos2 - clientX;
                        pos2 = clientX;

                        let percent = (100 * parseFloat((elmnt.offsetLeft - pos1) / parseFloat($("#peluche_modal").parent().width())));

                        if (!already_used) {
                            if (percent <= 60 && percent >= 39) {
                                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                            } else if (percent >= 60) {
                                if (!already_used) {
                                    elmnt.style.left = "60%";
                                    updateInventory("Papier", 1);
                                    updateObject("Peluche", 0);
                                    already_used = true;
                                }
                            } else {
                                reset();
                            }
                        }
                        window.removeEventListener('resize', reset);
                        window.addEventListener('resize', reset);

                        function reset() {
                            elmnt.style.left = "";
                        }
                    });
                });
            } else {
                if (document.getElementById(elmnt.id + "_move")) {
                    /* if present, the header is where you move the DIV from:*/
                    document.getElementById(elmnt.id + "_move").onmousedown = dragMouseDown;
                } else {
                    /* otherwise, move the DIV from anywhere inside the DIV:*/
                    elmnt.onmousedown = dragMouseDown;
                }
                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // get the mouse cursor position at startup:
                    pos2 = e.clientX;
                    document.onmouseup = closeDragElement;
                    // call a function whenever the cursor moves:
                    document.onmousemove = elementDrag;
                }

                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // calculate the new cursor position:
                    let div = document.getElementById("peluche_modal");
                    pos1 = pos2 - e.clientX;
                    pos2 = e.clientX;

                    let percent = (100 * parseFloat((elmnt.offsetLeft - pos1) / parseFloat($("#peluche_modal").parent().width())));

                    if (!already_used) {
                        if (percent <= 60 && percent >= 39) {
                            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                        } else if (percent >= 60) {
                            if (!already_used) {
                                elmnt.style.left = "60%";
                                updateInventory("Papier", 1);
                                updateObject("Peluche", 0);
                                already_used = true;
                            }
                        } else {
                            reset();
                        }
                    }

                    window.removeEventListener('resize', reset);
                    window.addEventListener('resize', reset);

                    function reset() {
                        elmnt.style.left = "";
                    }
                }

                function closeDragElement() {
                    /* stop moving when mouse button is released:*/
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }
        }
    }
    no_enigma.appendChild(bg);
    return no_enigma;
}