//
// *
// *  Jeu en 3D avec Three.js fixe
// *
// * */

import createTimer from "../game/timer";

// $objects = [["Coffre_Fort",1]];
// $object = new Item();
//                  $object->name = $objects[$item][0];
//                  $object->room = $objects[$item][1];
//
//                  $object->image = "./resources/game/objects/image/room".$objects[$item][1]."/".$objects[$item][0]."_0".($item + 1).".png";
//                  $object->audio = "./resources/game/objects/audio/room".$objects[$item][1]."/".$objects[$item][0]."_0".($item + 1).".mp3";
//
//                  $object->save();
//                  $item+=1;


let objects = [["Coffre_Fort",1,"201,927,201,676,236,647,693,643,722,680,728,932"]];
let actualRoom = 1;

export default function createGame(){
    createRoom();
}

function createRoom(){
    let parent = document.getElementById("Objects");
    let background = document.getElementById("Background");
    let bg = document.createElement("img");
    bg.id="bg";
    bg.style="position:fixed; z-index=0;";
    bg.src="./resources/game/Salle_Tous_Objets.png";


    //INIT OBJETS DE LA SALLE ACTUEL
    for (let i = 0; i<objects.length; i++){
        if (objects[i][1] === actualRoom){
            let a = document.createElement("a");
            a.id= "a_" + objects[i][0];

            a.className="hoverable";

            let obj = document.createElement("img");
            obj.id= "" + objects[i][0];
            obj.src = "./resources/game/objects/image/room" + actualRoom + "/" + objects[i][0] + "_00.png";
            obj.style="width: 520px;position: fixed;left: 200px;top: 645px;";
            obj.className="hoverable";
            obj.href="https://google.fr";

            a.addEventListener("mouseenter",()=>{
                obj.src="./resources/game/objects/image/room" + actualRoom + "/" + objects[i][0] + "_01.png";
                obj.style="width: 520px;position: fixed;left: 200px;top: 442px;";
            })
            a.addEventListener("mouseleave",()=>{
                obj.src="./resources/game/objects/image/room" + actualRoom + "/" + objects[i][0] + "_00.png";
                obj.style="width: 520px;position: fixed;left: 200px;top: 645px;";
            })

            a.appendChild(obj);
            parent.appendChild(a);
        }
    }

    background.appendChild(bg);


}





function endGame(num){

}



//Gestions des salles

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