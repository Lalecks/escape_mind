import updateInventory from "../inventory";

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
    } catch (e) {
    }

    if (code !== null) {
        code.addEventListener("mousedown", () => {
            alert("Un mot apparait");
            updateInventory("Papier", false);
            updateInventory("Code", true);
            let modal = document.querySelector(".modal");
            modal.classList.toggle("show-modal");
        })
    }

    no_enigma.appendChild(bg);

    return no_enigma;
}
