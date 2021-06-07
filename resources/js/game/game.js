/*
 *
 * Organisation du jeu
 *
 */

import displayCinematic from "./cinematics/cinematic";
import settings from "./components/settings";
// import beforeunload from "./components/window_beforeunload";
import updateGame from "./room_creation";

let avancement = 0;

export default function changeAV(num) {
    if (num === 0) avancement += 1;
    else avancement = num;

    isRoomDone();
}

$(document).ready(function () {
    document.getElementById("Result").style.display = "none";
    settings();
    // beforeunload();

    let cinematic = displayCinematic(0);
    cinematic.addEventListener('ended', uptG);

    function uptG() {
        updateGame(false);
        cinematic.removeEventListener('ended', uptG);
    }
    isRoomDone();
});

function isRoomDone() {
    switch (avancement) {
        case 5:
        case 15:
        case 25:
            updateGame(false);
            break;
        case -1:
            updateGame(true);
            break;
        default:
    }
}
