/*-------- Generic --------*/
require('./generic/jquery-2.1.4.min');


/*-------- Game --------*/
if (document.getElementById("game-page")) {
    // require('./game/fullscreen');
    require('./game/cinematic');
    require('./game/zoom');
}

/*--------  Packages --------*/
require('./package/rellax.min');
// require('paper');
// require('./package/simplex-noise.min');

/*-------- Layouts --------*/
require('./layouts/detecting_mobile');
require('./layouts/mouse');
require('./layouts/scrollBar');
if (document.getElementById("game-page")) {
    require('./layouts/game');
}

/*--------  Components --------*/
require('./components/loader');
require('./components/modal'); // Avant custom_packages.js pour fonctionner
require('./components/video_player');
require('./components/custom_package');
