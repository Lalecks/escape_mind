const allItems = document.querySelectorAll(".navmenu ul li a");

allItems.forEach(item => {
    item.addEventListener('click',function(){
        for (let i = 0; i <allItems.length; i++){
            allItems[i].classList.remove("active");
        }
        this.classList.add("active");
    })

})
