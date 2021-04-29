/**
 *
 * Appel du JavaScript
 *
 **/

/*-------- Generic --------*/
require('./generic/jquery-2.1.4.min');

/*--------  Packages --------*/
if (document.getElementById("home-page")) {
    require('./package/rellax.min');
    var rellax = new Rellax('.rellax', {
        breakpoints: [576, 768, 1201]
    });
}
/*-------- Layouts --------*/
require('./layouts/loader');
require('./layouts/detecting_mobile');


/*-------- Game --------*/
if (document.getElementById("game-page")) {
    require('./game/game.js');
    /* Room functionnment */
    /* Cinematics */
    require('./game/video_player');
    /* Components */
} else {
    // Avant custom_packages.js pour fonctionner
    require('./layouts/modal');
    require('./layouts/mouse');
}

/*--------  Web Components --------*/
require('./web_components/scrollBar');
require('./web_components/custom_package');
require('./web_components/divers');


