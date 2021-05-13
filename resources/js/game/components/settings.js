/**
 *
 *  Paramètres du jeu
 *
 * */

export default function settings() {
    /* Affichage/Cacher settings-menu  des settings */
    $('.burger').click(function () {
        // au click du bouton ayant la class burger :
        $(this).toggleClass('burger-open');
        // on ajoute ou enlève la class burger-open au bouton.burger
        $('.settings-menu ').toggleClass('is-open');
        // on ajoute ou enlève la class is-open à la nav.settings-menu 
    });
    $('.settings-menu  ul li a').click(function () {
        // au click d'un des a :
        $('.settings-menu ').removeClass('is-open');
        // on enlève la class is-open à la nav.settings-menu 
        $('.burger').removeClass('burger-open');
        // on enlève la class burger-open au bouton.burger
        // utile pour un one-page, car on ne veut pas que la nav reste ouverte une fois que la page est arrivée au bon endroit
    });

    /* Fermer le settings-menu  des paramètres si vous cliquez en dehors de la DIV */
    let settings  = document.querySelector('.settings-menu ')
    let engrenage = document.querySelector(".fas");
    let game = document.getElementById("Game");

    window.addEventListener('click', function (e) {
        if (document.querySelector(".is-open") && e.target === game) {
            settings .removeClass('is-open');
            $('.burger').removeClass('burger-open');
        }
    })
    
}
