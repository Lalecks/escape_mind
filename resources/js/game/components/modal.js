/**
 *
 *  MODAL BOX
 *
 * */

import {
    invJoueur
} from "../enigma/inventory";
import {
    actualRoom
} from "../room_creation";

import Radio from "../enigma/room1/Radio";
import Cassettes from "../enigma/room1/Cassettes";
import Tablette from "../enigma/room2/Tablette";
import Pile from "../enigma/room2/Pile";
import Lecteur from "../enigma/room1/Lecteur";
import Jukebox from "../enigma/room1/Jukebox";
import Coffre from "../enigma/room1/Coffre";
import magnifier from "./magnifier";
import Peluche from "../enigma/room2/Peluche";
import Bougie from "../enigma/room2/Bougie";
import Defaut from "../enigma/Defaut";
import Poster from "../enigma/room1/Poster";

/* Inititalisation des variables */
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-btn");
let activity = document.querySelector("#Activity");
let inventory = document.querySelector("#Inventory");
let isDisplayed = false;

export default function createModal() {
    console.log("!!! Création/Mise à jour de la modal");
    let trigger = document.querySelectorAll(".trigger");
    let isInit = false;

    /* Verifie s'il existe une classe modal dans la page */
    if (modal && trigger.length > 0) {
        trigger.forEach(n => {
            function trig() {
                toggleModalCustom(n.firstChild.id, n.firstChild.alt);
                isDisplayed = true;
            }
            n.addEventListener("mousedown", trig, false);
        });

        /* Fermeture de la modal en cliquant dans le vide */
        if (!isInit) {
            function close(event) {
                if (event.target === modal && isDisplayed) {
                    isDisplayed = false;
                    toggleModalCustom("", "");
                    document.getElementById("Foley").childNodes.forEach(n => n.remove());
                }
            }
            window.addEventListener("mousedown", close, false);

            if (closeButton) {
                /* Fermeture de la modal avec le btn close */
                function close() {
                    if (isDisplayed) {
                        isDisplayed = false;
                        toggleModalCustom("", "");
                        document.getElementById("Foley").childNodes.forEach(n => n.remove());
                    }
                }
                closeButton.addEventListener("mousedown", close, false);
            }
            isInit = true;
        }
    }

}


function toggleModalCustom(titre, description) {
    // PAGE DE JEU
    if (document.getElementById("game-page")) {

        /* Affichage ou non de la modale */
        if (modal.classList.toggle("show-modal")) {

            clearAll();

            /*  Titre de l'objet */
            let titre_html = document.createElement("span");
            titre_html.innerText = titre;
            titre_html.id = "titre_modal";

            /* Description de l'objet */
            let desc_html = document.createElement("span");
            desc_html.innerText = description;
            desc_html.id = "desc_modal";

            /* Affichage ou non de l'inventaire */
            if (invJoueur.length > 0) {
                inventory.style.display = "";
                document.querySelector(".modal-content").style.top = "39%"; // Decentrer la modale

                let inv_html = createInventory();
                inventory.appendChild(inv_html);

            } else {
                inventory.style.display = "none";
                document.querySelector(".modal-content").style.top = "50%"; // Centrer la modale

            }

            activity.appendChild(titre_html);
            activity.appendChild(desc_html);

            switch (titre) {
                case "Cassettes":
                    activity.appendChild(Cassettes());
                    break;
                case "Radio":
                    activity.appendChild(Radio());
                    break;
                case "Pile1":
                case "Pile2":
                case "Pile3":
                    activity.appendChild(Pile(titre));
                    break;
                case "Lecteur":
                    activity.appendChild(Lecteur());
                    break;
                case "Jukebox":
                    activity.appendChild(Jukebox());
                    break;
                case "Coffre":
                    activity.appendChild(Coffre());
                    break;
                case "Poster":
                    activity.appendChild(Poster());
                    break;
                case "Peluche":
                    activity.appendChild(Peluche());
                    break;
                case "Bougie":
                    activity.appendChild(Bougie());
                    break;
                case "Tablette":
                    activity.appendChild(Tablette());
                    break;
                default:
                    activity.appendChild(Defaut(titre));
            }

            /* LOUPE/Magnifier */
            try {
                let loupe = document.getElementById("button");

                function zoom() {
                    if (loupe.classList.toggle("off")) {
                        magnifier();
                        $('body').prepend('<div class="magnify"></div>');
                    } else {
                        document.querySelectorAll(".magnify").forEach(n => n.remove());
                    }
                }
                loupe.addEventListener("click", zoom, false);
            } catch (e) {}
        } else {
            clearAll();
        }

    } else {
        // HOMEPAGE
        if (modal.classList.toggle("show-modal")) {
            /* Arreter le scrolling de la page */
            document.body.style.position = "fixed";
        } else {
            /* Autorisation le scrolling de la page */
            document.body.style.position = "relative";
        }
    }
}

function clearAll() {
    try {
        activity.removeChild(document.getElementById("titre_modal"));
        activity.removeChild(document.getElementById("desc_modal"));
        let enigmes = document.querySelectorAll(".enigme_modal");
        enigmes.forEach(n => n.remove());
        inventory.querySelectorAll("*").forEach(n => n.remove());
        document.querySelectorAll(".magnify").forEach(n => n.remove());
    } catch (e) {}
}

function createInventory() {
    let objects = document.createElement("div");
    let url = "./resources/game/room" + actualRoom;

    for (let i = 0; i < invJoueur.length; i++) {
        let global_object = document.createElement("div");
        global_object.id = "div_inv_" + invJoueur[i][0];
        global_object.className = "picked";

        if (parseInt(invJoueur[i][1]) > 1) {
            let num = document.createElement("span");
            num.innerText = invJoueur[i][1];
            num.className = "item_number";
            global_object.appendChild(num);
        }

        let nom = document.createElement("p");
        nom.innerText = invJoueur[i][0];

        let object = document.createElement("img");
        object.src = url + "/objects/" + invJoueur[i][0] + "_00.png";
        object.alt = invJoueur[i][0];
        object.className = "hoverable";
        object.id = "inv_" + invJoueur[i][0];

        global_object.appendChild(nom);
        global_object.appendChild(object);
        objects.appendChild(global_object);

    }
    return objects;
}

createModal();
