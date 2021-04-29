/**
 *
 *  MODAL BOX
 *
 * */

/* Inititalisation des variables */

import {
    invJoueur
} from "../game/enigma/inventory";

import {
    actualRoom
} from "../game/room_creation";

import Radio from "../game/enigma/room1/Radio";
import Cassettes from "../game/enigma/room1/Cassettes";
import Defaut from "../game/enigma/room1/Defaut";

let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-button");
let activity = document.querySelector("#Activity");
let inventory = document.querySelector("#Inventory");
let isDisplayed = false;

export default function createModal() {
    let trigger = document.querySelectorAll(".trigger");
    let isInit = false;

    if (modal && trigger.length > 0) {
        /* Verifie s'il existe une classe modal dans la page */
        trigger.forEach(n => {
            function trig() {
                toggleModalCustom(n.firstChild.id, n.firstChild.alt);
                isDisplayed = true;
            }
            n.addEventListener("click", trig, false);
        });

        if (!isInit) {
            /* Fermeture de la modal en cliquant dans le vide */
            function close(event) {
                if (event.target === modal && isDisplayed) {
                    isDisplayed = false;
                    toggleModalCustom("", "");
                }
            }
            window.addEventListener("click", close, false);

            if (closeButton) {
                /* Fermeture de la modal avec le btn close*/
                function close() {
                    if (isDisplayed) {
                        isDisplayed = false;
                        toggleModalCustom("", "");
                    }
                }
                closeButton.addEventListener("click", close, false);
            }
            isInit = true;
        }
    }


}




function toggleModalCustom(titre, description) {
    //PAGE DE JEU
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

            if (invJoueur.length > 0) {
                let inv_html = createInventory();
                inventory.appendChild(inv_html);
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
                default:
                    activity.appendChild(Defaut(titre));
            }
        } else {
            clearAll();
        }
    } else {
        //HOMEPAGE
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
        activity.removeChild(document.getElementById("enigme_modal"));
        inventory.querySelectorAll("*").forEach(n => n.remove());
    } catch (e) {}
}


function createInventory() {
    let objects = document.createElement("div");
    let url = "./resources/game/room" + actualRoom;

    for (let i = 0; i < invJoueur.length; i++) {
        let global_object = document.createElement("div");
        global_object.id = "inv_" + invJoueur[i][0];
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

        global_object.appendChild(nom);
        global_object.appendChild(object);
        objects.appendChild(global_object);

    }
    return objects;
}
