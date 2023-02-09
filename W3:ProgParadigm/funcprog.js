// In functional programming,
// data and functions that operate
// on it are clearly separated, not combined inside objects.

var currency = [100, 0];
var exhangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}
currency[1] = convertCurrency(currency[0], exhangeRate);
console.log(currency);
