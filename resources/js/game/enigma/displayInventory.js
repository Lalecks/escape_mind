import {
    actualRoom
} from "../room_creation";
import {
    invJoueur
} from "./gestionInventory";

export default function createInventory() {
    let objects = document.createElement("div");
    let url = "./resources/game/room" + actualRoom + "/objects/";

    for (let i = 0; i < invJoueur.length; i++) {
        let global_object = document.createElement("div");
        global_object.id = "div_inv_" + invJoueur[i][0];
        global_object.className = "picked";

        if (parseInt(invJoueur[i][1]) > 1) {
            let num = document.createElement("span");
            num.innerText = invJoueur[i][1];
            num.className = "item_number";
            num.id="num_" + invJoueur[i][0];
            global_object.appendChild(num);
        }

        let nom = document.createElement("p");
        switch (invJoueur[i][0][invJoueur[i][0].length-1]){
            case "n" :
                nom.innerText = invJoueur[i][0].replace('Un', '');
                break;
            case "x" :
                nom.innerText = invJoueur[i][0].replace('Deux', '');
                break;
            case "s" :
                nom.innerText = invJoueur[i][0].replace('Trois', '');
                break;
            default:
                nom.innerText = invJoueur[i][0];
        }

        if (invJoueur[i][0] === "PhotoUn" ||
            invJoueur[i][0] === "PhotoDeux" ||
            invJoueur[i][0] === "PhotoTrois") {
            url = "./resources/game/global/"
        } else {
            url = "./resources/game/room" + actualRoom + "/objects/";
        }

        let object = document.createElement("img");
        object.src = url + invJoueur[i][0] + "_00.png";
        object.alt = invJoueur[i][0];
        object.className = "hoverable";
        object.id = "inv_" + invJoueur[i][0];

        global_object.appendChild(nom);
        global_object.appendChild(object);
        objects.appendChild(global_object);

    }
    return objects;
}
