/*
Challenge name: Set Matrix Zeroes
Description: 
Given a array of ones and zeros and a target position within the matrix, you need to verify whether there is at least one zero in the row where the target is located. 
If this condition is met, you should transform that entire row into zeros. Following this, if the column corresponding to the first position in the row where 
the target is located contains at least one zero, you should mark the entire column with zeros.
Example 1:
4 x 4 matrix
[1, 1, 1, 1]
[1, 1, 1, 1]
[1, 0, 1, 1]
[0, 1, 1, 1]
Target:10
Output:
[0, 1, 1, 1]
[0, 1, 1, 1]
[0, 0, 0, 0]
[0, 1, 1, 1]

Example 2:
4 x 4 matrix
[1, 1, 1, 1]
[1, 0, 0, 0]
[1, 1, 0, 1]
[1, 0, 0, 1]
Target:2
Output:
[1, 1, 1, 1]
[1, 0, 0, 0]
[1, 1, 0, 1]
[1, 0, 0, 1]

Example 3:
4 x 4 matrix
[0, 1, 1, 1]
[1, 0, 1, 0]
[1, 1, 1, 0]
[0, 1, 1, 1]
Target:4
Output:
[0, 1, 1, 1]
[0, 0, 0, 0]
[0, 1, 1, 0]
[0, 1, 1, 1]
*/

function setMatrixZeroes(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let row = Math.floor(target / cols);

  let hasZeroInRow = matrix[row].includes(0);

  if (hasZeroInRow) {
    for (let j = 0; j < cols; j++) {
      matrix[row][j] = 0;
    }
  }

  let hasZeroInFirstColumn = false;
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      hasZeroInFirstColumn = true;
      break;
    }
  }

  if (hasZeroInFirstColumn) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}

console.log(
  setMatrixZeroes(
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 0, 1, 1],
      [0, 1, 1, 1],
    ],
    10
  )
);
console.log(
  setMatrixZeroes(
    [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 1, 0, 1],
      [1, 0, 0, 1],
    ],
    2
  )
);
console.log(
  setMatrixZeroes(
    [
      [0, 1, 1, 1],
      [1, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 1, 1, 1],
    ],
    4
  )
);

// extra test
console.log(
  setMatrixZeroes(
    [
      [0, 1, 1, 1],
      [1, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 1, 1, 1],
    ],
    8
  )
);

module.exports = setMatrixZeroes;
