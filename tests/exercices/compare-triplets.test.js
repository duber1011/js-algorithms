describe('Compare Triplets', () => {
  const compareTriplets = require('../../src/exercises/compare-triplets');

  test('should return [0, 0] for two empty arrays', () => {
    expect(compareTriplets([], [])).toEqual([0, 0]);
  });

  test('should return [1, 0] for [1, 2, 3] and [1, 2, 2]', () => {
    expect(compareTriplets([1, 2, 3], [1, 2, 2])).toEqual([1, 0]);
  });

  test('should return [0, 1] for [1, 2, 3] and [2, 2, 3]', () => {
    expect(compareTriplets([1, 2, 3], [2, 2, 3])).toEqual([0, 1]);
  });

  test('should return [1, 1] for [1, 2, 3] and [3, 2, 1]', () => {
    expect(compareTriplets([1, 2, 3], [3, 2, 1])).toEqual([1, 1]);
  });

  test('should return [1, 1] for [5, 6, 7] and [3, 6, 10]', () => {
    expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
  });

  test('should return [2, 1] for [17, 28, 30] and [99, 16, 8]', () => {
    expect(compareTriplets([17, 28, 30], [99, 16, 8])).toEqual([2, 1]);
  });

  test('should throw an error for arrays of different lengths', () => {
    expect(() => compareTriplets([1, 2], [1, 2, 3])).toThrow(
      'The array must have the same length!'
    );
  });
});
