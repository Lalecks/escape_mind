/*
 * Enigme tablette
 */

import updateInventory from "../gestionInventory";
import updateObject from "../../object";
import addSound from "../../components/sound";
let nb_piles = 0;
let code = "250320";

let story_watched = false;

export {story_watched as unlocked}

export default function Tablette() {
    let no_enigma = document.createElement("div");
    no_enigma.id = "tablette_modal";
    no_enigma.classList = "enigme_modal";

    let desc_text = document.getElementById("desc_text");

    console.log("nb_pile : " + nb_piles);

    let html = document.getElementById("Tablette");

    let bg = document.createElement("img");
    bg.id = "Tablette_bg";
    bg.classList = "magnifiedImg";
    let desc_modal = document.getElementById('desc_modal');
    desc_modal.innerHTML = '<a id="button" class="fas fa-search hoverable glass-effect"></a>' + desc_modal.innerHTML;

    no_enigma.appendChild(bg);

    if (nb_piles < 3) {
        //PREMIERE PARTIE DE LA TABLETTE : ALLUMAGE
        bg.src = "./resources/game/room2/objects/Tablette_face_00.png";
        let piles = null;
        try {
            piles = document.getElementById("inv_Pile");
        } catch (e) {}

        let slots = document.createElement("div");
        slots.id = "div_slot";

        for (let i = 0; i < 3; i++) {
            let slot = document.createElement("img");
            slot.id = "Pile_slot_" + (i + 1);
            if (i < nb_piles) {
                slot.classList = "Pile_empty_slot";
                slot.src = "./resources/game/room2/objects/Pile_00.png";
            } else {
                slot.classList = "Pile_slot";
                slot.src = "./resources/game/room2/objects/Pile_slot_00.png";
            }
            slots.appendChild(slot);
        }

        no_enigma.appendChild(slots);



        if (piles !== null && nb_piles < 3) {
            let number = document.querySelector(".item_number") || null;
            piles.addEventListener("click", () => {
                if (number != null) {
                    for (let i = 1; i <= number.innerHTML; i++) {
                        updateInventory("Pile", false);
                        let first_empty_slot = document.querySelector(".Pile_slot");
                        first_empty_slot.src = "./resources/game/room2/objects/Pile_00.png";
                        first_empty_slot.classList = "Pile_empty_slot";
                        nb_piles = nb_piles + 1;
                    }
                } else {
                    updateInventory("Pile", false);
                    let first_empty_slot = document.querySelector(".Pile_slot");
                    first_empty_slot.src = "./resources/game/room2/objects/Pile_00.png";
                    first_empty_slot.classList = "Pile_empty_slot";
                    nb_piles = nb_piles + 1;
                }

                if (nb_piles === 3) {
                    updateObject("Tablette", 0);
                    bg.src = "./resources/game/room2/objects/Tablette_face_01.png";
                    desc_modal.innerHTML = '<a id="button" class="fas fa-search hoverable glass-effect"></a>';

                    setTimeout(function () {
                        slots.remove();
                        part_two(bg, desc_text, no_enigma);
                    }, 500);
                }
            })
        }
    } else {
        //DEUXIEME PARTIE DE LA TABLETTE : CODE
        part_two(bg, desc_text, no_enigma);
    }

    return no_enigma;

}


function part_two(bg, desc_text, no_enigma) {
    bg.src = "./resources/game/room2/objects/Tablette_face_01.png";
    desc_text.remove();

    let audio = document.createElement("audio");
    audio.id = "audio_Button";
    audio.className = "Foley";
    audio.hidden = true;
    audio.autoplay = false;
    audio.loop = false;
    audio.volume = 0.3;
    document.getElementById("Foley").appendChild(audio);

    let result = document.createElement("span");
    result.id = "code_tablette";

    let div_button = document.createElement("div");
    div_button.id = "tablette_buttons";

    for (let i = 1; i <= 11; i++) {
        let button = document.createElement("button");
        button.id = "tablette_button_" + (i + 1);
        button.classList = "butt hoverable";
        button.addEventListener("click", function () {
            verif(button.innerText);
            audio.src = "./resources/game/global/button.mp3";
            audio.play();
        });

        if (i === 10) {
            button.innerText = 0;
        } else if (i === 11) {
            button.innerHTML = "<i class='fas fa-undo'></i>";
            button.classList += " reset";
            button.addEventListener("click", function () {
                result.innerText = "";
                audio.src = "./resources/game/global/button.mp3";
                audio.play();

            });
        } else button.innerText = i;

        div_button.appendChild(button);
    }
    no_enigma.appendChild(result);
    no_enigma.appendChild(div_button);
}

function verif(num) {
    let result = document.getElementById("code_tablette");

    if (result.innerText !== "CORRECTE" && result.innerText !== "ERREUR")
        result.innerText += num;

    if (result.innerText.length === 6) {
        if (result.innerText === code) {
            result.innerText = "CORRECT";
            addSound("./resources/game/global/correct.mp3",false);
            result.remove();
            document.getElementById("tablette_buttons").remove();

            let tablette = document.getElementById("Tablette_bg");
            let i = 0;

            function myLoop() {
                setTimeout(function () {
                    tablette.src = "./resources/game/room2/objects/Tablette_page_0" + i + ".png";
                    i++
                    if (i < 8) {
                        myLoop();
                    }
                }, i === 0 ? 0 : 5000);
            }
            myLoop();
            story_watched = true;
        } else {
            result.innerText = "INCORRECT";
            addSound("./resources/game/global/wrong.mp3",false);
            setTimeout(function () {
                result.innerText = "";
            }, 500);
        }
    }
}
