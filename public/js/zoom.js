const $notdrag = document.getElementsByTagName("img");
const test = document.getElementById("test");
const $zoomable = document.querySelectorAll('.zoomable');
const global = document.getElementById("pjax-container");

//IMAGE NOT DRAGABLE
for (let i = 0; i < $notdrag.length; i++) {
    $notdrag[i].setAttribute('draggable',false);
}

for (let i = 0; i < $zoomable.length; i++) {
    $zoomable[i].addEventListener("click", onMouseClick);
}


function onMouseClick(e){
    $all = document.querySelectorAll(".room :not(this)");

    if (this.style.width !== "100vh"){
        //this.style.position ="";
        this.style.width="100vh";

            $all.forEach(element => element.style.filter = "brightness(70%) blur(4px)");

        // document.querySelectorAll("body :not(this)")
        //     .forEach(element => element.style.filter = "brightness(70%) blur(4px)")
    } else {
        this.style.position ="";
        this.style.width=""
        $all.forEach(element => element.style.filter = "");
    }

}
