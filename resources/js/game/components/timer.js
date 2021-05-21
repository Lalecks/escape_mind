import addSound from "./sound";
import updateGame from "../room_creation";

/**
 *
 *  Timer de 20 minutes
 *
 **/

let refresh = null;

//vrai timer en secondes
let time = 605;

//timer visuel
let timeStr = "1005";
let isAlreadyCreated = false;

// Affichage du timer
export default function createTimer() {
    if (!isAlreadyCreated) {
        let chrono = document.createElement("span");
        chrono.class = "glass-effect";
        chrono.id = "Chrono";

        // Creer chaque élément du timer
        for (let i = 0; i < timeStr.length; i++) {

            if (i === 2) {
                let digit = document.createElement("span");
                digit.className = "chrono_space";
                digit.innerText = ":";
                chrono.appendChild(digit);
            }
            let digit = document.createElement("span");
            digit.className = "chrono_digit";
            digit.innerText = timeStr[i];

            chrono.appendChild(digit);
        }
        document.getElementById("Interface").appendChild(chrono);

        startTimer();
        isAlreadyCreated = true;
    } else {
        stopTimer();
    }

}

function startTimer() {
    refresh = setInterval(seconds, 1000); // update about every second
}

function stopTimer() {
    clearInterval(refresh);
}

function removeTimer() {
    stopTimer();
    if (document.getElementById("Chrono").parentNode) {
        let chrono = document.getElementById("Chrono");
        chrono.parentNode.removeChild(chrono);
    }
}


function seconds() {
    time = time - 1;

    if (time < 10) {
        timeStr = "000" + time;
    } else if (time < 60) {
        timeStr = "00" + time;
    } else if (time < 60 * 10 && time % 60 < 10) {
        timeStr = "0" + Math.floor(time / 60) + "0" + time % 60;
    } else if (time < 60 * 10) {
        timeStr = "0" + Math.floor(time / 60) + "" + time % 60;
    } else if (time % 60 < 10) {
        timeStr = Math.floor(time / 60) + "0" + time % 60;
    } else {
        timeStr = Math.floor(time / 60) + "" + time % 60;
    }
    updateTimer();
}

function updateTimer() {
    let digit = document.getElementsByClassName("chrono_digit");

    for (let i = 0; i < digit.length; i++) {
        digit[i].innerText = timeStr[i];
    }

    switch (timeStr) {
        case "1000":
            addSound('./resources/game/gameMaster/10m.mp3');
            break;
        case "0500":
            addSound('./resources/game/gameMaster/5m.mp3');
            break;
        case "0030":
            addSound('./resources/game/gameMaster/30s.mp3');
            break;
        case "0000":
            updateGame(true);
            break;
        default:
    }

}
