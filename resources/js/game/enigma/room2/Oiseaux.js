/*
 * Enigme du Oiseaux
 */

import updateInventory from "../inventory";
import updateObject from "../../object";

let taken = false;

export default function Oiseaux() {
    let enigma = document.createElement("div");
    enigma.classList = "enigme_modal";
    enigma.id = "oiseaux_modal";

    let html = document.getElementById("Oiseaux");

    let bg = document.createElement("img");
    bg.id = "Oiseaux_bg";
    bg.src = html.src.replace("_00", "_01");

    if (!taken) {

        let piece = document.createElement("img");
        piece.id = "Piece1";
        piece.src = "./resources/game/room2/objects/PieceUn_00.png";
        piece.classList = "Piece hoverable";

        enigma.appendChild(piece);

        piece.addEventListener("click", (e) => {
            if (!taken) {
                piece.remove();
                updateInventory("PieceUn", 1);
                updateObject("Oiseaux", 0);
                let modal = document.querySelector(".modal");
                modal.classList.toggle("show-modal");
                taken = true;
            }
        })
    }

    enigma.appendChild(bg);

    return enigma;
}
