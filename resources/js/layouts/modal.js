/**
 *
 *  MODAL BOX
 *
 * */

let modal = document.querySelector(".modal");
let content = document.querySelector(".modal-content");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");


export default function toggleModalCustom(titre, description, img) {
    let titre_html = document.createElement("p");
    titre_html.innerText = titre;
    titre_html.id = "titre_modal";

    let desc_html = document.createElement("p");
    desc_html.innerText = description;
    desc_html.id = "desc_modal";

    let img_html = document.createElement("img");
    img_html.src = img;
    img_html.id = "img_modal";

    // Afficher la modale dans le if
    if (modal.classList.toggle("show-modal")) {
        content.appendChild(titre_html);
        content.appendChild(desc_html);
        content.appendChild(img_html);
        // Arreter le scrolling de la page à l'ouverture de la modal
        document.body.style.position = "fixed";
    } else {
        content.removeChild(document.getElementById("titre_modal"));
        content.removeChild(document.getElementById("desc_modal"));
        content.removeChild(document.getElementById("img_modal"));
        // Autorisation le scrolling de la page à la fermeture de la modal
        document.body.style.position = "relative";
    }

}

//Verifie s'il existe une classe modal dans la page
//Ne fonctionne pas pour les triggers ajoutés en JS
//(cf room_creation l66 & 95)
if (modal && trigger) {
    trigger.addEventListener("click", function () {
        toggleModalCustom("", "", "");
    });
    //pour sortir de la modale en cliquant dans le vide
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            toggleModalCustom("", "", "")
        }
    });

}

if (closeButton) {
    closeButton.addEventListener("click", function () {
        toggleModalCustom("", "", "")
    });
}
