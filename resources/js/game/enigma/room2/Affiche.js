/*
 * Enigme Poster
 */

import Turn from "../room1/Turn";
import updateInventory from "../gestionInventory";

let first_try = true;
let isTaken = false;

export default function Affiche() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";
    no_enigma.id = "poster_modal";

    let html = document.getElementById("Poster");

    first_try = Turn(no_enigma, "./resources/game/room2/audios/Psy.mp3", first_try);

    if (!isTaken) {
        setTimeout(function () {
            try {
                let back_face = document.getElementById("back_face");
                back_face.addEventListener("click", () => {
                    if (!isTaken) {
                        updateInventory("PieceTrois", 1);
                        changeBack();
                        isTaken = true;
                    }
                });
            } catch(e){}
        },500);
    } else {
        setTimeout(function () {
            changeBack();
        },500);
    }
    return no_enigma;
}

function changeBack(){
    try {
        let back_face = document.getElementById("back_face");
        back_face.style.background = 'url("./resources/game/room2/objects/Dessin_01.gif")';
        back_face.style.backgroundPosition = "100% 50%";
        back_face.style.backgroundRepeat = "no-repeat";
        back_face.style.backgroundSize = '100% 70%';
    } catch(e){}

}
