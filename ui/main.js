// Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
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
   request.open('GET','http://beingchayan.imad.hasura-app.io/counter', true);
   request.send(null);

};

//Submit name

var nameInp = document.getElementById('name');
var name = nameInp.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function () {
    //Make request to the server and tsend the name
     var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
        //Take some action
        if(request.status === 200) {
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list = '';
                    for (var i=0;i<names.length;i++)
                    {
                        list += '<li>' + names[i] + '</li>'; 
                    }
                    var ul = document.getElementById('namelist');
                    ul.innerHTML = list;
        }
    }
    //Not done yet
   
  }; 

 //Make the request
 var nameInp = document.getElementById('name');
var name = nameInp.value;
    
   request.open('GET','http://beingchayan.imad.hasura-app.io/submit-name?name='+name, true);
   request.send(null);

    //Capture a list of names and render it as a list
    
    
    
};






/*
console.log('Loaded!');


var element = document.getElementById('main-text');

// Move Image

var img = document.getElementById('madi');
var marginR = 0;
function moveLeft() {
    marginR = marginR +  1;
    img.style.marginRight = marginR + 'px';
}
img.onclick =  function () {
    var interval = setInterval(moveLeft,50);
    
} */
