/*
 * Enigme du Jukebox
 */
import updateObject from "../../object";
import updateInventory from "../inventory";
import Turn from "../room1/Turn";
import changeAV from "../../game";

let actual_puzzle = "000";

let isPuzzleDone = false;

export default function Puzzle() {
    let no_enigma = document.createElement("div");
    no_enigma.classList = "enigme_modal";
    no_enigma.id = "puzzle_modal";

    if (!isPuzzleDone){

        let html = document.getElementById("Puzzle");

        let bg = document.createElement("img");
        bg.id = "Puzzle_bg";
        bg.src = html.src.replace("_00", "_" + actual_puzzle);
        no_enigma.appendChild(bg);

        let pieces = [null,null,null];
        try {
            pieces[0] = document.getElementById("inv_PieceUn");
            pieces[1] = document.getElementById("inv_PieceDeux");
            pieces[2] = document.getElementById("inv_PieceTrois");
        } catch (e) {}

        let actual_pieces = "" + (pieces[0] == null ? "0" : "1") + (pieces[1] == null ? "0": "1") + (pieces[2] == null ? "0": "1");

        console.log(actual_pieces);

        switch (actual_pieces){
            case "111" :
                isPuzzleDone=true;
                addPiece(2);
            case "110" :
                addPiece(1);
            case "100" :
                addPiece(0);
                break;

            case "101" :
                addPiece(0);
            case "001" :
                addPiece(2);
                break;

            case "011" :
                addPiece(2);
            case "010" :
                addPiece(1);
                break;
            default:
        }

        function addPiece(piece){
            pieces[piece].addEventListener("mousedown",()=>{
                updateInventory(pieces[piece].id.replace("inv_",""),0);
                actual_puzzle= actual_puzzle.substr(0, piece) + "1" + actual_puzzle.substr(piece + 1);
                bg.src = html.src.replace("_00", "_" + actual_puzzle);
                pieces[piece].parentNode.remove();
                if (actual_puzzle==="111"){
                    bg.remove();
                    puzzleTurn();
                }
            });
        }

    } else {
        puzzleTurn();
    }

    function puzzleTurn(){
        Turn(no_enigma,null,0)

        setTimeout(function () {
            let back_face = document.getElementById("back_face");
            back_face.addEventListener("click",()=>{
                updateInventory("PhotoDeux",1);
                back_face.style.display="none";
                changeAV(15);
            });
        }, 1000);
    }



    return no_enigma;
}
