/*
According to Pythagoras theorem,  square of hypotenuse is equal to the sum of the two squares on the legs. 
By Using this concept create an algorithm that reads the two legs as well as the hypotenuse and returns what type of triangle is: acute, obtuse or right.

Example 1
Input: leg1 = 17, leg2 = 13, hypo = 23 --> (23^2 = 17^2 + 13^2) --> (529 = 289 + 169) --> (529 = 458) --> (529 > 458) --> obtuse triangle
Output: 
This is an Obtuse Triangle

Example 2
Input: leg1 = 45, leg2 = 55, hypo = 70 --> (70^2 = 45^2 + 55^2) --> (4900 = 2025 + 3025) --> (4900 = 5050) --> (4900 < 5050) --> acute triangle
Output: 
This is an Acute Triangle

Example 3
Input: leg1 = 80, leg2 = 84, hypo = 116 --> (116^2 = 80^2 + 84^2) --> (13456 = 6400 + 7056) --> (13456 = 13456) --> (13456 = 13456) --> right triangle
Output: 
This is a Right Triangle
*/

function typeOfTriangle(triangle) {
  const { hypo, leg1, leg2 } = triangle;
  const hypoSquared = hypo ** 2;
  const firstLegSquared = leg1 ** 2;
  const secondLegSquared = leg2 ** 2;

  if (hypo <= 0 || leg1 <= 0 || leg2 <= 0) {
    return 'Invalid triangle dimensions';
  }

  return hypoSquared == firstLegSquared + secondLegSquared
    ? 'a Right Triangle'
    : hypoSquared > firstLegSquared + secondLegSquared
    ? 'an Obtuse Triangle'
    : 'an Acute Triangle';
}

const triangle1 = {
  hypo: 23,
  leg1: 17,
  leg2: 13,
};

const triangle2 = {
  hypo: 70,
  leg1: 45,
  leg2: 55,
};

const triangle3 = {
  hypo: 116,
  leg1: 80,
  leg2: 84,
};

const triangle4 = {
  hypo: 0,
  leg1: -1,
  leg2: -23,
};

// Test Cases
console.log('This is', typeOfTriangle(triangle1));
console.log('This is', typeOfTriangle(triangle2));
console.log('This is', typeOfTriangle(triangle3));
console.log('This is', typeOfTriangle(triangle4));

module.exports = typeOfTriangle;
