/**
 *
 *  Gestion des objets
 *
 **/

import createTimer from "./components/timer";

// Ajout des objets
let objects = [
    /* Room 1 */
    ["Casettes", 1],
    ["Coffre_Fort", 1],
    ["Jukebox", 1],
    ["Lecteur", 1],
    ["Radio", 1],
    ["Ramdam", 1],
    /* Room 2 */
    ["Lit", 2],
    ["Peluche", 2],
    ["Bougie", 2],
    ["Puzzle", 2],
    ["Poster_Robot", 2],
    ["Tablette", 2],
    ["Pile", 2],
    ["Pile", 2],
    ["Pile", 2],
    /* Room 3 */
];

// Salle actuelle
let actualRoom = 2;

export default function createGame() {
    createRoom();
}

function createRoom() {
    // Parents du bg
    let parent = document.getElementById("Objects");
    // Background
    let background = document.getElementById("Background");
    background.className = "Room" + actualRoom;
    let bg = document.createElement("img");
    bg.id = "bg";
    bg.src = "./resources/game/rooms/Room" + actualRoom + ".png";

    // Initialisation des objets de la salle actuelle
    for (let i = 0; i < objects.length; i++) {
        if (objects[i][1] === actualRoom) {
            let link = document.createElement("div");
            link.id = "link_" + objects[i][0];
            link.href = "#";
            // link.className = "hoverable";
            // Objet en cours
            let obj = document.createElement("img");
            obj.id = "" + objects[i][0];
            obj.src = "./resources/game/objects/image/room" + actualRoom + "/" + objects[i][0] + "_00.png";
            obj.className = "hoverable"; // Pour centrer la souris mdr.

            // Effet au survol
            // link.addEventListener("mouseenter", () => {
            //     if (actualRoom === 1) {
            //         obj.style = "-webkit-filter: saturate(180%);";
            //     } else if (actualRoom === 2) {
            //         // obj.style = "-webkit-filter: sepia(60%) drop-shadow(5px 5px 5px #222);";
            //     }
            // })
            // link.addEventListener("mouseleave", () => {
            //     obj.style = "";
            // })

            // a.addEventListener("mouseenter", () => {
            //     try {
            //         obj.src = "./resources/game/objects/image/room" + actualRoom + "/" + objects[i][0] + "_01.png";
            //     } catch (e) {
            //         console.log(e);
            //     }
            // })
            // a.addEventListener("mouseleave", () => {
            //     obj.src = "./resources/game/objects/image/room" + actualRoom + "/" + objects[i][0] + "_00.png";
            // })

            link.appendChild(obj);
            parent.appendChild(link);
        }
    }
    background.appendChild(bg);
}

function endGame(num) {

}
