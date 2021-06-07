/**
 *
 *  Vidéo player des cinématiques
 *
 **/

let player = (function () { //Namespace todo lo que esta aqui dentro es privado
    let play = document.getElementById("play"),
        audioVolume = document.getElementById("audioVolume"),
        progress = document.getElementById('progressVideo'),
        start = document.getElementById('start'),
        finish = document.getElementById('finish'),
        preload = document.getElementById('preload');

    let mediaPlayer, // global para que los listener sepan el estado a modificar
        currentTrack = "0", // que video se esta reproduciendo ahora.
        videos, videoNodes;

    play.addEventListener("click", (e) => {
        if (mediaPlayer.paused || mediaPlayer.ended) {
            e.target.setAttribute("class", "hoverable fas fa-pause");
            mediaPlayer.play();
        } else {
            mediaPlayer.pause();
            e.target.setAttribute("class", "hoverable fas fa-play");
        }
    });

    audioVolume.addEventListener("click", (e) => {
        if (mediaPlayer.muted) {
            e.target.setAttribute('class', 'hoverable fas fa-volume-up')
            mediaPlayer.muted = !mediaPlayer.muted;
        } else {
            e.target.setAttribute('class', 'hoverable fas fa-volume-mute')
            mediaPlayer.muted = !mediaPlayer.muted;
        }
    });

    function set(video) {
        mediaPlayer.src = video;
    }
    /**
     * @param {*} e
     */
    function handleProgress(e) {
        var minutes = Math.floor(mediaPlayer.currentTime / 60),
            seconds = Math.floor(mediaPlayer.currentTime - minutes * 60),
            x = minutes < 10 ? "0" + minutes : minutes,
            y = seconds < 10 ? "0" + seconds : seconds;

        progress.style.width = Number(this.currentTime / this.duration * 100) + "%";
        // console.log(progress.style.width + " : " + Number(this.currentTime / this.duration * 100) + "%");
        start.textContent = x + " : " + y;
    }

    /**
     *
     * @param {*} event
     */
    function togglePlay(event) {
        event.preventDefault();
        if (mediaPlayer.paused || mediaPlayer.ended) mediaPlayer.play();
        else mediaPlayer.pause();
    }

    /**
     * Create
     * @param {object} itemList
     * @returns un Nodo que representa el objeto siendo pasado
     * Rturns a Node representation of the object
     */
    function create(itemList) {
        var div = document.createElement("div"),
            imageContainer = document.createElement("div"),
            videoIformation = document.createElement("idv"),
            img = document.createElement("img"),
            title = document.createElement('p'),
            duration = document.createElement("span");

        div.setAttribute("id", itemList.id)
        div.setAttribute("class", "video");

        imageContainer.setAttribute("class", "video-imagen")
        img.setAttribute("src", itemList.img);
        imageContainer.appendChild(img);
        div.appendChild(imageContainer);

        videoIformation.setAttribute("class", "video-information");
        title.textContent = itemList.name;
        duration.textContent = itemList.duration;
        videoIformation.appendChild(title);
        videoIformation.appendChild(duration);

        div.appendChild(videoIformation);

        return div;
    }

    function videoIsReady(event) {
        preload.classList.remove('lds-ring');
        mediaPlayer.play();
    }

    function higlight(current, lastTrack) {
        if (lastTrack) {
            videoNodes[lastTrack].classList.remove("playing");
            videoNodes[current].classList.add("playing");
        } else {
            videoNodes[current].classList.add("playing");
        }
        currentTrack = current;
    }

    /************************************
     * xmlHtppRequest del json local
     *************************************/
    function getJSON(url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                callback(data);
            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
            console.error("there was an error")
        };

        request.send();
    }
    /**************************
     * Public
     *******************/
    return {
        init: function () {
            //configura el reproductor por primera vez, previene algun cambio en el css
            mediaPlayer = document.getElementById("media-video");
            mediaPlayer.controls = false;
            mediaPlayer.muted = true;
            //cuando el video pueda reproducirse elimina el preloader css
            mediaPlayer.addEventListener('canplay', videoIsReady)
            mediaPlayer.addEventListener('timeupdate', handleProgress)
            mediaPlayer.addEventListener('click', togglePlay)
        }
    }
})();

export default function toggleVideoPlayer() {
    if (document.getElementById("game-page")) {
        let container = document.getElementById("controls");
        container.classList.toggle("show-player");
    }
}

document.addEventListener(
    "DOMContentLoaded",
    () => {
        player.init();
    },
    false
);
