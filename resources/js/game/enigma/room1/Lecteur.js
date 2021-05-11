/*
 * Enigme du lecteur
 */

import updateInventory from "../inventory";

export default function Lecteur() {
    let enigma = document.createElement("div");
    enigma.classList = "enigme_modal";

    let html = document.getElementById("Lecteur");

    let bg = document.createElement("img");
    bg.id = "Radio_bg";
    bg.src = html.src;
    bg.useMap = "#controls"

    enigma.appendChild(bg);

    let map = document.createElement("map");
    map.name="controls";
    map.id="controls";

    let controls = [["533,308,444,182","play"],["738,307,651,182","reverse"],["238,178,330,309","stop"],["136,183,226,309","rec"],["432,308,342,181","previous"],["548,182,636,309","next"]]

    for (let i = 0; i<6; i++){
        let area = document.createElement("area");
        area.id = "Lecteur_" + controls[i][1];
        area.title = "Lecteur_" + controls[i][1];
        area.alt = "Boutton " + controls[i][1];
        area.coords = controls[i][0];
        area.shape="rect";
        area.href="#";
        area.classList="hoverable";

        map.appendChild(area);
    }

    enigma.appendChild(map);


    /*<img src="Lecteur_00.png" usemap="#image-map">

<map name="controls">
 <area alt="Lecteur_play" id="Lecteur_play" href="" coords="533,308,444,182" shape="rect">
 <area alt="Lecteur_reverse" id="Lecteur_reverse" href="" coords="738,307,651,182" shape="rect">
 <area alt="Lecteur_stop" id="Lecteur_stop" href="" coords="238,178,330,309" shape="rect">
 <area alt="Lecteur_rec" id="Lecteur_rec" href="" coords="136,183,226,309" shape="rect">
 <area alt="Lecteur_previous" id="Lecteur_previous" href="" coords="432,308,342,181" shape="rect">
 <area alt="Lecteur_next" id="Lecteur_next" href="" coords="548,182,636,309" shape="rect">
</map>*/



    /* Verifie s'il y a une cassette dans l'inventaire */
    let cassette = null;
    try {
        cassette = document.getElementById("inv_Cassette");
    } catch (e) {
    }

    if (cassette !== null) {
        cassette.addEventListener("click", () => {
            alert("Musique : 'Les petits bateaux'");
            updateInventory("Cassette",false)
            let modal = document.querySelector(".modal");
            modal.classList.toggle("show-modal");
        })
    }

    return enigma;
}

