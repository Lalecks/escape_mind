export default function zoom() {
    /* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_image_magnifier_glass */

    function magnify(imgClass, zoom) {
        var image, glass, w, h, bw;
        image = document.querySelector(imgClass);
        /*create magnifier glass:*/
        glass = document.createElement("DIV");
        glass.setAttribute("class", "img-magnifier-glass");
        /*insert magnifier glass:*/
        image.parentElement.insertBefore(glass, image);
        /*set background properties for the magnifier glass:*/
        glass.style.backgroundImage = "url('" + image.src + "')";
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = (image.width * zoom) + "px " + (image.height * zoom) + "px";
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;
        /*execute a function when someone moves the magnifier glass over the image:*/
        glass.addEventListener("mousemove", moveMagnifier);
        image.parentElement.addEventListener("mousemove", moveMagnifier);
        /*and also for touch screens:*/
        glass.addEventListener("touchmove", moveMagnifier);
        image.parentElement.addEventListener("touchmove", moveMagnifier);

        function moveMagnifier(e) {
            var pos, x, y;
            /*prevent any other actions that may occur when moving over the image*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e);
            x = pos.x;
            y = pos.y;
            /*prevent the magnifier glass from being positioned outside the image:*/
            if (x > image.width - (w / zoom)) {
                x = image.width - (w / zoom);
                document.getElementById('souris').style.display = "none";
            } else {
                document.getElementById('souris').style.display = "";
            }
            if (x < w / zoom) {
                x = w / zoom;
            }
            if (y > image.height - (h / zoom)) {
                y = image.height - (h / zoom);
            }
            if (y < h / zoom) {
                y = h / zoom;
                document.getElementById('souris').style.display = "none";
            } else {
                document.getElementById('souris').style.display = "";
            }
            /*set the position of the magnifier glass:*/
            glass.style.left = (x - w) + "px";
            glass.style.top = (y - h) + "px";
            /*display what the magnifier glass "sees":*/
            glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
        }

        function getCursorPos(e) {
            var a, x = 0,
                y = 0;
            e = e || window.event;
            /*get the x and y positions of the image:*/
            a = image.getBoundingClientRect();
            /*calculate the cursor's x and y coordinates, relative to the image:*/
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {
                x: x,
                y: y
            };
        }
    }

    try {
        magnify(".zoomed", 4);
    } catch (e) {}
}
