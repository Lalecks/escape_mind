/*
 *
 * Codage de l'inventaire
 *
 */

/* Les objets dans l'inventaire du joueur
 *  [nom,nombre]
 */
const objets = [["Casette","1"]];
export { objets as invJoueur };

/*
 * la fonction permet d'ajouter ou de supprimer un objet de l'inventaire
 * objet correspond au nom de l'objet
 * isToAdd est un booléen qui dit si l'objet est à supprimer ou à ajouter
 */
export default function updateObjects(object,isToAdd){
    if (isToAdd){
        //Add object
        let placed = false;
        for (let i = 0; i<objets.length;i++){
            if (objets[i][0] === object){
                objets[i][1]=parseInt(objets[i][1],10)+1 + "";
                placed = true;
                break;
            }
        }
        if (!placed) objets.push([object,"1"]);
    } else {
        //Remove object
        for (let i = 0; i<objets.length;i++){
            if (objets[i][0] === object){
                if (objets[i][1] > 1){
                    objets[i][1] = parseInt(objets[i][1],10)-1 + "";
                } else {
                    objets.splice(i,1);
                }
            } else {
                console.log("ERR : CAN'T REMOVE THE OBJECT : " + object);
            }
        }
    }
}







//remove objets ?
//add objets ?




