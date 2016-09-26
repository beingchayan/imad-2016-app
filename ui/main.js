// Counter code
var button = document.getElementById("counter");
var counter = 0;

button.onclick = function () {
    
    //Make a request to the counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the variable in the correct span
    counter += 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
}


//console.log('Loaded!');
// Change

//var element = document.getElementById('main-text');

// Move Image

//var img = document.getElementById('madi');
//var marginR = 0;
//function moveLeft() {
/*    marginR = marginR +  1;
    img.style.marginRight = marginR + 'px';
}
img.onclick =  function () {
    var interval = setInterval(moveLeft,50);
    
} */
