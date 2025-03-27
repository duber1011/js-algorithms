describe('Recursivity Without Multiply', () => {
  const multiply = require('../../src/exercises/recursivity-without-multiply');

  test('Example 1', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('Example 2', () => {
    expect(multiply(-4, 5)).toBe(-20);
  });

  test('Example 3', () => {
    expect(multiply(4, -5)).toBe(-20);
  });

  test('Example 4', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test('Example 5', () => {
    expect(multiply(1, 5)).toBe(5);
  });

  test('Example 6', () => {
    expect(multiply(0, 5)).toBe(0);
  });
});
