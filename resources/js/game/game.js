/*
 *
 * Organisation du jeu
 *
 */

import displayCinematic from "./cinematic";
import createGame from "./room_creation";

$( document ).ready(function() {
    // let cinematic = displayCinematic();
    // cinematic.addEventListener('ended',function(){
        createGame();
    // });


});

