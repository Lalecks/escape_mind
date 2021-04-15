/**
*
*  MODAL BOX
*
* */

let modal = document.querySelector(".modal");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");


export default function toggleModal() {
    // Afficher la modale
    modal.classList.toggle("show-modal");
}

//Verifie s'il existe une classe modal dans la page
//Ne fonctionne pas pour les triggers ajoutés en JS
//(cf room_creation l66 & 95)
if (modal && trigger){
    trigger.addEventListener("click", toggleModal);
    //pour sortir de la modale en cliquant dans le vide
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            toggleModal();
        }
    });
}

if (closeButton){
    closeButton.addEventListener("click", toggleModal);
}
