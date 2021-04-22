// /**
// *
// *  Code js de l'animation de la barre de navigation
// *
// * */
//
// const allItems = document.querySelectorAll(".navbar ul li a");
// const barre = document.getElementById("bar_anim");
//
// window.addEventListener('scroll',() => {
//     const max_scroll = document.documentElement.scrollHeight - window.innerHeight; // Bas de page
//     let scr = window.scrollY;
//     let scrolled = (scr / max_scroll).toPrecision(3);
//     let nb_elem = allItems.length;
//     const home = document.querySelector("#home").clientHeight;
//     const story = document.querySelector("#story").clientHeight;
//     const rank = document.getElementById("rank").clientHeight;
//     const about = document.getElementById("about").clientHeight;
//     const contact = document.getElementById("contact").clientHeight;
//
//     const numitem = Math.floor(scrolled * (nb_elem-1)+(0.1*scrolled)); // Nombres d'éléments
//
//
//
//     /*
//     for (let i = numitem; i <nb_elem; i++){
//         allItems[i].classList.remove("active");
//     }
//     for (let i = 0; i <=numitem; i++){
//         allItems[i].classList.add("active");
//     }*/
//
//     //Modulabilité
//
// if (scr < home) {
//         barre.style.height = "calc("
//             + (scr / (home / (1 / (nb_elem - 1)))) * 100 + "% - "
//             + (scr / (home / (1 / (nb_elem - 1)))) * 19
//             + "% + 19%)";
//     allItems[1].classList.remove("active");
//     }
// else if (scr < story) {
//     allItems[1].classList.add("active");
//         barre.style.height = "calc("
//             + (scr / (story / (1 / (nb_elem - 1)))) * 100 + "% - "
//             + (scr / (story / (1 / (nb_elem - 1)))) * 19
//             + "% + 19%)";
//     }
// //else if (scr < rank) {
// //      barre.style.height = "calc("
// //          + (scr / (rank / (3 / (nb_elem - 1)))) * 100 + "% - "
// //          + (scr / (rank / (3 / (nb_elem - 1)))) * 19
// //          + "% + 19%)";
// //  }else {
// //      barre.style.height = "calc("
// //          + (scr / (about / (4 / (nb_elem - 1)))) * 100 + "% - "
// //          + (scr / (about / (4 / (nb_elem - 1)))) * 19
// //          + "% + 19%)";
// //  }
//
//
//     // if (scr < home) {
//     //          barre.style.height = "calc("
//     //              + (scr / (home / (1 / (nb_elem - 1)))) * 100 + "% - "
//     //              + (scr / (home / (1 / (nb_elem - 1)))) * 19
//     //              + "% + 19%)";
//     // }else
//     // if ((scr-home) < (story)) {
//     //          barre.style.height = "calc("
//     //              + ((scr-home) / (story / (1 / (nb_elem - 1)))) * 100
//     //              + "% + 14%)";
//     //          console.log("home :" + home + "\nstory :" + (story+home) + "\nscr :" + scr);
//     //  }
//
// })
