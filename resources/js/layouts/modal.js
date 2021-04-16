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


export default function toggleModalCustom(titre, description, img) {
    // Titre de l'objet
    let titre_html = document.createElement("p");
    titre_html.innerText = titre;
    titre_html.id = "titre_modal";
    // Description de l'objet
    let desc_html = document.createElement("p");
    desc_html.innerText = description;
    desc_html.id = "desc_modal";
    // Image de l'objet
    let img_html = document.createElement("img");
    img_html.src = img;
    img_html.id = "img_modal";
    // Récupération de l'Iframe
    let iframe = document.getElementById('yt_player_iframe');

    // Affichage ou non de la modale 
    if (modal.classList.toggle("show-modal")) {
        /* Ouverture de la modal */
        content.appendChild(titre_html);
        content.appendChild(desc_html);
        content.appendChild(img_html);
        // Arreter le scrolling de la page
        content.appendChild(enigme);
        // Arreter le scrolling de la page à l'ouverture de la modal
        document.body.style.position = "fixed";
        // Mettre la vidéo trailer
        iframe.src = 'https://www.youtube.com/embed/gA03iyI3yEA';
    } else {
        /* Fermeture de la modal */
        content.removeChild(document.getElementById("titre_modal"));
        content.removeChild(document.getElementById("desc_modal"));
        content.removeChild(document.getElementById("img_modal"));
        // Autorisation le scrolling de la page
        content.removeChild(document.getElementById("enigme_modal"));
        // Autorisation le scrolling de la page à la fermeture de la modal
        document.body.style.position = "relative";
        // Stopper la vidéo trailer
        iframe.src = "";
    }

}

if (modal && trigger) {
    /* Verifie s'il existe une classe modal dans la page */
    // Ne fonctionne pas pour les triggers ajoutés en JS
    // (cf room_creation l66 & 95)
    trigger.addEventListener("click", function () {
        toggleModalCustom("", "", "");
    });
    window.addEventListener("click", function (event) {
        /* Fermeture de la modal en cliquant dans le vide */
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
