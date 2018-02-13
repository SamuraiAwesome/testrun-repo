var name=prompt("Please enter your name");
var hello=function (name){
    alert("Hello," + " " + name);
};
hello(name);
var happen=confirm("Did something exciting happen today?");
if (happen ==true) {
    alert("Well, that's just great for you, "+ name);
}
else{
    alert("I hope you have a great day!");
}
var animal =prompt("Pick an animal");
var doYouLike =function(item){
 var like = confirm("Do you like "+ item +"s?");
  if (like == true) {
      alert("So do I!");
  }
};
doYouLike(animal);
alert("Now let's calculate the perimeter of a 2D box!");
var perimeterBox = function(length, width){
 var p = length * 2 + width * 2 ;
 alert("Your 2D box has a perimeter of "+ p +" feet.");
};
var l = prompt("Choose a number");
var w = prompt("Choose another number");
perimeterBox(l, w);
