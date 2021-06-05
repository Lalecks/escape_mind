/**
 *
 *  Cinématiques
 *
 **/
import toggleVideoPlayer from "./video_player";

let cin = document.getElementById('Cinematic');
let video = document.getElementById("media-video");
let game = null;

let cinematics = Array('beginning', 'success', 'defeat');

export default function displayCinematic(num) {

    video.onclick = function () {
        let play = document.getElementById("play");
        if (play.className === "hoverable fas fa-pause") {
            this.pause();
            play.className = "hoverable fas fa-play";
        } else {
            this.play();
            play.className = "hoverable fas fa-pause";
        }

    };

    video.ondblclick = function () {
        this.currentTime = 94;
    };

    let controls = document.getElementById("controls");
    let souris = document.getElementById("souris");

    video.addEventListener("mousemove",dynamicBlur);

    function dynamicBlur(){
        controls.style.transition="opacity 0s";
        controls.style.opacity="100";
        setTimeout(function(){
            controls.style.transition="opacity 2s";
            controls.style.opacity = "0";
        },500);

    }

    video.muted = false;

    let webm = document.createElement("source");
    webm.id = "webm";
    webm.type = "video/webm";
    webm.src = "./resources/cinematic/" + cinematics[num] + ".webm";

    let mp4 = document.createElement("source");
    mp4.id = "mp4";
    mp4.type = "video/mp4";
    mp4.src = "./resources/cinematic/" + cinematics[num] + ".mp4";

    let ogg = document.createElement("source");
    ogg.id = "ogg";
    ogg.type = "video/ogg";
    ogg.src = "./resources/cinematic/" + cinematics[num] + ".ogv";


    video.addEventListener('ended', function () {
        webm.remove();
        mp4.remove();
        ogg.remove();
        video.removeAttribute("src");
        video.removeEventListener("mousemove",dynamicBlur);
        video.load();
    });

    video.appendChild(webm);
    video.appendChild(mp4);
    video.appendChild(ogg);

    video.style.position = "absolute";
    video.style.height = "100%";
    video.style.width = "100%";

    cin.appendChild(video);

    toggleVideoPlayer();

    if (num === 0) {
        video.addEventListener('ended', endVideo);
    }

    function endVideo(){
        toggleVideoPlayer();
        setTimeout(function(){
            controls.style.transition="opacity 0s";
            controls.style.opacity="100";
        },2500);
        video.removeEventListener('ended', endVideo);
    }

    return video;
}
