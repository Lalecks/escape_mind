/**
 *
 *  Magnifier
 *
 * */

export default function zoom() {
    /*Size is  set in pixels... supports being written as: '250px' */
    var magnifierSize = 25;

    /*How many times magnification of image on page.*/
    var magnification = 4;


    function magnifier() {

        this.magnifyImg = function (ptr, magnification, magnifierSize) {
            var $pointer;
            if (typeof ptr == "string") {
                $pointer = $(ptr);
            } else if (typeof ptr == "object") {
                $pointer = ptr;
            }

            if (!($pointer.is('img'))) {
                alert('Object must be image.');
                return false;
            }

            magnification = +(magnification);

            $pointer.hover(function () {
                $(this).css('cursor', 'none');
                $('.magnify').show();
                //Setting some variables for later use
                var width = $(this).width();
                var height = $(this).height();
                var src = $(this).attr('src');
                var imagePos = $(this).offset();
                var image = $(this);

                if (magnifierSize == undefined) {
                    magnifierSize = '100%';
                }

                $('.magnify').css({
                    'background-size': width * magnification + '% ' + height * magnification + "%",
                    'background-image': 'url("' + src + '")',
                    'width': magnifierSize + "%",
                    'height': magnifierSize + "%",
                });

                //Setting a few more...
                var magnifyOffset = +($('.magnify').width() / 2);
                var rightSide = +(imagePos.left + $(this).width());
                var bottomSide = +(imagePos.top + $(this).height());

                $(document).mousemove(function (e) {
                    if (e.pageX < +(imagePos.left - magnifyOffset / 6) || e.pageX > +(rightSide + magnifyOffset / 6) || e.pageY < +(imagePos.top - magnifyOffset / 6) || e.pageY > +(bottomSide + magnifyOffset / 6)) {
                        $('.magnify').hide();
                        $(document).unbind('mousemove');
                        // console.log('sorti');
                    }
                    var backgroundPos = "" - ((e.pageX - imagePos.left) * magnification - magnifyOffset) + "px " + -((e.pageY - imagePos.top) * magnification - magnifyOffset) + "px";
                    $('.magnify').css({
                        'left': e.pageX - magnifyOffset,
                        'top': e.pageY - magnifyOffset,
                        'background-position': backgroundPos
                    });
                });
            }, function () {

            });
        };

        this.init = function () {
            $('body').prepend('<div class="magnify"></div>');
        }

        return this.init();
    }

    var magnify = new magnifier();
    magnify.magnifyImg('img', magnification, magnifierSize);

}
