/**
 *
 *  Gestion des objets
 *
 **/

export default function updateObject(obj, isToRemove) {
    let html = document.getElementById(obj);
    if (isToRemove) {
        html.remove();
    } else {
        html.src = html.src.replace("_00", "_01");
    }
}
