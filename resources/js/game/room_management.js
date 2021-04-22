/**
 *
 *  Gestion des salles
 *
 **/

function resetAllObjects(){
    for(let i=0;i<rooms.length;i++){
        hideObject(rooms[i]+'.png');
    }
}

export default function updateObject(obj){
    let html = document.getElementById(obj);

    html.src = html.src.replace("_00","_01");
}

function zoomObject(id){

}
