console.log('Loaded!');
// Change

var element = document.getElementById('main-text');

// Move Image

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft +  10 ;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick =  function () {
    var interval = setInterval(moveLeft,100);
    
}
