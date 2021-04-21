/**
 *
 *  MODAL BOX
 *
 * */

/* Inititalisation des variables */
let modal = document.querySelector(".modal");
let content = document.querySelector(".modal-content");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");


export default function toggleModalCustom(titre, description, enigme) {
    /*  Titre de l'objet */
    let titre_html = document.createElement("p");
    titre_html.innerText = titre;
    titre_html.id = "titre_modal";
    /* Description de l'objet */
    let desc_html = document.createElement("p");
    desc_html.innerText = description;
    desc_html.id = "desc_modal";
    /*  Récupération de l'Iframe */

    /* Affichage ou non de la modale */
    if (modal.classList.toggle("show-modal")) {
        /* Ouverture de la modal */
        content.appendChild(titre_html);
        content.appendChild(desc_html);

        if (enigme !== "") {
            content.appendChild(enigme);
        }
        /*  Mettre la vidéo trailer */

        /* Arreter le scrolling de la page */
        document.body.style.position = "fixed";
    } else {
        /* Fermeture de la modal */
        content.removeChild(document.getElementById("titre_modal"));
        content.removeChild(document.getElementById("desc_modal"));

        try {
            content.removeChild(document.getElementById("enigme_modal"));
        } catch (e) {}
        /* Autorisation le scrolling de la page */
        document.body.style.position = "relative";

        /* Stopper la vidéo trailer */

    }

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
