/*
 * Enigme du coffre
 */

import changeAV from "../../game";

let code = "711";

export default function Coffre(){
    let html = document.getElementById("Coffre");
    let no_enigma = document.createElement("div");
    no_enigma.id="enigme_modal";

    let bg = document.createElement("img");
    bg.id="Radio_bg";
    bg.src=html.src;

    let buttons = document.createElement("span");
    buttons.className="code_buttons";

    let result = document.createElement("span");
    result.id="code_coffre";

    for (let i = 0; i<=9; i++){
        let num = document.createElement("span");
        num.classList="num hoverable";
        num.innerText=i;
        num.addEventListener("click",function(){verif(i)});

        buttons.appendChild(num);
    }

    no_enigma.appendChild(buttons);
    no_enigma.appendChild(result);
    no_enigma.appendChild(bg);

    return no_enigma;
}

function verif(num){
    let result = document.getElementById("code_coffre");

    result.innerText+=num;

    if (result.innerText.length === 3 ){
        if (result.innerText === code) result.innerText = "CORRECTE";
        changeAV(5);
    } else {
        if (result.innerText.length > 5) {
            result.innerText = "ERREUR";
        }
    }
    console.log(num);
}
