/**
 *
 *  Gestion des objets
 *
 **/

import createTimer from "./components/timer";
import cursorModule from "../layouts/mouse";
import updateInventory, {
    invJoueur
} from "./enigma/inventory";
import createModal from "./components/modal";

// Ajout des objets
// Un objet_00 correspond à l'image par défaut
// Un objet_01 correspond à l'image dans la modale
// Un objet_02 correspond à l'état final de l'objet
let object = [
    /* Room 1 */
    ["Cassettes", 1, ""],
    ["Coffre", 1, ""],
    ["Jukebox", 1, ""],
    ["Lecteur", 1, ""],
    ["Radio", 1, ""],
    ["Poster", 1, "Oh, Ramdam fait un nouvel événement !"],
    /* Room 2 */
    ["Peluche", 2, "Quelle jolie peluche."],
    ["Bougie", 2, ""],
    ["Puzzle", 2, ""],
    ["Poster_Robot", 2, ""],
    ["Tablette", 2, "Cette tablette semble éteinte."],
    ["Pile1", 2, ""],
    ["Pile2", 2, ""],
    ["Pile3", 2, ""],
    ["Oiseaux", 2,""],
    ["PieceDeux", 2,""],
    ["PieceTrois", 2,""],
    /* Room 3 */
    ["Bouchon", 3, ""],
    ["Chateau_Sable", 3, ""],
    ["Clef", 3, ""],
    ["Coffre_Tresor", 3, ""],
    ["Baleine", 3, ""],
    ["Canard", 3, ""],
    ["Poulpe", 3, ""],
    ["Bateau_Pirate", 3, ""],
    ["Bouteille_Verre", 3, ""],
    ["Bouteille_Oxygene", 3, ""],
];

let decor = [
    /* Room 1 */
    ["Led", 1],
    ["Panneau", 1],
    ["Panneau_neon", 1],
    ["Ramdam", 1],
    ["Big_Vinyl", 1],
    ["Little_Vinyl", 1],
    ["Guitare", 1],
    /* Room 2 */
    ["Etoiles", 2],
    ["Bureau", 2],
    ["Crayons", 2],
    ["Dessin", 2],
    ["Marelle", 2],
    ["Lit", 2],
    /* Room 3 */
    ["Tas_Sable", 3],
    ["Robinet", 3],
    ["Bulle", 3],
    ["Crabe", 3],
    ["Seau", 3],
    ["Coquille", 3],
    ["Pagure", 3],
];


/* Initialisation des variables */
let actualRoom = 0; // Salle actuelle
let nbRoom = 5;
let url = "";

export {
    actualRoom as actualRoom
};

/* Gestion du jeu */
export default function updateGame() {
    actualRoom += 1;
    url = "./resources/game/room" + actualRoom;

    if (actualRoom === 1) {
        createRoom();
        createTimer();
    } else if (actualRoom >= nbRoom) {
        deleteRoom();
        //endGame();
    } else {
        try {
            deleteRoom();
        } catch (e) {}

        // Remove inventory sauf le papier
        invJoueur.forEach(objet => {
            for (let i = 0; i < objet[1]; i++) updateInventory(objet[0], 0);
        });
        createRoom();
    }
}

/* Création de la nouvelle salle */
function createRoom() {
    let parent_obj = document.getElementById("Objects");
    let parent_decor = document.getElementById("Decors");

    // area
    let area = document.getElementById("Area");
    area.className = "Room" + actualRoom;

    // area
    let objectInfo = document.getElementById("ObjectInfo");
    objectInfo.className = "Room" + actualRoom;

    let bg = document.createElement("img");
    bg.id = "bg";
    bg.src = url + "/Room" + actualRoom + ".png";
    bg.alt = "Room" + actualRoom;

    // Initialisation des objets de la salle actuelle
    for (let i = 0; i < object.length; i++) {
        if (object[i][1] === actualRoom) {
            let link = document.createElement("div");
            link.id = "link_" + object[i][0];
            link.className = "trigger";

            // Objet en cours
            let obj = document.createElement("img");
            obj.id = "" + object[i][0];
            obj.src = url + "/objects/" + object[i][0].replace(/[0-9]/g, '') + "_00.png";
            obj.className = "hoverable"; // Pour centrer la souris
            obj.alt = "" + object[i][2];

            // /* Bruitage de chaques objets */
            // let audio = document.createElement("audio");
            // audio.class="Foley";
            // audio.hidden=true;
            // audio.autoplay=false;
            // audio.volume=0.5;
            // audio.id="audio_" + object[i][0];
            // audio.src= url + "/audios/" + object[i][0] + "_00.mp3";
            //
            // obj.addEventListener("click", () => {
            //     document.getElementById("Foley").childNodes.forEach(n => n.remove());
            //     document.getElementById("Foley").appendChild(audio);
            //     audio.play();
            // })
            //
            // audio.addEventListener("ended",()=>{
            //     audio.remove();
            // })

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
            obj.src = url + "/decors/" + decor[i][0] + ".png";
            obj.alt = decor[i][0];
            link.appendChild(obj);
            parent_decor.appendChild(link);

        }
    }
    area.appendChild(bg);

    // let audio = document.createElement("audio");
    // audio.id = "audio_room" + actualRoom;
    // audio.class = "Ambiant";
    //audio.muted = true;

    // let source = document.createElement("source");
    // source.src = url + "/audios/room" + actualRoom + ".mp3";
    // source.type = "audio/mpeg";
    //
    // audio.appendChild(source);
    // document.getElementById("Ambiant").appendChild(audio);
    //
    // autoPlay(audio);

    cursorModule();
    createModal();
}

/* Suppression des éléments de la salle lorsqu'on fini celle d'avant */
function deleteRoom() {
    let parent_obj = document.getElementById("Objects");
    let parent_decor = document.getElementById("Decors");
    let bg = document.getElementById("bg");

    let imgToRemove = [];
    imgToRemove.push.apply(imgToRemove, parent_obj.childNodes);
    imgToRemove.push.apply(imgToRemove, parent_decor.childNodes);
    imgToRemove.push.apply(imgToRemove, [bg]);

    imgToRemove.forEach(n => n.remove());
}

// function autoPlay(audio) {
//     window.addEventListener("focus", event => {
//         audio.volume = 0.5;
//         audio.play();
//     });
//
//     window.addEventListener("click", event => {
//         audio.volume = 0.5;
//         audio.play();
//     });
//
//     window.addEventListener("blur", event => {
//         audio.pause();
//     });
// }
