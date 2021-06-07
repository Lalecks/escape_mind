/**
 *
 *  Timer de 20 minutes
 *
 **/
 
import addSound from "./sound";
import updateGame from "../room_creation";

let refresh = null;

//vrai timer en secondes
let base = 1500;
let time = base;

//timer visuel
let timeStr = "2500";
let isAlreadyCreated = false;

// Affichage du timer
export default function createTimer(temps) {
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
        if (temps === "") {
            stopTimer();
            return timeToString(base - time);
        } else {
            time = temps;
        }

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

    timeStr = timeToString(time);
    updateTimer();
}

function timeToString(time) {
    if (time < 10) {
        return "000" + time;
    } else if (time < 60) {
        return "00" + time;
    } else if (time < 60 * 10 && time % 60 < 10) {
        return "0" + Math.floor(time / 60) + "0" + time % 60;
    } else if (time < 60 * 10) {
        return "0" + Math.floor(time / 60) + "" + time % 60;
    } else if (time % 60 < 10) {
        return Math.floor(time / 60) + "0" + time % 60;
    } else {
        return Math.floor(time / 60) + "" + time % 60;
    }
}

function updateTimer() {
    let digit = document.getElementsByClassName("chrono_digit");

    for (let i = 0; i < digit.length; i++) {
        digit[i].innerText = timeStr[i];
    }

    switch (timeStr) {
        case "1000":
            addSound('./resources/game/gameMaster/10m.mp3', false);
            break;
        case "0500":
            addSound('./resources/game/gameMaster/5m.mp3', false);
            break;
        case "0030":
            addSound('./resources/game/gameMaster/30s.mp3', false);
            break;
        case "0000":
            updateGame(true);
            break;
        default:
    }
}
