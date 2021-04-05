/**
*
*  ZOOM
*
* */

const $notdrag = document.getElementsByTagName("img");
const test = document.getElementById("test");
const $zoomable = document.querySelectorAll('.zoomable');
const global = document.getElementById("pjax-container");

// IMAGE NOT DRAGABLE
for (let i = 0; i < $notdrag.length; i++) {
    $notdrag[i].setAttribute('draggable',false);
}