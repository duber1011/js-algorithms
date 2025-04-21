/*
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, 
awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.

Comparison points is the total points a person earned.
Given a and b, determine their respective comparison points.

Example:
compareTriplets([1, 2, 3], [3, 2, 1]); // [1, 1]
compareTriplets([5, 6, 7], [3, 6, 10]); // [1, 1]
compareTriplets([17, 28, 30], [99, 16, 8]); // [2, 1]
*/

function compareTriplets(person1, person2) {
  let a = 0;
  let b = 0;

  if (person1.length !== person2.length) {
    throw new Error('The array must have the same length!');
  }

  for (let i = 0; i < person1.length; i++) {
    if (person1[i] > person2[i]) {
      a++;
    } else if (person1[i] < person2[i]) {
      b++;
    }
  }

  return [a, b];
}

// const alice = [1, 2, 3];
// const bob = [3, 2, 1];

// const alice = [5, 6, 7];
// const bob = [3, 6, 10];

const alice = [17, 28, 30];
const bob = [99, 16, 8];

console.log(compareTriplets(alice, bob));

module.exports = compareTriplets;
