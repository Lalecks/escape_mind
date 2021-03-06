/**
*
*  MODAL BOX
*
* */

let modal = document.querySelector(".modal");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");

//Verifie s'il existe une classe modal dans la page
if (modal){

    function toggleModal() {
        // Afficher la modale
        modal.classList.toggle("show-modal");

    }
    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
        //  $("header").remove();
        //  document.getElementsByClassName('navbar').style.display = none;
        // $('.videoplayer').children('iframe').attr('src', '');
        //     document.getElementById('nofocusvideo').player.api('pause');
        //     window.parent.CloseModal(window.frameElement);
        //     $("header").style.display = none;
        //     $(".navbar").style.display = none;
        // document.getElementsByClassName(navbar).style.display = none; // Pour cacher
        // document.getElementById(identifiant_de_ma_div).style.display = none;
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

}
