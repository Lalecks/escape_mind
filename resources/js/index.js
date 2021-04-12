/*-------- Generic --------*/
require('./generic/jquery-2.1.4.min');


/*-------- Game --------*/
if (document.getElementById("game-page")) {
    // require('./game/fullscreen');
    require('./game/cinematic');
    require('./game/room_management');
    require('./game/zoom');
    // require('./layouts/game');
}

/*--------  Packages --------*/
require('./package/rellax.min');
// require('paper');
// require('./package/simplex-noise.min');

/*-------- Layouts --------*/
require('./layouts/detecting_mobile');

// require('./layouts/scrollBar');
require('./layouts/mouse');


/*--------  Components --------*/
require('./components/loader');
require('./components/modal'); // Avant custom_packages.js pour fonctionner
require('./components/video_player');
require('./components/custom_package');
