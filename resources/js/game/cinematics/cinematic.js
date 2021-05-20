/**
 *
 *  Cinématiques
 *
 **/
import toggleVideoPlayer from "./video_player";


let actualCinematic = 0;
let cin = document.getElementById('Cinematic');
let video = document.getElementById("media-video");
let game = null;

let cinematics = Array('beginning', 'success', 'defeat');

export default function displayCinematic() {
    video.onclick = function () {
        this.play();
    };

    let webm = document.createElement("source");
    webm.id = "webm";
    webm.type = "video/webm";
    webm.src = "./resources/cinematic/" + cinematics[actualCinematic] + ".webm";

    let mp4 = document.createElement("source");
    mp4.id = "mp4";
    mp4.type = "video/mp4";
    mp4.src = "./resources/cinematic/" + cinematics[actualCinematic] + ".mp4";

    let ogg = document.createElement("source");
    ogg.id = "ogg";
    ogg.type = "video/ogg";
    ogg.src = "./resources/cinematic/" + cinematics[actualCinematic] + ".ogv";


    video.addEventListener('ended', function () {
        webm.remove();
        mp4.remove();
        ogg.remove();
        video.removeAttribute("src");
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

    if (actualCinematic === 0 ){
        video.addEventListener('ended', function () {
            toggleVideoPlayer();
        });
    }


    actualCinematic += 1;

    console.log("return" + video);
    return video;
}
