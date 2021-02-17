/* Code js de l'animation de la barre de navigation */

const allItems = document.querySelectorAll(".navbar ul li a");
const barre = document.getElementById("bar_anim");

window.addEventListener('scroll',() => {
    const max_scroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / max_scroll).toPrecision(3);
    const numitem = Math.floor(scrolled * (allItems.length-1)+(0.3*scrolled));

    for (let i = numitem; i <allItems.length; i++){
        allItems[i].classList.remove("active");
    }
    for (let i = 0; i <=numitem; i++){
        allItems[i].classList.add("active");
    }

    barre.style.height="calc(" + (scrolled*100).toString() + "% - " + (scrolled*59) + "px)";
})


