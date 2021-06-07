import updateInventory from "../gestionInventory";
import addSound from "../../components/sound";
let isTaken = false;

export default function Bougie() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";
    no_enigma.id = "bougie_modal";

    let html = document.getElementById("Bougie");

    let bg = document.createElement("img");
    bg.id = "Bougie_bg";
    bg.src = html.src;

    let code = null;
    try {
        code = document.getElementById("inv_Papier");
    } catch (e) {}

    if (code !== null && !isTaken) {
        code.addEventListener("mousedown", () => {
            if (!isTaken) {
                updateInventory("Papier", false);
                updateInventory("Code", true);
                isTaken = true;
            }
        })
    }
    no_enigma.appendChild(bg);
    return no_enigma;
}
