/**
 *
 *  MODAL BOX
 *
 * */

import {
    invJoueur
} from "../enigma/gestionInventory";
import {
    actualRoom
} from "../room_creation";

import Radio from "../enigma/room1/Radio";
import Cassettes from "../enigma/room1/Cassettes";
import Tablette from "../enigma/room2/Tablette";
import Lecteur from "../enigma/room1/Lecteur";
import Jukebox from "../enigma/room1/Jukebox";
import Coffre from "../enigma/room1/Coffre";
import magnifier from "./magnifier";
import Peluche from "../enigma/room2/Peluche";
import Bougie from "../enigma/room2/Bougie";
import Defaut from "../enigma/Defaut";
import Poster from "../enigma/room1/Poster";
import Oiseaux from "../enigma/room2/Oiseaux";
import Puzzle from "../enigma/room2/Puzzle";
import Takable from "../enigma/room2/Takable";
import Affiche from "../enigma/room2/Affiche";
import Chateau from "../enigma/room3/Chateau_sable";
import createInventory from "../enigma/displayInventory";
import Poulpe from "../enigma/room3/Poulpe";

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
            document.body.style.position = "fixed";
            clearAll();

            /*  Titre de l'objet */
            let titre_html = document.createElement("span");
            titre_html.id = "titre_modal";

            switch (titre[titre.length-1]){
                case "n" :
                    titre_html.innerText = titre.replace('Un', '');
                    break;
                case "x" :
                    titre_html.innerText = titre.replace('Deux', '');
                    break;
                case "s" :
                    titre_html.innerText = titre.replace('Trois', '');
                    break;
                default:
                    titre_html.innerText = titre;
            }

            titre_html.innerText = titre_html.innerText.replace('_',' ').replace(/[0-9]/g, '');

            /* Description de l'objet */
            let desc_html = document.createElement("span");
            desc_html.id = "desc_modal";

            let text_html = document.createElement("p");
            text_html.id = "desc_text";
            text_html.innerText = description;

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

            desc_html.appendChild(text_html);
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
                case "PieceDeux":
                case "PieceTrois":
                    activity.appendChild(Takable(titre));
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
                case "Oiseaux":
                    activity.appendChild(Oiseaux());
                    break;
                case "Puzzle":
                    activity.appendChild(Puzzle());
                    break;
                case "Poster_Robot":
                    activity.appendChild(Affiche());
                    break;
                case "Chateau_Sable":
                    activity.appendChild(Chateau());
                    break;
                case "Poulpe":
                    activity.appendChild(Poulpe());
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
            document.body.style.position = "relative";
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
        document.querySelectorAll(".Music").forEach(n => n.remove());
        document.querySelectorAll(".Foley").forEach(n => n.remove());
    } catch (e) {}
}



createModal();
