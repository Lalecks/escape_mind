/*
 *
 * Organisation du jeu
 *
 */

import Toasteer from "./components/notification";
import beforeunload from "./components/window_beforeunload";
import displayCinematic from "./cinematics/cinematic";
import roomTransition from "./room_transition";
import settings from "./components/settings";
import updateGame from "./room_creation";
import toggleVideoPlayer from "./cinematics/video_player";
import notification from "./components/notification";

let avancement = 0;

export default function changeAV(num) {
    if (num === 0) avancement += 1;
    else avancement = num;
}

$(document).ready(function () {
    settings();
    notification();
    // beforeunload();
    // roomTransition();

    let room_done = 5;

    let cinematic = displayCinematic();
    cinematic.addEventListener('ended', function () {
        updateGame();
        notification();
        toggleVideoPlayer();
    });

    function isRoomDone() {
        if (avancement !== room_done) {
            setTimeout(isRoomDone, 1000);
            return;
        } else {
            let modal = document.querySelector(".modal");
            modal.classList.toggle("show-modal");
            updateGame();
        }
    }
    isRoomDone();
});
