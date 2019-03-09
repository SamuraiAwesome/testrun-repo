//Setting the variables.
var pika = document.getElementById("pika");
var char = document.getElementById("char");
var bulba = document.getElementById("bulba");
var squirtle = document.getElementById("squirtle");
var span = document.getElementById("reset");
var pikaVotes;
var squirtleVotes;
var bulbaVotes;
var charVotes;
var listen = true;

if (typeof(Storage) == "undefined") {
    alert("Sorry, it looks like your browser doesn't support the localStorage feature. Please update.");
    alert("Or if you are using Internet Explorer, please change your browser");
    alert("For the simple reason that...");
    alert("Internet Explorer SUUUUUUUUUUUUUUUUCKS!!!");
    setTimeout(2, window.location = "../iesucks.html");
}
else{
    pikaVotes = window.localStorage.getItem("pikaVotes");
    charVotes = window.localStorage.getItem("charVotes");
}
//Setting all the variables to numbers...
if (isNaN(pikaVotes)){
    pikaVotes = 0;
}

if (isNaN(squirtleVotes)){
    squirtleVotes = 0;
}
if (isNaN(bulbaVotes)){
    bulbaVotes = 0;
}
if (isNaN(charVotes)){
    charVotes = 0;
}
//And here are the functions.
function votePika(){
    pikaVotes++;
    alert("You voted for Pikachu. Current number of Pikachu votes: " + pikaVotes);
    window.localStorage.setItem("pikaVotes", pikaVotes);
    pika.removeEventListener('click', votePika, false);
    squirtle.removeEventListener('click', voteSquirtle, false);
    char.removeEventListener('click', voteChar, false);
    bulba.removeEventListener('click', voteBulba, false);
    listen = false;
    console.log(pikaVotes);
    console.log(bulbaVotes);
    console.log(squirtleVotes);
    console.log(charVotes);
    return listen;
}

function voteChar(){
    charVotes++;
    alert("You voted for Charmander. Current number of Charmander votes: " + charVotes);
    window.localStorage.setItem("charVotes", charVotes);
    pika.removeEventListener('click', votePika, false);
    squirtle.removeEventListener('click', voteSquirtle, false);
    char.removeEventListener('click', voteChar, false);
    bulba.removeEventListener('click', voteBulba, false);
    listen = false;
    console.log(pikaVotes);
    console.log(bulbaVotes);
    console.log(squirtleVotes);
    console.log(charVotes);
    return listen;
}

function voteBulba(){
    bulbaVotes++;
    alert("You voted for Bulbasaur. Current number of Bulbasaur votes: " + bulbaVotes);
    window.localStorage.setItem("bulbaVotes", bulbaVotes);
    pika.removeEventListener('click', votePika, false);
    squirtle.removeEventListener('click', voteSquirtle, false);
    char.removeEventListener('click', voteChar, false);
    bulba.removeEventListener('click', voteBulba, false);
    listen = false;
    console.log(pikaVotes);
    console.log(bulbaVotes);
    console.log(squirtleVotes);
    console.log(charVotes);
    return listen;

}

function voteSquirtle(){
    squirtleVotes = squirtleVotes++;
}
function adminUnlock(){
   var input = prompt("Choose an option: reset or unlock");
   if(input == 'reset'){
       reset();
   }
   else if(input == 'unlock'){
       if(listen == false){
            pika.addEventListener('click', votePika, false);
            squirtle.addEventListener('click', voteSquirtle, false);
            char.addEventListener('click', voteChar, false);
            bulba.addEventListener('click', voteBulba, false);
       }
   }
   
}
function reset(){
    window.localStorage.setItem("pikaVotes", 0);
    window.localStorage.setItem("charVotes", 0);
    bulbaVotes = 0;
    squirtleVotes = 0;
}

pika.addEventListener('click', votePika, false);
squirtle.addEventListener('click', voteSquirtle, false);
char.addEventListener('click', voteChar, false);
bulba.addEventListener('click', voteBulba, false);
span.addEventListener('click', adminUnlock, false);


