const allItems = document.querySelectorAll(".navbar ul li a");
const barre = document.getElementById("bar");


window.addEventListener('scroll',() => {
    const max_scroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / max_scroll).toPrecision(3);
    const numitem = Math.floor(scrolled * (allItems.length-1));

    for (let i = 0; i <allItems.length; i++){
        allItems[i].classList.remove("active");
    }
    allItems[numitem].classList.add("active");
    barre.style.height="calc(" + (scrolled*100).toString() + "% - 58px)";

})




//.navbar ul::after{
//     content:"";
//     position:absolute;
//     width:3px;
//     height: calc(55% - 58px);
//     left: 39.5px;
//     top: 0;
//     background: #1b4b72;
//     z-index: -1;
//     margin-top: 29px;
// }


