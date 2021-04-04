/**
*
*  ZOOM
*
* */

const $notdrag = document.getElementsByTagName("img");
const test = document.getElementById("test");
const $zoomable = document.querySelectorAll('.zoomable');
const global = document.getElementById("pjax-container");

//IMAGE NOT DRAGABLE
for (let i = 0; i < $notdrag.length; i++) {
    $notdrag[i].setAttribute('draggable',false);
}

for (let i = 0; i < $zoomable.length; i++) {
    $zoomable[i].addEventListener("click", onMouseClick);
}

//Mettre un objet en avant
function onMouseClick(e){
    $all = document.querySelectorAll("img");

    if (this.style.width !== "100vw"){
        this.style.width="100vw";
        $all.forEach(element => element.style.filter = "brightness(40%) blur(4px)");
        this.style.filter="";
        this.style.zIndex=1000;
        this.style.margin="auto auto auto";
        this.style.display="block";
    } else {
        this.style.position ="";
        this.style.width=""
        $all.forEach(element => element.style.filter = "");
        this.style.zIndex="";
        this.style.display="";
        this.parentNode.style.display="";
        this.parentNode.style.justifyContent="";
        this.parentNode.style.alignItems="";
    }
}
