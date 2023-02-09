class Car {
  constructor(color, speed) {
    this.speed = speed;
    this.color = color;
  }
  turboOn() {
    let txt =
      "Turbo is on, in you " + this.color + "car at speed - " + this.speed;
    console.log(txt);
  }
}

var Maybach = new Car("Red", 100);
Maybach.turboOn();
