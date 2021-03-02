// PJAX
$(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container');
$(document).pjax('[data-pjax-toggle] a, a[data-pjax-toggle]', '#pjax-container', { push: false});

// Loader
// setTimeout(
//     function() 
//     {
//         window.location.replace("{{ $url }}");
//     }, 3000
//     // Rediriger l'utilisateur vers l'endroit où il veut aller après 3 secondes
// ); 

// MODAL BOX
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
        document.getElementById('nofocusvideo').player.api('pause');
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);