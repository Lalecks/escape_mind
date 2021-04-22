/**
 *
 *  MODAL BOX
 *
 * */

/* Inititalisation des variables */
import {invJoueur} from "../game/enigma/inventory";
import {actualRoom} from "../game/room_creation";

let modal = document.querySelector(".modal");
let content = document.querySelector(".modal-content");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");


export default function toggleModalCustom(titre, description, enigme) {
    //PAGE DE JEU
    if (document.getElementById("game-page")) {

        /* Affichage ou non de la modale */
        if (modal.classList.toggle("show-modal")) {
            /*  Titre de l'objet */
            let titre_html = document.createElement("p");
            titre_html.innerText = titre;
            titre_html.id = "titre_modal";

            /* Description de l'objet */
            let desc_html = document.createElement("p");
            desc_html.innerText = description;
            desc_html.id = "desc_modal";

            if (invJoueur.length > 0){
                let inv_html = createInventory();
                modal.appendChild(inv_html);
            }

            /* Ouverture de la modal */
            content.appendChild(titre_html);
            content.appendChild(desc_html);


            if (enigme !== "") {
                content.appendChild(enigme);
            }


            /* Arreter le scrolling de la page */
            document.body.style.position = "fixed";
        } else {
            /* Fermeture de la modal */
            content.removeChild(document.getElementById("titre_modal"));
            content.removeChild(document.getElementById("desc_modal"));

            try {
                content.removeChild(document.getElementById("enigme_modal"));
                modal.removeChild(document.getElementById("Inventory"));
            }
            catch (e) {}

            /* Autorisation le scrolling de la page */
            document.body.style.position = "relative";


        }
    } else{
        //HOMEPAGE
        if (modal.classList.toggle("show-modal")) {
            document.body.style.position = "fixed";
        }else {
            document.body.style.position = "relative";
        }
    }

}


function createInventory(){

    let inv_html = document.createElement("div");
    inv_html.className="modal-content glass-effect";
    inv_html.id="Inventory";
    let url = "./resources/game/room" + actualRoom;

    for (let i= 0; i < invJoueur.length;i++){
        let global_object = document.createElement("div");
        global_object.id="inv_" + invJoueur[i][0];
        global_object.className="picked";

        if ( parseInt(invJoueur[i][1]) > 1 ){
            let num = document.createElement("p");
            num.innerText= invJoueur[i][1];

            global_object.appendChild(num);
        }


        let nom = document.createElement("p");
        nom.innerText= invJoueur[i][0];

        let object = document.createElement("img");
        object.src = url + "/objects/" + invJoueur[i][0] + "_00.png";

        
        global_object.appendChild(nom);
        global_object.appendChild(object);
        
        inv_html.appendChild(global_object);

    }


    return inv_html;
}

if (modal && trigger) {
    /* Verifie s'il existe une classe modal dans la page */
    // Ne fonctionne pas pour les triggers des objets ajoutés en JS
    // (cf room_creation l66 & 95)
    trigger.addEventListener("click", function () {
        toggleModalCustom("", "", "");
    });
    /* Fermeture de la modal en cliquant dans le vide */
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            toggleModalCustom("", "", "")
        }
    });

}

if (closeButton) {
    /* Fermeture de la modal avec le btn close*/
    closeButton.addEventListener("click", function () {
        toggleModalCustom("", "", "")
    });
}
