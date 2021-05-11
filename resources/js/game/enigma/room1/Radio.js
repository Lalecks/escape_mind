/*
 * Enigme de la radio
 */


import changeAV, { AV } from "../../game";

export default function Radio(){
    let radio_enigma = document.createElement("div");
    radio_enigma.classList = "enigme_modal";
    radio_enigma.id = "modal_radio";

    let radio_html = document.getElementById("Radio");

    let radio_bg = document.createElement("img");
    radio_bg.id="Radio_bg";
    radio_bg.src=radio_html.src;

    let area = document.createElement("div");
    area.className = "slidecontainer";

    let cursor = document.createElement("input");
    cursor.id="radio_slider";
    cursor.className="slider hoverable";
    cursor.type="range";
    cursor.min="1";
    cursor.max="100";
    cursor.value="50";

    let actual_val = document.createElement("p");
    actual_val.innerText = (((50/100)*13)+87).toFixed(1) + " Hz";

    cursor.onchange=function(){
        actual_val.innerText = "" + (((cursor.value/100)*13)  + 87).toFixed(1) + " Hz";
        //Correspond à la fréquence à trouver
        if (cursor.value === "37"){
            alert("indice sonore : '11'");
            changeAV(0);
        }
    }


    area.appendChild(cursor);

    radio_enigma.appendChild(radio_bg);
    radio_enigma.appendChild(area);
    radio_enigma.appendChild(actual_val);

    return radio_enigma;
}

