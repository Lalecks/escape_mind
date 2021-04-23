/**
 *
 *  Gestion des salles
 *
 **/
export default function updateObject(obj){
    let html = document.getElementById(obj);

    html.src = html.src.replace("_00","_01");
}

