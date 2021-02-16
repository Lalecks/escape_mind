const allItems = document.querySelectorAll(".navmenu ul li a");

window.addEventListener('scroll',() =>{
    const max_scroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / max_scroll).toPrecision(3);
    const numitem = Math.floor(scrolled * (allItems.length-1)+0.05);

    for (let i = 0; i <allItems.length; i++){
        allItems[i].classList.remove("active");
    }
    allItems[numitem].classList.add("active");


})
