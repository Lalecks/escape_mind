/*
 *
 * Organisation du jeu
 *
 */

import displayCinematic from "./cinematic";
import changeRoom from "./room_creation";
import updateGame from "./room_creation";

let avancement = 0;

export default function changeAV(num){
    if (num===0) avancement+=1;
    else avancement=num;
}

$( document ).ready(function() {

    let room_done = 1;

    // let cinematic = displayCinematic();
    // cinematic.addEventListener('ended',function(){
        updateGame();
    // });

    function isRoomDone(){
        if (avancement !== room_done){
            setTimeout(isRoomDone,1000);
            return;
        } else {
            alert("Salle 1 finie !");
            updateGame();
        }
    }

    isRoomDone();


    /*
    var something=999;
var something_cachedValue=something;

function doStuff() {
    if(something===something_cachedValue) {//we want it to match
        setTimeout(doStuff, 50);//wait 50 millisecnds then recheck
        return;
    }
    something_cachedValue=something;
    //real action
}

doStuff();
     */


});

