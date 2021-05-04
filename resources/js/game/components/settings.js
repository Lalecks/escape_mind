/* Affichage/Cacher menu des settings */
$('.burger').click(function () {
    // au click du bouton ayant la class burger :
    $(this).toggleClass('burger-open');
    // on ajoute ou enlève la class burger-open au bouton.burger
    $('.menu').toggleClass('is-open');
    // on ajoute ou enlève la class is-open à la nav.menu
});
$('.menu ul li a').click(function () {
    // au click d'un des a :
    $('.menu').removeClass('is-open');
    // on enlève la class is-open à la nav.menu
    $('.burger').removeClass('burger-open');
    // on enlève la class burger-open au bouton.burger
    // utile pour un one-page, car on ne veut pas que la nav reste ouverte une fois que la page est arrivée au bon endroit
});

/* Fermer le menu des settings si on clique en dehors de sa DIV */
let menu = document.getElementById('setti')
let engrenage = document.querySelector(".fas");

window.addEventListener('click', function (e) {
    if (document.querySelector(".is-open") && e.target != menu && e.target != engrenage) {
        $('.menu').removeClass('is-open');
        $('.burger').removeClass('burger-open');
    }
})
