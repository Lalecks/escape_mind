/*
 * Turn enigme
 */

import addSound from "../../components/sound";

export default function Turn(base_html, son, first_try) {

    let box_scene = document.createElement("div");
    box_scene.id = "box-scene";
    box_scene.className = "box-scene draggable";

    let box = document.createElement("div");
    box.id = "box";
    box.className = "box";

    let front = document.createElement("div");
    front.id = "front_face";
    front.className = "front face";

    let back = document.createElement("div");
    back.id = "back_face";
    back.className = "back face";


    box.appendChild(front);
    box_scene.appendChild(box);
    box.appendChild(back);
    base_html.appendChild(box_scene);

    //FONCTIONNEMENT DE LA 3D
    let offset = 0,
        startX;

    box_scene.addEventListener("mousedown", function (e) {
        startX = e.pageX - offset;
    })

    box_scene.addEventListener("mouseup", function () {
        startX = null;
    })

    box_scene.addEventListener('mousemove', function (e) {
        if (startX) {
            offset = e.pageX - startX;
            box.style['-webkit-transform'] = 'rotateY(' + offset + 'deg)';
        }
        if ((offset > 110 || offset < -110) && first_try) {
            try {
                addSound(son);
            } catch (e) {}

            first_try = false;
        }
    });

}
