/*
 *
 * Organisation du jeu
 *
 */

import beforeunload from "./components/window_beforeunload";
import displayCinematic from "./cinematic";
import settings from "./components/settings";
import updateGame from "./room_creation";
import toggleVideoPlayer from "./video_player";

let avancement = 0;

export default function changeAV(num) {
    if (num === 0) avancement += 1;
    else avancement = num;
}

$(document).ready(function () {
    settings();
    beforeunload();

    let room_done = 5;
    let cinematic = displayCinematic();
    cinematic.addEventListener('ended', function () {
        updateGame();
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
