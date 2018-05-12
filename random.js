var display = document.getElementById("display");
var rand = 0;
function randomize(){
    rand= Math.round(Math.random() * 7);
}
alert("Hi! I'm Randy!");
alert("I'll do something random!");
randomize();
switch (rand) {
    case 1:
        display.innerHTML = "<img src='Pokemon Fan Created Sites/images/pokeball.jpg'>";
        break;
    case 2:
        display.innerHTML = "<h1>BANANAS ARE DELICIOUS</h1>";
        break;
    case 3:
        display.innerHTML = "<img src='scaryface.jpg'>";
        break;
    case 4:
        display.innerHTML = "<h1>Error 404</h1><p>Oops! We must have lost your file somewhere.</p>";
        break;
    case 5:
        display.innerHTML = "<img src='Pokemon Fan Created Sites/images/losermom/cosmog.jpg'>";
        break;
    case 6:
        display.innerHTML = "<img src='scaryface.jpg'>";
        window.setTimeout(1,display.innerHTML = "<h1>Error 404</h1><p>Oops! We must have lost your file somewhere.</p>");
    default:
        alert("BEEEEEEEEEEELCH");
}
//display.innerHTML = "<img src='Pokemon Fan Created Sites/images/pokeball.jpg'>";