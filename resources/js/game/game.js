/*
 *
 * Organisation du jeu
 *
 */

import displayCinematic from "./cinematic";
import updateGame from "./room_creation";

let avancement = 0;

export default function changeAV(num) {
    if (num === 0) avancement += 1;
    else avancement = num;
}

$(document).ready(function () {
    let room_done = 1;

    // let cinematic = displayCinematic();
    // cinematic.addEventListener('ended', function () {
        updateGame();
    // });

    function isRoomDone() {
        if (avancement !== room_done) {
            setTimeout(isRoomDone, 1000);
            return;
        } else {
            alert("Salle 1 finie !");
            let modal = document.querySelector(".modal");
            modal.classList.toggle("show-modal");
            updateGame();
        }
    }
    isRoomDone();
});
