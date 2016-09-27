// Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //Create a request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE)
        //Take some action
        if(request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    //Not done yet
   
  
}; 

 //Make the request
   request.open('GET','http://beingchayan.imad.hasura-app.io/counter',true);
   request.send(null);


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
