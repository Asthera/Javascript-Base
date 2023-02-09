function Greeting(a, b) {
  console.log(a + ", " + b);
}
Greeting("Hello", "World");

function Add(a, b) {
  return a + b;
}
console.log(Add(3, 2));

var train = ["wheat", "barley", "potato"];
for (var i = 1; i <= train.length; i++) {
  console.log(Add("In ", i), Add("carriage - ", train[i]));
}

// Empty obj
var storeManager = {};
// Assigment value to property key
storeManager.greeting = "Lets make some money";
storeManager.health = 30;

var assistantManager = {
  greeting: "Haloo",
  health: 30,
};
assistantManager.fu = Add;
// brackets notation
assistantManager["greeting"] = "HI";
console.log(assistantManager);
console.log(assistantManager.fu(1, 2));

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push("pear"); // ['apple', 'pear']
fruits.pop();
console.log(fruits); // ['apple']

// methods
// find index of value
var result = "Hello".indexOf("l");
console.log("Index of l in Hello is " + result);
// adding
var clothes = [];
clothes.push("gray t-shirt");
// math method
/**
 * @todo Add func cheatsheet from course
 * @todo Add string cheatsheet
 */

// obj method
var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function () {
  console.log("engine running");
};

// typeof operator
console.log(typeof car.color);
console.log(typeof fruits);
