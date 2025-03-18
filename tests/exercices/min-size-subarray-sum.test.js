describe('Min Size Subarray Sum', () => {
  const minSizeSubarraySum = require('../../src/exercises/min-size-subarray-sum');

  test('Example 1', () => {
    expect(minSizeSubarraySum([2, 3, 1, 2, 4, 3], 7)).toEqual([4, 3]);
  });

  test('Example 2', () => {
    expect(minSizeSubarraySum([2, 6, 5, 6, 7, 9, 10], 22)).toEqual([6, 7, 9]);
  });

  test('Example 3', () => {
    expect(minSizeSubarraySum([1, 2, 3, 4, 5], 16)).toEqual([0]);
  });
});
