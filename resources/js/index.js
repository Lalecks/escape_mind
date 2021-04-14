/**
 *
 * Appel du JavaScript
 *
 **/

/*-------- Generic --------*/
require('./generic/jquery-2.1.4.min');

/*--------  Packages --------*/
require('./package/rellax.min');

/*-------- Layouts --------*/
require('./layouts/detecting_mobile');
require('./layouts/mouse');

/*-------- Game --------*/
if (document.getElementById("game-page")) {
    /* Room functionnment */
    require('./game/room_management');
    /* Cinematics */
    require('./game/cinematic');
    require('./game/video_player');
    /* Components */
    require('./game/components/object_modal');
    require('./game/components/zoom');
    // require('./game/fullscreen');
}

/*--------  Web Components --------*/
require('./web_components/loader');
require('./web_components/scrollBar');
require('./web_components/modal'); // Avant custom_packages.js pour fonctionner
require('./web_components/custom_package');
require('./web_components/divers');
