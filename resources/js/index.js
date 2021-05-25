/**
 *
 * Appel du JavaScript
 *
 **/

import Rellax from "rellax";

/*-------- Generic --------*/
require('./generic/jquery-2.1.4.min');
/*--------  Packages --------*/
require('./package/fontawesome.min');
require('./package/gsap.min');
if (document.getElementById("home-page")) {
    var rellax = new Rellax('.rellax', {
        breakpoints: [576, 768, 1201]
    });
}
/*-------- Layouts --------*/
require('./layouts/loader');
require('./layouts/detecting_mobile');
require('./layouts/mouse');
/*-------- Game --------*/
if (document.getElementById("game-page")) {
    require('./package/pjax');
    $(document).pjax('[data-pjax] a, a[data-pjax]', '#Result');
    $(document).pjax('[data-pjax-toggle] a, a[data-pjax-toggle]', '#Result', { push: false});
    require('./game/game.js');
}
// /*--------  Web Components --------*/
if (document.getElementById("home-page")) {
    require('./web_components/modal');
    require('./web_components/scrollBar');
    // require('./web_components/custom_package');
    // require('./web_components/divers');
}
$(function () {
  $("form").validate();
});