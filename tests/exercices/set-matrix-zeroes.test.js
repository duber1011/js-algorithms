describe('Set Matrix Zeroes', () => {
  const setMatrixZeroes = require('../../src/exercises/set-matrix-zeroes');

  test('Example 1', () => {
    const matrix = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 0, 1, 1],
      [0, 1, 1, 1],
    ];
    setMatrixZeroes(matrix, 10);
    expect(matrix).toEqual([
      [0, 1, 1, 1],
      [0, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 1, 1, 1],
    ]);
  });

  test('Example 2', () => {
    const matrix = [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 1, 0, 1],
      [1, 0, 0, 1],
    ];
    setMatrixZeroes(matrix, 2);
    expect(matrix).toEqual([
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 1, 0, 1],
      [1, 0, 0, 1],
    ]);
  });

  test('Example 3', () => {
    const matrix = [
      [0, 1, 1, 1],
      [1, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 1, 1, 1],
    ];
    setMatrixZeroes(matrix, 4);
    expect(matrix).toEqual([
      [0, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 1],
    ]);
  });

  // this is another way to write the test
  test('Example 4', () => {
    expect(
      setMatrixZeroes(
        [
          [0, 1, 1, 1],
          [1, 0, 1, 0],
          [1, 1, 1, 0],
          [0, 1, 1, 1],
        ],
        8
      )
    ).toEqual([
      [0, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 1, 1, 1],
    ]);
  });

  // test with only 1s matrix
  test('example 5', () => {
    const matrix = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    setMatrixZeroes(matrix, 7);
    expect(matrix).toEqual([
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ]);
  });
});
