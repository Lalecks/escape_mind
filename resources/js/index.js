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
require('./layouts/modal'); // Avant custom_packages.js pour fonctionner

/*-------- Game --------*/
if (document.getElementById("game-page")) {
    require('./game/game.js');
    /* Room functionnment */
    // require('./game/room_management');
    /* Cinematics */
    require('./game/video_player');
    /* Components */
    require('./game/components/object_modal');
}

/*--------  Web Components --------*/
require('./web_components/loader');
require('./web_components/scrollBar');
require('./web_components/custom_package');
require('./web_components/divers');
