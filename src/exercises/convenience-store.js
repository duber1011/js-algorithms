/*
Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. 
Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

Notes:

quarter: 25 cents / $0.25
dime: 10 cents / $0.10
nickel: 5 cents / $0.05
penny: 1 cent / $0.01

Examples:

changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true

changeEnough([30, 40, 20, 5], 12.55) ➞ true

changeEnough([10, 0, 0, 50], 3.85) ➞ false

changeEnough([1, 0, 5, 219], 19.99) ➞ false
*/

function changeEnough(change, itemPrice) {
  const [quarters, dimes, nickels, pennies] = change;

  if (change.length !== 4 || !Array.isArray(change) || change.length === 0) {
    return 'The change array must be an array with 4 positive integer values';
  }

  for (let i = 0; i < change.length; i++) {
    if (
      typeof change[i] !== 'number' ||
      !Number.isInteger(change[i]) ||
      change[i] < 0
    ) {
      return 'The elements within the change array must be positive integers';
    }
  }
  const changeAvailable =
    (quarters * 25 + dimes * 10 + nickels * 5 + pennies * 1) / 100;

  // console.log('changeAvailable ==> ', changeAvailable);

  return changeAvailable >= itemPrice ? true : false;
}

const change = [25, 20, 5, 0];
const itemPrice = 4.25;

// const change = [2, 100, 0, 0];
// const itemPrice = 14.11;

// const change = [0, 0, 20, 5];
// const itemPrice = 0.75;

// const change = [30, 40, 20, 5];
// const itemPrice = 12.55;

// const change = [10, 0, 0, 50];
// const itemPrice = 3.85;

// const change = [1, 0, 5, 219];
// const itemPrice = 19.99;

// const change = [2, 3, 7, "string"];
// const itemPrice = 19.99;

// const change = [];
// const itemPrice = 19.99;

// const change = [45, 10, 0];
// const itemPrice = 19.99;

// const change = [45, 10, 0, -5];
// const itemPrice = 19.99;

// const change = [65, 17, 36, 24];
// const itemPrice = 19.99;

console.log(changeEnough(change, itemPrice));

module.exports = changeEnough;
