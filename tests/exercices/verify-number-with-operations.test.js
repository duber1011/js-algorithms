describe('verifyNumberWithOperations', () => {
  const verifyNumberWithOperations = require('../../src/exercises/verify-number-with-operations');

  test('should return true for input [1, 2, 3, 4] and target 21', () => {
    expect(verifyNumberWithOperations([1, 2, 3, 4], 21)).toBe(true);
  });

  test('should return true for input [4, 3, 2, 5] and target 33', () => {
    expect(verifyNumberWithOperations([4, 3, 2, 5], 33)).toBe(false);
  });

  test('should return false for input [3, 4, 2] and target 5', () => {
    expect(verifyNumberWithOperations([3, 4, 2], 5)).toBe(true);
  });
});
