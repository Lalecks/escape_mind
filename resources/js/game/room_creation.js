/**
 *
 *  Gestion des objets
 *
 **/

import createTimer from "./timer";

// let objects = [
//     ["Casettes", 1],
//     ["Coffre_Fort", 1],
//     ["Jukebox", 1],
//     ["Lecteur", 1],
//     ["Radio", 1],
//     ["Ramdam", 1]
// ];

let objects = [
    ["Casettes", 1],
    ["Coffre_Fort", 1],
    ["Jukebox", 1],
    ["Lecteur", 1],
    ["Radio", 1],
    ["Ramdam", 1]
];
let actualRoom = 1;

export default function createGame() {
    createRoom();
}

function createRoom() {
    let parent = document.getElementById("Objects");
    let background = document.getElementById("Background");
    let bg = document.createElement("img");
    bg.id = "bg";
    // bg.style="position:fixed; bottom:0px; z-index=0;";
    bg.src = "./resources/game/rooms/Room1.png";


    //INIT OBJETS DE LA SALLE ACTUEL
    for (let i = 0; i < objects.length; i++) {
        if (objects[i][1] === actualRoom) {
            let a = document.createElement("a");
            a.id = "a_" + objects[i][0];

            // a.className = "hoverable";

            let obj = document.createElement("img");
            obj.id = "" + objects[i][0];
            obj.src = "./resources/game/objects/image/room" + actualRoom + "/" + objects[i][0] + "_00.png";
            // obj.style = "position:fixed; left:" + objects[i][2] + "px; bottom: " + objects[i][3] + "px;";
            // obj.className = "hoverable";
            obj.href = "https://google.fr";

            a.addEventListener("mouseenter", () => {
                try {
                    obj.src = "./resources/game/objects/image/room" + actualRoom + "/" + objects[i][0] + "_01.png";
                } catch (e) {
                    console.log(e);
                }

            })
            a.addEventListener("mouseleave", () => {
                obj.src = "./resources/game/objects/image/room" + actualRoom + "/" + objects[i][0] + "_00.png";
            })

            a.appendChild(obj);
            parent.appendChild(a);
        }
    }

    background.appendChild(bg);
}

function endGame(num) {

}
