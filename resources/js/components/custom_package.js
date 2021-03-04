/**
*
*  Personnalisation des packages
*
* */

// PJAX
$(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container');
$(document).pjax('[data-pjax-toggle] a, a[data-pjax-toggle]', '#pjax-container', { push: false});

// PARALLAXE //
var rellax = new Rellax('.rellax', {
    // speed: 1,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});