/*
 * Enigme peluche
 */

export default function Peluche() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";
    no_enigma.id = "peluche_modal";

    let html = document.getElementById("Peluche");

    let bg = document.createElement("img");
    bg.id = "Peluche_bg";
    bg.src = html.src;

    let move = document.createElement("div");
    move.id = "tirette_move";
    let tirette = document.createElement("div");
    tirette.id = "tirette";

    tirette.appendChild(move);

    //mydiv = tirette
    //mydivheader = move

    dragElement(tirette);

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0;
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
            console.log("e clientX :" + e.clientX);
            pos1 = pos2 - e.clientX;
            pos2 = e.clientX;
            // set the element's new position:
            //30 -> 60%
            //if (percent < 41.1 && percent > 30){
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                console.log((((elmnt.offsetLeft - pos1) / e.clientX )*100) + "%");
            //}
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }


    no_enigma.appendChild(tirette);
    no_enigma.appendChild(bg);

    return no_enigma;
}
