/**
*
*  LOADER
*
* */
/*
function wait(){
    setTimeout(function(){
        document.getElementById("loader").style.display="none";
    },2000);
}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("loader").style.opacity="100";
});


//Fait disparaitre le loader et apparaitre le site une fois que le html et le design sont chargés.
window.addEventListener('load', () => {
    document.getElementById("loader").style.transition="opacity 2s linear";
    document.getElementById("loader").style.opacity="0";
    document.getElementById("toload").style.transition="opacity 2s linear";
    document.getElementById("toload").style.opacity="100";
    document.getElementById("souris").style.opacity="100";
    wait();

});
*/

window.addEventListener('load', () => {
    document.getElementById("content").style.opacity="100";
});

;(function(){
    function id(v){ return document.getElementById(v); }
    function loadbar() {
        var ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0,
            tot = img.length;
        if(tot == 0) return doneLoading();

        function imgLoaded(){
            c += 1;
            var perc = ((100/tot*c) << 0) +"%";
            prog.style.width = perc;
            stat.innerHTML = "Loading "+ perc;
            if(c===tot) return doneLoading();
        }
        function doneLoading(){
            ovrl.style.opacity = 0;
            setTimeout(function(){
                ovrl.style.display = "none";
            }, 1200);
        }
        for(var i=0; i<tot; i++) {
            var tImg     = new Image();
            tImg.onload  = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src     = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());
