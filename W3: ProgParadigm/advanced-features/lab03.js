// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (a of dairy) {
    console.log(a);
  }
}
logDairy();
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
// Task 2
function birdCan() {
  for (a of Object.entries(bird)) {
    console.log(a[0] + ": " + a[1]);
  }
}
birdCan();
// Task 3
function animalCan() {
  birdCan();
  for (a of Object.entries(animal)) {
    console.log(a[0] + ": " + a[1]);
  }
}
animalCan();
