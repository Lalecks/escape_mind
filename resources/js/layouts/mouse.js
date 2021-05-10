/**
 *
 *  Mouse : https://codepen.io/gnormand/pen/XpQLyb
 *
 * */

let init = 0;

export default function cursorModule() {
    gsap.set('.follower', {
        xPercent: -50,
        yPercent: -50
    });
    gsap.set('.cursor', {
        xPercent: -50,
        yPercent: -50
    });

    let follow = document.querySelector('.follower');
    let cur = document.querySelector('.cursor');

    window.addEventListener('mousemove', e => {
        gsap.to(cur, 0.2, {
            x: e.clientX,
            y: e.clientY
        });
        gsap.to(follow, 0.9, {
            x: e.clientX,
            y: e.clientY
        });
        gsap.set('.follower', {
            xPercent: -50,
            yPercent: -50
        });
        gsap.set('.cursor', {
            xPercent: -50,
            yPercent: -50
        });
        gsap.to(cur, 0.2, {
            x: e.clientX,
            y: e.clientY
        });
    });

    if (!init) {
        window.addEventListener('mousemove', e => {
            let transition = "transition-property: opacity, width, height; transition-duration: .5s;transition-timing-function: linear; ";

            if (isTheClassHoverable(e)) {
                follow.style = transition + "width: 10vh; height: 10vh; opacity: .1;";
                cur.style = transition + "width: 1vh; height: 1vh;";
            } else {
                follow.style = transition + "width: 6vh; height: 6vh; opacity: .7;";
                cur.style = transition + "width: 3vh; height: 3vh;";
            }
        })
        init = 1;
    }

}
cursorModule();

function isTheClassHoverable(event) {
    let return_value = 0;
    let items = document.querySelectorAll(".hoverable");
    items.forEach(n => {
        if (event.target === n) {
            return_value = 1;
        }
    })
    return return_value;
}
