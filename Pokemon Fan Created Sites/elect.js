//Setting the variables.
var pika = document.getElementById("pika");
var char = document.getElementById("char");
var bulba = document.getElementById("bulba");
var squirtle = document.getElementById("squirtle");
var pikaVotes;
var squirtleVotes;
var bulbaVotes;
var charVotes;

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
    pikaVotes = pikaVotes++;
    alert("You voted for Pikachu. Current number of Pikachu votes: " + pikaVotes);
    pika.removeEventListener('click', votePika, false);
    squirtle.removeEventListener('click', voteSquirtle, false);
    char.removeEventListener('click', voteChar, false);
    bulba.removeEventListener('click', voteBulba, false);

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

console.log(pikaVotes);
console.log(bulbaVotes);
console.log(squirtleVotes);
console.log(charVotes);