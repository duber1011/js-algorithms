describe('Merge Intervals', () => {
  const mergeIntervals = require('../../src/exercises/merge-intervals');

  test('Example 1', () => {
    expect(
      mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  test('Example 2', () => {
    expect(
      mergeIntervals([
        [1, 3],
        [4, 10],
        [6, 12],
        [11, 18],
      ])
    ).toEqual([
      [1, 3],
      [4, 18],
    ]);
  });

  test('Example 3', () => {
    expect(
      mergeIntervals([
        [1, 4],
        [4, 5],
      ])
    ).toEqual([[1, 5]]);
  });
});
