// /**
// *
// *  Modal Box
// *
// * */

// var modal = document.getElementById("real-caché");
// var navbar = document.getElementById("navbar");

// $(document).ready(function() {
//     $(".lien-cliquable").each(function() {
//         $(this).click(function() {
//             modal.style.display = "block";
//             $('#content').html($("#" + $(this).attr('data-id')));
//             navbar.style.display = "none";
//             string.normalize([modal]);
//         })
//     });
// });

// // Fermer la modal box
// var span = document.getElementsByClassName("close")[0];
// span.onclick = function() {
//     modal.style.display = "none";
//     string.normalize([modal]);
// }

// // Fermer la modal quand on clique à l'extérieur
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         navbar.style.display = "flex";
//         string.normalize([modal]);
//     }
// }