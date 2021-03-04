/**
*
*  MODAL BOX
*
* */

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

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