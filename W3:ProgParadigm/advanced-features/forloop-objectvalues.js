const colors = ["red", "orange", "yellow"];
for (var color in colors) {
  console.log(color);
}

//// Built-in methods

// Object.keys()

const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2)); // ['speed','color']

// Object.values()

const car3 = {
  speed: 300,
  color: "yellow",
};
console.log(Object.values(car3)); // [300, 'yellow']

// Object.entries()

const car4 = {
  speed: 400,
  color: "magenta",
};
console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]

// using brakets
var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (key in Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]);
}

function testBracketsDynamicAccess() {
  var dynamicKey;
  if (Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }

  var drone = {
    speed: 15,
    color: "orange",
  };

  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
