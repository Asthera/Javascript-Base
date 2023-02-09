//      The Benefits of OOP

//  Allows you to write modular code,
//  Makes your code more flexible and
//  Makes your code reusable.

//      The Principles of OOP

//  Inheritance

class Animal {
  /* ...class code here... */
}
class Bird extends Animal {
  /* ...class code here... */
}
class Eagle extends Bird {
  /* ...class code here... */
}

// Encapsulation

"abc".toUpperCase(); // I don't really need to worry or
// even waste time thinking about
// how the toUpperCase() method works

// Abstraction

// Abstraction is all about
// writing code in a way
// that will make it more generalized.

// Polymorphism

const bicycle = {
  bell: function () {
    return "Ring, ring! Watch out, please!";
  },
};
const door = {
  bell: function () {
    return "Ring, ring! Come here, please!";
  },
};

function ringTheBell(thing) {
  console.log(thing.bell());
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"
