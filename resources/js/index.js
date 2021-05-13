/**
 *
 * Appel du JavaScript
 *
 **/

/*-------- Generic --------*/
require('./generic/jquery-2.1.4.min');

/*--------  Packages --------*/
require('./package/fontawesome.min');
if (document.getElementById("home-page")) {
    require('./package/rellax.min');
    var rellax = new Rellax('.rellax', {
        breakpoints: [576, 768, 1201]
    });
}
require('./package/gsap.min');

/*-------- Layouts --------*/
require('./layouts/loader');
if (document.getElementById("game-page")) {
    require('./layouts/detecting_mobile');
}

/*-------- Game --------*/
if (document.getElementById("game-page")) {
    require('./game/game.js');
    require('./game/components/settings');
}
// Avant custom_packages.js pour fonctionner
require('./layouts/mouse');
require('./layouts/modal');

// /*--------  Web Components --------*/
// require('./web_components/scrollBar');
// require('./web_components/custom_package');
// require('./web_components/divers');
