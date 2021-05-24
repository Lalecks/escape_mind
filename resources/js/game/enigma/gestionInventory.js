/*
 *
 * Codage de l'inventaire
 *
 */

/* Les objets dans l'inventaire du joueur
 *  [nom,nombre]
 */
import createInventory from "./displayInventory";
import changeAV from "../game";
import {actualRoom} from "../room_creation";
import addSound from "../components/sound";

let objets = [ /*["Cassette","1"]*/ ];
export {
    objets as invJoueur
};

let inventory = document.querySelector("#Inventory");

/*
 * la fonction permet d'ajouter ou de supprimer un objet de l'inventaire
 * objet correspond au nom de l'objet
 * isToAdd est un booléen qui dit si l'objet est à supprimer ou à ajouter
 */
export default function updateInventory(objectInv, isToAdd) {
    let url = "./resources/game/room" + actualRoom + "/objects/";
    let removed = false;

    //verifier si le nom a un nombre a la fin
    let object = objectInv.replace(/[0-9]/g, '');

    if (isToAdd) {
        //Add object
        let placed = false;
        for (let i = 0; i < objets.length; i++) {
            if (objets[i][0] === object) {
                objets[i][1] = parseInt(objets[i][1], 10) + 1;
                placed = true;
                //MISE A JOUR DE LA MODALE
                let div = document.getElementById("div_inv_" + object);
                let obj = document.getElementById("inv_" + object);
                let width = obj.style.width;
                obj.animate([{ scale: 0.8 }, { scale: 1 } ], 500);

                let num = null;
                if ( objets[i][1] === 2){
                    num = document.createElement("span");
                    num.id="num_" + object;
                    num.className = "item_number";
                    div.appendChild(num);
                } else {
                    num = document.getElementById("num_" + object);
                }
                num.innerText = objets[i][1];
                break;
            }
        }
        if (!placed){
            objets.push([object, "1"]);

            //CREATION MODALE
            //S'IL N'Y A RIEN DANS L'INVENTAIRE
            if (objets.length===1){
                inventory.style.display = "";
                document.querySelector(".modal-content").style.top = "39%"; // Decentrer la modale
                document.body.style.position = "fixed";
                inventory.appendChild(createInventory());
            } else {
                let global_object = document.createElement("div");
                global_object.id="div_inv_" + object
                global_object.className = "picked";

                let nom = document.createElement("p");
                switch (object[object.length-1]){
                    case "n" :
                        nom.innerText = object.replace('Un', '');
                        break;
                    case "x" :
                        nom.innerText = object.replace('Deux', '');
                        break;
                    case "s" :
                        nom.innerText = object.replace('Trois', '');
                        break;
                    default:
                        nom.innerText = object;
                }

                if (object === "PhotoUn" ||
                    object === "PhotoDeux" ||
                    object === "PhotoTrois") {
                    url = "./resources/game/global/"
                } else {
                    url = "./resources/game/room" + actualRoom + "/objects/";
                }

                let obj = document.createElement("img");
                obj.src = url + object + "_00.png";
                obj.alt = object;
                obj.className = "hoverable";
                obj.id = "inv_" + object;

                global_object.appendChild(nom);
                global_object.appendChild(obj);
                inventory.firstChild.appendChild(global_object);


            }
        }

        addSound("./resources/game/global/inventory.mp3",false);

    } else {
        //Remove object
        if (object === "All"){
            switch(actualRoom){
                case 2 : objets = [["PhotoUn",1]];
                    break;
                case 3 : objets = [["PhotoUn",1],["PhotoDeux",1]];
                    break;
                default:
                    objets = [];
            }

        }else {

            for (let i = 0; i < objets.length; i++) {
                if (objets[i][0] === object) {
                    if (objets[i][1] > 1) {
                        objets[i][1] = parseInt(objets[i][1], 10) - 1;
                    } else {
                        objets.splice(i, 1);
                        document.getElementById("div_inv_" + object).animate([
                            { // from
                                opacity: 1,
                            },
                            { // to
                                opacity: 0,
                                //left: $("#Activity").width() / 2 - $("#inv_" + object).width() / 2
                            }
                        ], 1000);
                        setTimeout(function () {
                            document.querySelector("#div_inv_" + object).remove();
                        }, 1000);
                    }
                    removed = true;
                }
            }
            if (!removed) console.log("ERR : CAN'T REMOVE THE OBJECT : " + object);

        }


    }

    setTimeout(function () {
        if (objets.length === 0) {
            inventory.style.display = "none";
            document.querySelector(".modal-content").style.top = "50%"; // Centrer la modale
        }
    }, 1000);

    console.log("objets actuels :" + objets);
}
