/**
 *
 *  Window beforeunload : Demander confirmation avant de quitter la page
 *
 * */

export default function beforeunload() {

    addEventListener('beforeunload', function (event) {
        event.preventDefault(); // Firefox
        event.returnValue = "Êtes-vous sûr de vouloir quitter cette page ?"; // Chrome
    });
}
