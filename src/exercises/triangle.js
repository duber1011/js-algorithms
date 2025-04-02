/*
Description: 
Given a triangle, find the minimum path sum from top to bottom. Each step you may
move to adjacent numbers on the row below.
For example, given the following triangle:

[
    [2],
   [3,4],
  [6,5,7],
[4,1,8,3]
]

The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
Note: Bonus point if you are able to do this using only O(n) extra space, where n is
the total number of rows in the triangle.
*/

const minimumTotal = (triangle) => {
  const rows = triangle.length;
  const dp = triangle[rows - 1];

  for (let i = rows - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
    }
  }

  return dp[0];
};

module.exports = minimumTotal;

// Test case
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // Output: 11
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]])); // Output: -1
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3], [1, 2, 3, 4]])); // Output: 0
console.log(minimumTotal([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]])); // Output: 14
