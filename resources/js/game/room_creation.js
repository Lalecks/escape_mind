/**
 *
 *  Gestion des objets
 *
 **/

import createTimer from "./components/timer";
import cursorModule from "../layouts/mouse";

import createModal from "./components/modal";
import displayCinematic from "./cinematics/cinematic";
import addSound from "./components/sound";
import updateInventory from "./enigma/gestionInventory";
import toggleVideoPlayer from "./cinematics/video_player";



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
    ["Oiseaux", 2, ""],
    ["PieceDeux", 2, ""],
    /* Room 3 */
    ["Bouchon", 3, ""],
    ["Chateau_Sable", 3, ""],
    ["Clef", 3, ""],
    ["Coffre", 3, ""],
    ["Baleine", 3, ""],
    ["Canard", 3, ""],
    ["Poulpe", 3, ""],
    ["Bateau", 3, ""],
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
let nbRoom = 4;
let url = "";


export {
    actualRoom as actualRoom
};

/* Gestion du jeu */
export default function updateGame(fail) {
    actualRoom += 1;
    url = "./resources/game/room" + actualRoom;
    document.body.style.position = "relative";

    if (!fail) {
        if (actualRoom === 1) {
            createRoom();
            createTimer("");
        } else if (actualRoom >= nbRoom) {
            animChangement(true);
            //stopTimer
            let timer = createTimer("");

            setTimeout(function () {
                let cinematic = displayCinematic(1);

                function hideVideo(){
                    if (cinematic.currentTime>=70){
                        cinematic.style.opacity = "0";
                        toggleVideoPlayer();
                        let result = document.getElementById("Result");
                        result.style.display = "";
                        let time = document.getElementById("time_game");
                        let str = timer[0] + timer[1] + ":" + timer[2] + timer[3];

                        time.value = str;

                        document.getElementById("min").innerText = timer[0] + timer[1];
                        document.getElementById("sec").innerText = timer[2] + timer[3];

                        //si qqun essai de changer le code HTML
                        let button = document.getElementById("result_button");
                        button.addEventListener("click", () => {
                            time.value = str;
                        })

                        cinematic.removeEventListener("timeupdate",hideVideo);
                    }
                }
                cinematic.addEventListener("timeupdate",hideVideo);

            }, 2000);

        } else {
            animChangement(false);
        }
    } else {
        //PERDU
        animChangement(true);
        addSound("",true);
        //stopTimer
        setTimeout(function () {
            let cinematic = displayCinematic(2);
            cinematic.addEventListener('ended', uptG);
        },1500)

        function uptG() {
            window.location.replace("../");
            cinematic.removeEventListener('ended', uptG);
        }

    }


    function animChangement(fin) {
        // animate content
        addSound('./resources/game/global/loading.mp3', false);
        setTimeout(function () {
            $('.Game').addClass('animate_content');
            console.log("animation transition");

            // Remove inventory sauf le papier
            updateInventory("All", 0);


            try {
                setTimeout(function () {
                    deleteRoom();
                    if ($(".modal").hasClass("show-modal")) {
                        $(".modal").removeClass("show-modal");
                    }
                    if (!fin){
                        createRoom();
                        setTimeout(function () {
                            if (actualRoom===2) addSound("./resources/game/room2/audios/Chambre.mp3",false);
                            $('.Game').removeClass('animate_content');
                        }, 3000);
                    } else {

                        addSound("",true);
                    }
                }, 1600)
            } catch (e) {}

        }, 900);
    }
}

/* Création de la nouvelle salle */
function createRoom() {

    addSound("./resources/game/room" + actualRoom + "/audios/Ambiance_00.mp3", true);

    let parent_obj = document.getElementById("Objects");
    let parent_decor = document.getElementById("Decors");

    // area
    let area = document.getElementById("Area");
    area.className = "Room" + actualRoom;

    let objectInfo = document.getElementById("ObjectInfo");
    objectInfo.className = "Loupe_Room" + actualRoom;

    let bg = document.createElement("img");
    bg.id = "bg";
    bg.src = url + "/Room" + actualRoom + ".png";
    bg.alt = "Room" + actualRoom;

    // Initialisation des objets de la salle actuelle
    for (let i = 0; i < object.length; i++) {
        if (object[i][1] === actualRoom) {
            let link = document.createElement("div");
            link.id = "link_" + object[i][0];
            link.className = "notif trigger";

            // Objet en cours
            let obj = document.createElement("img");
            obj.id = "" + object[i][0];
            obj.src = url + "/objects/" + object[i][0].replace(/[0-9]/g, '') + "_00.png";
            obj.className = "hoverable"; // Pour centrer la souris
            obj.alt = "" + object[i][2];

            //click sur obj
            link.addEventListener("mousedown", () => {
                switch(object[i][0]){
                    case "Poster_Robot":
                    case "Poster":
                        addSound('./resources/game/global/Affiche.mp3', false);
                        break;
                    case "Coffre":
                        addSound('./resources/game/room1/audios/Coffre_en_bois.mp3', false);
                        break;
                    case "Lecteur":
                    case "Jukebox":
                        addSound('./resources/game/room1/audios/Ouverture_lecteur.mp3', false);
                        break;
                    case "Tablette":
                        addSound('./resources/game/room2/audios/Tablette.mp3',false);
                        break;
                    default:
                        addSound('./resources/game/global/objets.mp3', false);
                }
            })

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
    try {
        imgToRemove.forEach(n => n.remove());
    } catch (e) {}

}
