/*
 * Enigme du coffre
 */

import changeAV from "../../game";

let code = "711";

export default function Coffre() {
    let html = document.getElementById("Coffre");
    let no_enigma = document.createElement("span");
    no_enigma.id = "enigme_modal";

    let bg = document.createElement("img");
    bg.id = "Radio_bg";
    bg.src = html.src;

    let buttons = document.createElement("span");
    buttons.className = "code_buttons";

    let result = document.createElement("span");
    result.id = "code_coffre";

    let div_haut = document.createElement("span");
    div_haut.id = "div_haut";
    let div_bas = document.createElement("span");
    div_bas.id = "div_bas";

    for (let i = 0; i <= 9; i++) {
        
        let num = document.createElement("span");
        num.classList = "num hoverable";
        num.innerText = i;
        num.addEventListener("click", function () {
            verif(i)
        });

        if (i < 5) div_haut.appendChild(num);
        else div_bas.appendChild(num);
    }

    buttons.appendChild(div_haut);
    buttons.appendChild(div_bas);
    
    no_enigma.appendChild(result);
    no_enigma.appendChild(buttons);
    no_enigma.appendChild(bg);

    return no_enigma;
}

function verif(num) {
    let result = document.getElementById("code_coffre");

    result.innerText += num;

    if (result.innerText.length === 3) {
        if (result.innerText === code) {
            result.innerText = "CORRECTE";
            changeAV(5);
        }
    } else {
        if (result.innerText.length > 5) {
            result.innerText = "ERREUR";
        }
    }
    console.log(num);
}