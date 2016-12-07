/*

  Zedrick Ara
  Arrays and Objects
  Dec 5, 2016

*/

// variables
// ARRAYS
var numbers = [1,2,3,4,5,6,7,8,9,10];
var names = ["Senior Tan", "Zakattak", "Yolo Baggins", "Ohai", "Basic Jeff"];
var colors = ["light black", "ron burgandy", "highlighter"];
var adj = ["smart", "special case", "yummy", "tiny whiny", "ferocious"];
var slang = ["scrap", "kobe beef", "da kine", "li dat", "pau hana"];


// OBJECTS

var donut = {
  toppings : ["sprinkles", "chocolate frosting", "o'hare air"],
  fillings : "jelly",
  shape : "square",
  count : 12
}

//Array Function

function amazing (wow) {
  console.log (numbers[0] + numbers[1])
}
amazing (numbers)

//For Loop

function lol (rofl) {
  if (rofl == "chocolate frosting") {
    console.log ("There are " + donut.toppings[1] + " on my donut.");
  }
  else {
    console.log ("There are " + donut.topping[0] + " on my donut.")
  }
}

lol (donut.toppings[1])