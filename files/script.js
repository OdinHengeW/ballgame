//window.addEventListener('mousedown', function(e) {
//    console.log(e);
//});


console.log(window.innerWidth);
console.log(window.innerWidth / 2);
console.log(document.getElementById("bolar").offsetWidth);
console.log(document.getElementById("bolar").offsetWidth / 2);

document.addEventListener('keydown', function(q) {
    if (q.keyCode == 27) {
        if (document.getElementById("paus").style.display != "none") {
            document.getElementById("paus").style.display = "none";
        } else { 
            document.getElementById("paus").style.display = "block";
        }
    }
});



var i = 0;
function AAA() {
    var x = RANDOM(window.innerWidth - document.getElementById("bolar").offsetWidth);
    var y = RANDOM(window.innerHeight - document.getElementById("bolar").offsetHeight);
    
    
    
    console.log("x: " + x.toString());
    console.log("y: " + y.toString());
    document.getElementById("bolar").style.left = x + "px";
    document.getElementById("bolar").style.top = y + "px";
    i++;
    refrosscor();
    
}

function refres() {
    i = 0;
    refrosscor();
    document.getElementById("bolar").style.left = ((window.innerWidth - document.getElementById("bolar").offsetWidth) / 2) + "px";
    document.getElementById("bolar").style.top = ((window.innerHeight - document.getElementById("bolar").offsetHeight) / 2) + "px";
}

function RANDOM(max) {
    return Math.floor(Math.random() * max);
}

function refrosscor() {
    var scor = document.createTextNode("Score: " + i.toString());
    document.getElementById("scortxt").innerHTML = "";
    document.getElementById("scortxt").appendChild(scor);
}