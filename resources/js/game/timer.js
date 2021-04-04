//
// *
// *  Système du Timer
// *
// * */

let refresh = null;
let time = 1800;
let timeStr = "3000";

//affichage du timer
export default function createTimer(){
    let chrono = document.createElement("div");
    chrono.id="Chrono";

    //creer chaque élément du timer
    for (let i=0;i<timeStr.length;i++){


        if(i===2){
            let digit = document.createElement("div");
            digit.className="chrono_space";
            digit.innerText=":";
            chrono.appendChild(digit);
        }

        let digit = document.createElement("div");
        digit.className="chrono_digit";
        digit.innerText=timeStr[i];

        chrono.appendChild(digit);
    }

    document.getElementById("Interface").appendChild(chrono);
    startTimer();
}

function startTimer(){
    refresh = setInterval(seconds, 1000); // update about every second
}

function stopTimer(){
    clearInterval(refresh);
}

function removeTimer(){
    stopTimer();
    if (document.getElementById("Chrono").parentNode){
        let chrono = document.getElementById("Chrono");
        chrono.parentNode.removeChild(chrono);
    }
}

function seconds(){
    time = time-1;

    if (time<10){
        timeStr = "000" + time;
    } else if (time<60){
        timeStr = "00" + time;
    } else if (time < 60*10 && time%60<10){
        timeStr = "0" + Math.floor(time/60) + "0" + time%60;
    } else if (time < 60*10){
        timeStr = "0" + Math.floor(time/60) + "" + time%60;
    } else if (time%60<10){
        timeStr = Math.floor(time/60) + "0" + time%60;
    } else {
        timeStr = Math.floor(time/60) + "" + time%60;
    }

    updateTimer();
}

function updateTimer(){
    let digit = document.getElementsByClassName("chrono_digit");

    for (let i = 0; i < digit.length ; i++){
        digit[i].innerText=timeStr[i];
    }


}
