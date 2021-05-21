/*
 *
 * Codage de l'inventaire
 *
 */

/* Les objets dans l'inventaire du joueur
 *  [nom,nombre]
 */
const objets = [ /*["Cassette","1"]*/ ];
export {
    objets as invJoueur
};

let inventory = document.getElementById("Inventory");

/*
 * la fonction permet d'ajouter ou de supprimer un objet de l'inventaire
 * objet correspond au nom de l'objet
 * isToAdd est un booléen qui dit si l'objet est à supprimer ou à ajouter
 */
export default function updateInventory(objectInv, isToAdd) {

    //verifier si le nom a un nombre a la fin
    let object = objectInv.replace(/[0-9]/g, '');

    if (isToAdd) {
        //Add object
        let placed = false;
        for (let i = 0; i < objets.length; i++) {
            if (objets[i][0] === object) {
                objets[i][1] = parseInt(objets[i][1], 10) + 1;
                placed = true;
                break;
            }
        }
        if (!placed) objets.push([object, "1"]);
    } else {
        //Remove object
        for (let i = 0; i < objets.length; i++) {
            if (objets[i][0] === object) {
                if (objets[i][1] > 1) {
                    objets[i][1] = parseInt(objets[i][1], 10) - 1;
                } else {
                    objets.splice(i, 1);
                }
            } else {
                console.log("ERR : CAN'T REMOVE THE OBJECT : " + object);
            }
        }
    }

    if (objets.length===0){
        inventory.style.display = "none";
        document.querySelector(".modal-content").style.top = "50%"; // Centrer la modale
    }
}

//remove objets ?
//add objets ?
