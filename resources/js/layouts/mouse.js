/**
 *
 *  Mouse : https://codepen.io/gnormand/pen/XpQLyb
 *
 * */

export default function cursorModule(){
    (function() {
        var follower, init, mouseX, mouseY, positionElement, printout, timer;

        follower = document.getElementById('follower');

        printout = document.getElementById('printout');

        mouseX = (function(_this) {
            return function(event) {
                return event.clientX;
            };
        })(this);

        mouseY = (function(_this) {
            return function(event) {
                return event.clientY;
            };
        })(this);

        positionElement = (function(_this) {
            return function(event) {
                var mouse;
                mouse = {
                    x: mouseX(event),
                    y: mouseY(event)
                };
                follower.style.top = mouse.y + 'px';
                return follower.style.left = mouse.x + 'px';
            };
        })(this);

        timer = false;

        window.onmousemove = init = (function(_this) {
            return function(event) {
                var _event;
                _event = event;
                return timer = setTimeout(function() {
                    return positionElement(_event);
                }, 1);
            };
        })(this);

    }).call(this);
}

cursorModule();






