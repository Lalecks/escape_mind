/**
 *
 *  Gestion des objets
 *
 **/

import createTimer from "./components/timer";
import toggleModalCustom from "../layouts/modal";

// Ajout des objets
// Un objet_00 correspond à l'image par défaut
// Un objet_01 correspond à l'image dans la modale
// Un objet_02 correspond à l'état final de l'objet
let object = [
    /* Room 1 */
    ["Cassette", 1, "Il s'agit d'une cassette."],
    ["Coffre_Fort", 1, "Il s'agit d'un coffre fort."],
    ["Jukebox", 1, "Il s'agit d'un jukebox."],
    ["Lecteur", 1, "Il s'agit d'un lecteur."],
    ["Radio", 1, "Il s'agit d'une radio."],
    //["Affiche_Ramdam", 1, "Il s'agit d'une cassette."],
    /* Room 2 */
    ["Lit", 2, "Il s'agit d'un lit double."],
    ["Peluche", 2, "Il s'agit d'une peluche trop chou."],
    ["Bougie", 2, "Il s'agit d'une bougie."],
    ["Puzzle", 2, "Il s'agit d'un puzzle."],
    ["Poster_Robot", 2, "Il s'agit d'un poster."],
    ["Tablette", 2, "Il s'agit d'une tablette éteinte."],
    ["Pile", 2, "Il s'agit de la pile 1."],
    ["Pile", 2, "Il s'agit de la pile 2."],
    ["Pile", 2, "Il s'agit de la pile 3."],
    /* Room 3 */
];

let decor = [
    /* Room 1 */
    ["Led", 1],
    ["Panneau_neon", 1],
    ["Ramdam", 1],
    /* Room 2 */
    ["Etoiles", 2],
];

// Salle actuelle
let actualRoom = 1;

export default function createGame() {
    createRoom();
    createTimer();
}

function createRoom() {
    let parent_obj = document.getElementById("Objects");
    let parent_decor = document.getElementById("Decors");
    // area
    let area = document.getElementById("Area");
    area.className = "Room" + actualRoom;
    let bg = document.createElement("img");
    bg.id = "bg";
    bg.src = "./resources/game/rooms/Room" + actualRoom + ".png";

    // Initialisation des objets de la salle actuelle
    for (let i = 0; i < object.length; i++) {
        if (object[i][1] === actualRoom) {
            let link = document.createElement("div");
            link.id = "link_" + object[i][0];
            //On appelle la classe juste par notation
            link.className = "trigger";

            //Pour les triggers ajoutés en JS
            link.addEventListener("click", function(){
                toggleModalCustom(object[i][0],object[i][2],
                    "./resources/game/objects/image/room" + actualRoom + "/" + object[i][0] + "_01.png")
            });




            // Objet en cours
            let obj = document.createElement("img");
            obj.id = "" + object[i][0];
            obj.src = "./resources/game/objects/image/room" + actualRoom + "/" + object[i][0] + "_00.png";
            obj.className = "hoverable"; // Pour centrer la souris mdr.

            link.appendChild(obj);
            parent_obj.appendChild(link);
        }
    }

    for (let i = 0; i < decor.length; i++) {
        if (decor[i][1] === actualRoom) {
            let link = document.createElement("div");
            link.id = "decor_" + decor[i][0];

            let obj = document.createElement("img");
            obj.id = "" + decor[i][0];
            obj.src = "./resources/game/objects/image/room" + actualRoom + "/" + decor[i][0] + "_00.png";


            link.appendChild(obj);
            parent_decor.appendChild(link);
        }

    }
    area.appendChild(bg);

    //pour sortir de la modale en cliquant dans le vide
    window.addEventListener("click",function(event){
        if (event.target === document.querySelector(".modal")) {
            toggleModalCustom("","","");
        }
    })
}

function endGame(num) {

}
