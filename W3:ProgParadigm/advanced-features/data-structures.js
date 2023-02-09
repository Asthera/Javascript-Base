//// -- Working with arrays

// The forEach() method

const fruits = ["kiwi", "mango", "apple", "pear"]; // 0. kiwi
function appendIndex(fruit, index) {
  // 1. mango
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

// The filter() method

const nums = [0, 10, 20, 30, 40, 50];
nums
  .filter(function (num) {
    // [30,40,50]
    return num > 20;
  })

  [
    // The map method

    (0, 10, 20, 30, 40, 50)
  ].map(function (num) {
    return num / 10; // [0,1,2,3,4,5]
  });

//// -- Working with Objects

const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result); // ['speed',100,'color','yellow']

//// -- Working with Maps

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); // Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

bestBoxers.get(1); // 'The Champion'

//// --  Working with Sets

const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits); // {'apple', 'pear', 'plum'}
