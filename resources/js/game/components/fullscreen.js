//FULLSCREEN GESTION

let FS_elem = document.getElementById("fullscreen");
let FS_message = null;
let FS_button = null;
let FS = 0;

window.addEventListener('load', function(){
    FS_message = document.createElement("p");
    FS_message.id="fs_message";
    FS_message.innerText="Vous devez être en plein écran ou grand écran pour pouvoir jouer !";

    FS_elem.appendChild(FS_message);


    FS_button = document.createElement("button");
    FS_button.id="fs_button";
    FS_button.innerHTML="Passer en plein écran (F11)";
    FS_button.className="btn btn-outline-primary hoverable glass-effect btn-animation_glitch";

    FS_elem.appendChild(FS_button);

    if (FS_button) {
        FS_button.addEventListener("click", function() {
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            }
        })
    }

    if(screen.width === window.innerWidth){
        showContent();
    }else {
        hideContent();
    }
});


window.addEventListener('resize', function(){
    if(screen.width === window.innerWidth){
        showContent();
    }else {
        hideContent();
    }
});

function hideContent(){
    document.getElementById("content").style.transition="opacity 0s";
    document.getElementById("content").style.opacity="0";
    FS_elem.style.opacity="100";
    FS_elem.style.display="";
}

function showContent(){
    document.getElementById("content").style.transition="opacity 2s";
    document.getElementById("content").style.opacity="100";
    FS_elem.style.opacity="0";
    FS_elem.style.display="none";
}



