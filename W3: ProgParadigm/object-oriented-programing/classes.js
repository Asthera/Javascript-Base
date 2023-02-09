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

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

var train4 = new Train("red", false);

train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
