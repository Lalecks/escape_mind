// Gestion des cinématiques
let actualCinematic = 0;
let cin = document.getElementById('Cinematic');
let game = null;


export default function displayCinematic(){
    let cinematics = Array('Beginning','Success','Defeat');

    let video = document.createElement("video");
    video.id="Video";
    video.width=document.body.clientWidth;
    video.height=document.body.clientHeight;
    video.preload = true;
    video.onclick = function(){
        this.play();
    };

    let webm = document.createElement("source");
    webm.id="webm";
    webm.type="video/webm";
    webm.src="./resources/cinematic/" + cinematics[actualCinematic] + ".webm";

    let mp4 = document.createElement("source");
    mp4.id="mp4";
    mp4.type="video/mp4";
    mp4.src="./resources/cinematic/" + cinematics[actualCinematic] + ".mp4";

    let ogg = document.createElement("source");
    ogg.id="ogg";
    ogg.type="video/ogg";
    ogg.src="./resources/cinematic/" + cinematics[actualCinematic] + ".ogv";


    video.addEventListener('ended',function(){
        webm.remove();
        mp4.remove();
        ogg.remove();
        video.remove();
    });


    video.appendChild(webm);
    video.appendChild(mp4);
    video.appendChild(ogg);

    video.style.position="absolute";
    video.style.height="100%";
    video.style.width="100%";

    cin.appendChild(video);

    console.log("!!! Création de la cinématique");

    return video;
}
