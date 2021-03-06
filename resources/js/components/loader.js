/**
*
*  LOADER
*
* */

function wait(){
    setTimeout(function(){
        document.getElementById("loader").style.display="none";
    },2000);
}

console.log()

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
