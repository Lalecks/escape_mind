/**
*
*  Tester les scripts
*
* */

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


