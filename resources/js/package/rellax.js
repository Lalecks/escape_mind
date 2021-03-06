
// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Rellax = factory();
    }
}(typeof window !== "undefined" ? window : global, function () {
    let Rellax = function(el, options){
        "use strict";

        let self = Object.create(Rellax.prototype);

        let posY = 0;
        let screenY = 0;
        let posX = 0;
        let screenX = 0;
        let blocks = [];
        let pause = true;

        // check what requestAnimationFrame to use, and if
        // it's not supported, use the onscroll event
        let loop = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function(callback){ return setTimeout(callback, 1000 / 60); };

        // store the id for later use
        let loopId = null;

        // Test via a getter in the options object to see if the passive property is accessed
        let supportsPassive = false;
        try {
            let opts = Object.defineProperty({}, 'passive', {
                get: function() {
                    supportsPassive = true;
                }
            });
            window.addEventListener("testPassive", null, opts);
            window.removeEventListener("testPassive", null, opts);
        } catch (e) {}

        // check what cancelAnimation method to use
        let clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;

        // check which transform property to use
        let transformProp = window.transformProp || (function(){
            let testEl = document.createElement('div');
            if (testEl.style.transform === null) {
                let vendors = ['Webkit', 'Moz', 'ms'];
                for (let vendor in vendors) {
                    if (testEl.style[ vendors[vendor] + 'Transform' ] !== undefined) {
                        return vendors[vendor] + 'Transform';
                    }
                }
            }
            return 'transform';
        })();

        // Default Settings
        self.options = {
            speed: -2,
            verticalSpeed: null,
            horizontalSpeed: null,
            breakpoints: [576, 768, 1201],
            center: false,
            wrapper: null,
            relativeToWrapper: false,
            round: true,
            vertical: true,
            horizontal: false,
            verticalScrollAxis: "y",
            horizontalScrollAxis: "x",
            callback: function() {},
        };

        // User defined options (might have more in the future)
        if (options){
            Object.keys(options).forEach(function(key){
                self.options[key] = options[key];
            });
        }

        function validateCustomBreakpoints () {
            if (self.options.breakpoints.length === 3 && Array.isArray(self.options.breakpoints)) {
                let isAscending = true;
                let isNumerical = true;
                let lastVal;
                self.options.breakpoints.forEach(function (i) {
                    if (typeof i !== 'number') isNumerical = false;
                    if (lastVal !== null) {
                        if (i < lastVal) isAscending = false;
                    }
                    lastVal = i;
                });
                if (isAscending && isNumerical) return;
            }
            // revert defaults if set incorrectly
            self.options.breakpoints = [576, 768, 1201];
            console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");
        }

        if (options && options.breakpoints) {
            validateCustomBreakpoints();
        }

        // By default, rellax class
        if (!el) {
            el = '.rellax';
        }

        // check if el is a className or a node
        let elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];

        // Now query selector
        if (elements.length > 0) {
            self.elems = elements;
        }

        // The elements don't exist
        else {
            console.warn("Rellax: The elements you're trying to select don't exist.");
            return;
        }

        // Has a wrapper and it exists
        if (self.options.wrapper) {
            if (!self.options.wrapper.nodeType) {
                let wrapper = document.querySelector(self.options.wrapper);

                if (wrapper) {
                    self.options.wrapper = wrapper;
                } else {
                    console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                    return;
                }
            }
        }

        // set a placeholder for the current breakpoint
        let currentBreakpoint;

        // helper to determine current breakpoint
        let getCurrentBreakpoint = function (w) {
            let bp = self.options.breakpoints;
            if (w < bp[0]) return 'xs';
            if (w >= bp[0] && w < bp[1]) return 'sm';
            if (w >= bp[1] && w < bp[2]) return 'md';
            return 'lg';
        };

        // Get and cache initial position of all elements
        let cacheBlocks = function() {
            for (let i = 0; i < self.elems.length; i++){
                let block = createBlock(self.elems[i]);
                blocks.push(block);
            }
        };


        // Let's kick this script off
        // Build array for cached element values
        let init = function() {
            for (let i = 0; i < blocks.length; i++){
                self.elems[i].style.cssText = blocks[i].style;
            }

            blocks = [];

            screenY = window.innerHeight;
            screenX = window.innerWidth;
            currentBreakpoint = getCurrentBreakpoint(screenX);

            setPosition();

            cacheBlocks();

            animate();

            // If paused, unpause and set listener for window resizing events
            if (pause) {
                window.addEventListener('resize', init);
                pause = false;
                // Start the loop
                update();
            }
        };

        // We want to cache the parallax blocks'
        // values: base, top, height, speed
        // el: is dom object, return: el cache values
        let createBlock = function(el) {
            let dataPercentage = el.getAttribute( 'data-rellax-percentage' );
            let dataSpeed = el.getAttribute( 'data-rellax-speed' );
            let dataXsSpeed = el.getAttribute( 'data-rellax-xs-speed' );
            let dataMobileSpeed = el.getAttribute( 'data-rellax-mobile-speed' );
            let dataTabletSpeed = el.getAttribute( 'data-rellax-tablet-speed' );
            let dataDesktopSpeed = el.getAttribute( 'data-rellax-desktop-speed' );
            let dataVerticalSpeed = el.getAttribute('data-rellax-vertical-speed');
            let dataHorizontalSpeed = el.getAttribute('data-rellax-horizontal-speed');
            let dataVericalScrollAxis = el.getAttribute('data-rellax-vertical-scroll-axis');
            let dataHorizontalScrollAxis = el.getAttribute('data-rellax-horizontal-scroll-axis');
            let dataZindex = el.getAttribute( 'data-rellax-zindex' ) || 0;
            let dataMin = el.getAttribute( 'data-rellax-min' );
            let dataMax = el.getAttribute( 'data-rellax-max' );
            let dataMinX = el.getAttribute('data-rellax-min-x');
            let dataMaxX = el.getAttribute('data-rellax-max-x');
            let dataMinY = el.getAttribute('data-rellax-min-y');
            let dataMaxY = el.getAttribute('data-rellax-max-y');
            let mapBreakpoints;
            let breakpoints = true;

            if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) {
                breakpoints = false;
            } else {
                mapBreakpoints = {
                    'xs': dataXsSpeed,
                    'sm': dataMobileSpeed,
                    'md': dataTabletSpeed,
                    'lg': dataDesktopSpeed
                };
            }

            // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
            // ensures elements are positioned based on HTML layout.
            //
            // If the element has the percentage attribute, the posY and posX needs to be
            // the current scroll position's value, so that the elements are still positioned based on HTML layout
            let wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
            // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
            if (self.options.relativeToWrapper) {
                let scrollPosY = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
                wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
            }
            let posY = self.options.vertical ? ( dataPercentage || self.options.center ? wrapperPosY : 0 ) : 0;
            let posX = self.options.horizontal ? ( dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft) : 0 ) : 0;

            let blockTop = posY + el.getBoundingClientRect().top;
            let blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;

            let blockLeft = posX + el.getBoundingClientRect().left;
            let blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;

            // apparently parallax equation everyone uses
            let percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
            let percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
            if(self.options.center){ percentageX = 0.5; percentageY = 0.5; }

            // Optional individual block speed as data attr, otherwise global speed
            let speed = (breakpoints && mapBreakpoints[currentBreakpoint] !== null) ? Number(mapBreakpoints[currentBreakpoint]) : (dataSpeed ? dataSpeed : self.options.speed);
            let verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;
            let horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed;

            // Optional individual block movement axis direction as data attr, otherwise gobal movement direction
            let verticalScrollAxis = dataVericalScrollAxis ? dataVericalScrollAxis : self.options.verticalScrollAxis;
            let horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;

            let bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed);

            // ~~Store non-translate3d transforms~~
            // Store inline styles and extract transforms
            let style = el.style.cssText;
            let transform = '';

            // Check if there's an inline styled transform
            let searchResult = /transform\s*:/i.exec(style);
            if (searchResult) {
                // Get the index of the transform
                let index = searchResult.index;

                // Trim the style to the transform point and get the following semi-colon index
                let trimmedStyle = style.slice(index);
                let delimiter = trimmedStyle.indexOf(';');

                // Remove "transform" string and save the attribute
                if (delimiter) {
                    transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g,'');
                } else {
                    transform = " " + trimmedStyle.slice(11).replace(/\s/g,'');
                }
            }

            return {
                baseX: bases.x,
                baseY: bases.y,
                top: blockTop,
                left: blockLeft,
                height: blockHeight,
                width: blockWidth,
                speed: speed,
                verticalSpeed: verticalSpeed,
                horizontalSpeed: horizontalSpeed,
                verticalScrollAxis: verticalScrollAxis,
                horizontalScrollAxis: horizontalScrollAxis,
                style: style,
                transform: transform,
                zindex: dataZindex,
                min: dataMin,
                max: dataMax,
                minX: dataMinX,
                maxX: dataMaxX,
                minY: dataMinY,
                maxY: dataMaxY
            };
        };

        // set scroll position (posY, posX)
        // side effect method is not ideal, but okay for now
        // returns true if the scroll changed, false if nothing happened
        let setPosition = function() {
            let oldY = posY;
            let oldX = posX;

            posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
            posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
            // If option relativeToWrapper is true, use relative wrapper value instead.
            if (self.options.relativeToWrapper) {
                let scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                posY = scrollPosY - self.options.wrapper.offsetTop;
            }


            if (oldY != posY && self.options.vertical) {
                // scroll changed, return true
                return true;
            }

            if (oldX != posX && self.options.horizontal) {
                // scroll changed, return true
                return true;
            }

            // scroll did not change
            return false;
        };

        // Ahh a pure function, gets new transform value
        // based on scrollPosition and speed
        // Allow for decimal pixel values
        let updatePosition = function(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
            let result = {};
            let valueX = ((horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX)));
            let valueY = ((verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY)));

            result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
            result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;

            return result;
        };

        // Remove event listeners and loop again
        let deferredUpdate = function() {
            window.removeEventListener('resize', deferredUpdate);
            window.removeEventListener('orientationchange', deferredUpdate);
            (self.options.wrapper ? self.options.wrapper : window).removeEventListener('scroll', deferredUpdate);
            (self.options.wrapper ? self.options.wrapper : document).removeEventListener('touchmove', deferredUpdate);

            // loop again
            loopId = loop(update);
        };

        // Loop
        let update = function() {
            if (setPosition() && pause === false) {
                animate();

                // loop again
                loopId = loop(update);
            } else {
                loopId = null;

                // Don't animate until we get a position updating event
                window.addEventListener('resize', deferredUpdate);
                window.addEventListener('orientationchange', deferredUpdate);
                (self.options.wrapper ? self.options.wrapper : window).addEventListener('scroll', deferredUpdate, supportsPassive ? { passive: true } : false);
                (self.options.wrapper ? self.options.wrapper : document).addEventListener('touchmove', deferredUpdate, supportsPassive ? { passive: true } : false);
            }
        };

        // Transform3d on parallax element
        let animate = function() {
            let positions;
            for (let i = 0; i < self.elems.length; i++){
                // Determine relevant movement directions
                let verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
                let horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
                let verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
                let verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
                let horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
                let horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;

                let percentageY = ((verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY));
                let percentageX = ((verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX));

                // Subtracting initialize value, so element stays in same spot as HTML
                positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
                let positionY = positions.y - blocks[i].baseY;
                let positionX = positions.x - blocks[i].baseX;

                // The next two "if" blocks go like this:
                // Check if a limit is defined (first "min", then "max");
                // Check if we need to change the Y or the X
                // (Currently working only if just one of the axes is enabled)
                // Then, check if the new position is inside the allowed limit
                // If so, use new position. If not, set position to limit.

                // Check if a min limit is defined
                if (blocks[i].min !== null) {
                    if (self.options.vertical && !self.options.horizontal) {
                        positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
                    }
                    if (self.options.horizontal && !self.options.vertical) {
                        positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
                    }
                }

                // Check if directional min limits are defined
                if (blocks[i].minY != null) {
                    positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
                }
                if (blocks[i].minX != null) {
                    positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
                }

                // Check if a max limit is defined
                if (blocks[i].max !== null) {
                    if (self.options.vertical && !self.options.horizontal) {
                        positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
                    }
                    if (self.options.horizontal && !self.options.vertical) {
                        positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
                    }
                }

                // Check if directional max limits are defined
                if (blocks[i].maxY != null) {
                    positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
                }
                if (blocks[i].maxX != null) {
                    positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
                }

                let zindex = blocks[i].zindex;

                // Move that element
                // (Set the new translation and append initial inline transforms.)
                let translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;
                self.elems[i].style[transformProp] = translate;
            }
            self.options.callback(positions);
        };

        self.destroy = function() {
            for (let i = 0; i < self.elems.length; i++){
                self.elems[i].style.cssText = blocks[i].style;
            }

            // Remove resize event listener if not pause, and pause
            if (!pause) {
                window.removeEventListener('resize', init);
                pause = true;
            }

            // Clear the animation loop to prevent possible memory leak
            clearLoop(loopId);
            loopId = null;
        };

        // Init
        init();

        // Allow to recalculate the initial values whenever we want
        self.refresh = init;

        return self;
    };
    return Rellax;
}));
