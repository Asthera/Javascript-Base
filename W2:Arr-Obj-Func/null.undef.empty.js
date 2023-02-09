// null

// foo is known to exist now but it has no type or value:
const foo = null;
foo; //null

// empty string
var str = "";
// undef
var x;

if (x === null) {
  console.log("null");
} else if (x === undefined) {
  console.log("undefined");
} else {
  console.log("ok");
}
