/*
Multiply using recursivity without multiply operator

Description: 

Given two integers, use a recursive function to multiply them without using the multiplication operator. Integers can be positive or negative or zeros.


Result Examples

	Multiply(4,5) ->  20
	Multiply(-4,5) ->  -20
	Multiply(4,-5) ->  -20
	Multiply(-4,-5) ->  20
	Multiply(1,5) ->  5
	Multiply(0,5) ->  0
*/

function multiply(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }

  if (b > 0) {
    return a + multiply(a, b - 1);
  }

  return -multiply(a, -b);
}

console.log(multiply(4, 5)); // 20
console.log(multiply(-4, 5)); // -20
console.log(multiply(4, -5)); // -20
console.log(multiply(-4, -5)); // 20
console.log(multiply(1, 5)); // 5
console.log(multiply(0, 5)); // 0

module.exports = multiply;
