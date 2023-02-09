/*
  The keywords let and var both declare
  new variables in JavaScript. The difference 
  between let and var is in the scope of the variables they create:

  1.let are only available inside the block where they’re defined.
  2.var are available throughout the function in which they’re declared.
*/

function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}
