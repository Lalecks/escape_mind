//
// *
// *  Jeu en 3D avec Three.js fixe
// *
// * */

import createTimer from "../game/timer";

const THREE = require('three')

export default function createRoom(){
    let parent = document.getElementById("Background");
    let img = document.createElement("img");
    img.useMap="#reg"
    img.id="bg";
    img.src="./resources/game/Salle_Tous_Objets.png";



    let obj ;



    let map = document.createElement("map");
    map.name="reg";
    map.id="maptest";
    map.innerHTML="<area href=\"#\" class=\"hoverable\" coords=\"201,927,201,676,236,647,693,643,722,680,728,932\" shape=\"poly\">";

    map.addEventListener('mouseenter',()=>{
        bg.src="./resources/game/Salle_Tous_Objets_surl1.png"
    })
    map.addEventListener('mouseleave',()=>{
        bg.src="./resources/game/Salle_Tous_Objets.png"
    })

    parent.appendChild(img);
    parent.appendChild(map);





}



//
// export default class BasicWorldDemo {
//     constructor() {
//         this._Initialize();
//         // createTimer();
//     }
//
//     _Initialize() {
//         this._threejs = new THREE.WebGLRenderer({ antialias: true });
//         this._threejs.setPixelRatio(window.devicePixelRatio);
//         this._threejs.setSize(window.innerWidth, window.innerHeight);
//
//         document.getElementById("Game").appendChild(this._threejs.domElement)
//
//         window.addEventListener('resize', () => {
//             this._camera.aspect = window.innerWidth / window.innerHeight;
//             this._camera.updateProjectionMatrix();
//             this._threejs.setSize(window.innerWidth, window.innerHeight);
//         }, false);
//
//         this._camera = new THREE.PerspectiveCamera();
//         this._scene = new THREE.Scene();
//         const loader = new THREE.TextureLoader();
//         this._scene.background  = loader.load('./resources/game/Salle_Tous_Objets.png');
//
//
//         this._threejs.domElement.id="canvasGame";
//
//         this._RAF();
//     }
//
//
//     _RAF() {
//         requestAnimationFrame(() => {
//             this._threejs.render(this._scene, this._camera);
//             this._RAF();
//         });
//     }
// }

function border(){
    let canvas = document.getElementById("canvasGame");
    if (canvas.getContext){
        let ctx = canvas.getContext('2d');


    }



}




function endGame(num){

}



//Gestions des salles
let actual_room = 1;

let rooms = Array('corridor','radio','children','water');
/*
 * corridor = 0
 * radio = 1
 * children = 2
 * water = 3
 */


function resetAllObjects(){
    for(let i=0;i<rooms.length;i++){
        hideObject(rooms[i]+'.png');
    }
}

function hideObject(id){
    let toHide = document.getElementById(id);
    if (toHide){
        toHide.style.display='none';
    }
}

function showObject(id){
    let toHide = document.getElementById(id);
    if (toHide){
        toHide.style.display='block';
    }
}

function getRoom(){

    return rooms[actual_room];

}

function zoomObject(id){

}
