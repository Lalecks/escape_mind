// $(document).ready(function () {
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
// });
