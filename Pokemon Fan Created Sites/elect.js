//Setting the variables.
var pika = document.getElementById("pika");
var char = document.getElementById("char");
var bulba = document.getElementById("bulba");
var squirtle = document.getElementById("squirtle");
var pikaVotes;
var squirtleVotes;
var bulbaVotes;
var charVotes;

if (typeof(Storage) == "undefined") {
    alert("Sorry, it looks like your browser doesn't support the localStorage feature. Please update.");
    alert("Or if you are using Internet Explorer, please change your browser");
    alert("For the simple reason that...");
    alert("Internet Explorer SUUUUUUUUUUUUUUUUCKS!!!");
    setTimeout(2, window.location = "../iesucks.html");
}
//Setting all the variables to numbers...
if (isNaN(pikaVotes)){
    pikaVotes = 0;
}
else{
    pikaVotes = window.localStorage.getItem("pikaVotes");
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
    var temp = pikaVotes;
    pikaVotes = temp+ 1;
    alert("You voted for Pikachu. Current number of Pikachu votes: " + pikaVotes);
    window.localStorage.setItem("pikaVotes", pikaVotes);
    pika.removeEventListener('click', votePika, false);
    squirtle.removeEventListener('click', voteSquirtle, false);
    char.removeEventListener('click', voteChar, false);
    bulba.removeEventListener('click', voteBulba, false);
    console.log(pikaVotes);
    console.log(bulbaVotes);
    console.log(squirtleVotes);
    console.log(charVotes);

}

function voteChar(){
    charVotes = charVotes++;
}

function voteBulba(){
    bulbaVotes = bulbaVotes++;
}

function voteSquirtle(){
    squirtleVotes = squirtleVotes++;
}

pika.addEventListener('click', votePika, false);
squirtle.addEventListener('click', voteSquirtle, false);
char.addEventListener('click', voteChar, false);
bulba.addEventListener('click', voteBulba, false);

