console.log('Loaded!');
// Change

var element = document.getElementById('main-text');

// Move Image

var img = document.getElementById('madi');
var marginLeft = 0;
function moveLeft() {
    marginR = marginR +  10;
    img.style.marginRight = marginR + 'px';
}
img.onclick =  function () {
    var interval = setInterval(moveLeft,100);
    
}
