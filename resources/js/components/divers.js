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