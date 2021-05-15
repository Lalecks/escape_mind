/**
 *
 *  MODAL BOX
 *
 * */

/* Inititalisation des variables */
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-btn");
let trigger = document.querySelectorAll(".trigger");
let isInit = false;

/* Verifie s'il existe une classe modal dans la page */
if (modal && trigger.length > 0) {
    trigger.forEach(n => {
        function trig() {
            toggleModalCustom(n.firstChild.id, n.firstChild.alt);
            isDisplayed = true;
        }
        n.addEventListener("click", trig, false);
    });

    /* Fermeture de la modal en cliquant dans le vide */
    if (!isInit) {
        function close(event) {
            if (event.target === modal && isDisplayed) {
                isDisplayed = false;
                toggleModalCustom("", "");
            }
        }
        window.addEventListener("click", close, false);

        if (closeButton) {
            /* Fermeture de la modal avec le btn close */
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

function toggleModalCustom() {
    // HOMEPAGE
    if (modal.classList.toggle("show-modal")) {
        /* Arreter le scrolling de la page */
        document.body.style.position = "fixed";
    } else {
        /* Autorisation le scrolling de la page */
        document.body.style.position = "relative";
    }
}
