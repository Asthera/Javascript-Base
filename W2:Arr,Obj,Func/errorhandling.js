function myFunc() {
  var num = 50;
  try {
    alert("Value of variable a is : " + num);
  } catch (error) {
    alert("Error: " + error.description);
  } finally {
    alert("Finally, block will always execute!");
  }
}
myFunc();

function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log(err);
  }
}
