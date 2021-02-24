const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
document.body.addEventListener('mouseleave', onMouseLeave);
document.body.addEventListener('load',onPageLoad);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}


// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.clientX- 15,
    y: e.clientY - 15,
    opacity:100 });
  TweenMax.to($smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 7,
    opacity:100 });
}


function onMouseLeave(e){
    TweenMax.to($smallBall, .1, {
        opacity:0 });
}




// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4 });
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1 });
}
