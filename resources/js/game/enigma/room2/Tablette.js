/*
 * Enigme tablette
 */

import updateInventory from "../inventory";
import updateObject from "../../object";
import changeAV from "../../game";
let nb_piles = 0;
let code = "250320";

export default function Tablette() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";

    console.log("nb_pile : " + nb_piles);

    let html = document.getElementById("Tablette");

    let bg = document.createElement("img");
    bg.id = "Tablette_bg";
    bg.classList = "magnifiedImg";

    no_enigma.appendChild(bg);

    if (nb_piles < 3) {
        //PREMIERE PARTIE DE LA TABLETTE : ALLUMAGE
        bg.src = "./resources/game/room2/objects/Tablette_face_00.png";
        let piles = null;
        try {
            piles = document.getElementById("inv_Pile");
        } catch (e) {
        }

        let slots = document.createElement("div");
        slots.id="div_slot";

        for (let i = 0; i<3;i++){
            let slot = document.createElement("img");
            slot.id="Pile_slot_" + (i+1);
            if (i < nb_piles){
                slot.classList ="Pile_empty_slot";
                slot.src = "./resources/game/room2/objects/Pile_00.png";
            }else {
                slot.classList ="Pile_slot";
                slot.src = "./resources/game/room2/objects/Pile_slot_00.png";
            }
            slots.appendChild(slot);
        }

        no_enigma.appendChild(slots);

        if (piles !== null && nb_piles<3) {
            let number = document.querySelector(".item_number") || null;
            piles.addEventListener("click", () => {
                if (number != null){
                    for (let i=1;i<=number.innerHTML;i++){
                        updateInventory("Pile", false);
                        let first_empty_slot = document.querySelector(".Pile_slot");
                        first_empty_slot.src="./resources/game/room2/objects/Pile_00.png";
                        first_empty_slot.classList="Pile_empty_slot";
                        nb_piles=nb_piles+1;
                    }
                } else {
                    updateInventory("Pile", false);
                    let first_empty_slot = document.querySelector(".Pile_slot");
                    first_empty_slot.src="./resources/game/room2/objects/Pile_00.png";
                    first_empty_slot.classList="Pile_empty_slot";
                    nb_piles=nb_piles+1;
                }
                document.querySelector("#div_inv_Pile").remove();

                if (nb_piles===3){
                    updateObject("Tablette",0);
                    let modal = document.querySelector(".modal");
                    modal.classList.toggle("show-modal");
                }
            })
        }
    } else {
        //DEUXIEME PARTIE DE LA TABLETTE : CODE
        bg.src = "./resources/game/room2/objects/Tablette_face_01.png";
        bg.classList = "magnifiedImg";
        document.getElementById('desc_modal').innerHTML = '<a id="button" class="fas fa-search hoverable glass-effect"></a>' + document.getElementById('desc_modal').innerHTML;

        let result = document.createElement("span");
        result.id = "code_tablette";

        let div_button = document.createElement("div");
        div_button.id="tablette_buttons";

        for (let i=1;i<=10;i++){
            let button = document.createElement("button");
            button.id="tablette_button_" + (i+1);
            button.classList = "butt hoverable";
            button.addEventListener("click", function () {
                verif(button.innerText)
            });

            if (i===10){
                button.innerText=0;
            } else button.innerText=i;

            div_button.appendChild(button);
        }
    no_enigma.appendChild(result);
    no_enigma.appendChild(div_button);

    }

    return no_enigma;
}

function verif(num) {
    let result = document.getElementById("code_tablette");

    result.innerText += num;

    if (result.innerText.length === 6) {
        if (result.innerText === code) {
            result.innerText = "CORRECTE";








































            //changeAV(5);
        } else {
            result.innerText = "ERREUR";
            setTimeout(function(){ result.innerText=""; }, 2000);
        }
    }
}
