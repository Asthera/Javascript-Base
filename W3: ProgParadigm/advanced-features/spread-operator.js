function myFunction(x, y, z) {
  console.log(x, y, z);
}
const args = [0, 1, 2];
myFunction(...args); // 0 1 2
// myFunction(args); -- [0, 1, 2] undefined undefined

const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar); // {wings: 2, wheels: 4}

const meal = ["soup", "steak", "ice cream"];
let [starter] = meal;
console.log(starter);
