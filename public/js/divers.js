// PJAX
$(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container');
$(document).pjax('[data-pjax-toggle] a, a[data-pjax-toggle]', '#pjax-container', { push: false});

// Loader
// setTimeout(
//     function() 
//     {
//         window.location.replace("{{ $url }}");
//     }, 3000
//     // Rediriger l'utilisateur vers l'endroit où il veut aller après 3 secondes
// ); 

// MODAL BOX
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
        // $('.videoplayer').children('iframe').attr('src', '');
        // document.getElementById('nofocusvideo').player.api('pause');
        // window.parent.CloseModal(window.frameElement);
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

jQuery(document).ready(function($) {
$(function(){
  //Snag the URL of the iframe so we can use it later
  var url = $('.modal-body-music iframe').attr('src');

  $('.close').click(function() {
      $('.modal-body-music').hide();
    $('.modal-body-music iframe').attr('src', '');
  });

  $('.close').click(function() {
    $('.modal-body-music').show();
    $('.modal-body-music iframe').attr('src', url);
  });
});
});


// Retirer la classe en dessous de 600px
$(window).resize(
    function(){
        var width = $(window).width();
        if(width < 600){
            $('body').removeClass('navbar');
        }
    }
)
.resize();//trigger the resize event on page load.

// Mettre en mode paysage
document.addEventListener("orientationchange", function(event){
    switch(window.orientation) 
    {  
        case -90: case 90:
            /* Device is in landscape mode */
            break; 
        default:
            /* Device is in portrait mode */
    }
});
screen.orientation.lock('landscape');
