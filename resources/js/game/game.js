/*
 *
 * Organisation du jeu
 *
 */

import displayCinematic from "./cinematics/cinematic";
import settings from "./components/settings";
import updateGame from "./room_creation";
import beforeunload from "./components/window_beforeunload";

let avancement = 0;
let room_done = 5;

export default function changeAV(num) {
    if (num === 0) avancement += 1;
    else avancement = num;

    isRoomDone();
}

$(document).ready(function () {
    settings();
    //beforeunload();

    let cinematic = displayCinematic();
    cinematic.addEventListener('ended',  uptG);

    function uptG(){
        updateGame();
        cinematic.removeEventListener('ended',  uptG);
    }

    isRoomDone();
});

function isRoomDone() {
    if (avancement%room_done === 0 && avancement!==0) {
            updateGame();
    }
}
