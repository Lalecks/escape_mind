/**
 *
 *  Window beforeunload : Demander confirmation avant de quitter la page
 *
 * */

export default function beforeunload() {

    function goodbye(e) {
        if (!e) e = window.event;
        //e.cancelBubble is supported by IE - this will kill the bubbling process.
        e.cancelBubble = true;
        e.returnValue = 'Êtes-vous sûr de vouloir quitter cette page ?'; //This is displayed on the dialog

        //e.stopPropagation works in Firefox.
        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
    window.onbeforeunload = goodbye;
}
