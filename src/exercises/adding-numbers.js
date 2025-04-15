/*
Given a list, add up all the numbers in the list. 
Do not use any built in methods like map, forEach and reduce.
use recursion for this challenge.

[2,7,8,3,1,4] Returns 25
*/

function addNumbers(list, index) {
  if (index === list.length) {
    return 0;
  }

  return list[index] + addNumbers(list, index + 1);
}

const list = [2, 7, 8, 3, 1, 4];
const index = 0;

console.log(addNumbers(list, index));

module.exports = addNumbers;
