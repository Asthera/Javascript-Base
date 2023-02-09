// semi-colon - ;

var name = "World";
console.log("%c" + name[0], "color: red; font-size: 30px");

// string, num, null, undefined, BigInt, Symbol

// === check data and type
// == only data
// ||, &&, !  like in c, c#
// true, false - Boolean

console.log(100 == "100");
console.log(100 === "100");

if (100 == "100") {
  console.log("== say that 100 and '100' is same");
}

// can string + number + bool
console.log(1 + "00" + true);

// uses === for switch

switch ("100") {
  case 100:
    console.log("same");
    break;
  case "100":
    console.log("uses strict");
  default:
    console.log("default");
}

// loops like c :D
var i = 1;

for (i; i < 4; i++) {
  console.log(i);
}

while (i < 8) {
  console.log(i);
  i++;
}

var cubes = "ABCDEFG";
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
  var styles =
    "font-size: 40px; border-radius: 50px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles);
}
