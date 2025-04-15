describe('addingNumbers', () => {
  const addingNumbers = require('../../src/exercises/adding-numbers');

  test('should return the sum of the positive numbers', () => {
    const list1 = [5, 3, 0];
    const result = addingNumbers(list1, (index = 0));
    expect(result).toBe(8);
  });

  test('should return zero', () => {
    const list2 = [];
    const result = addingNumbers(list2, (index = 0));
    expect(result).toBe(0);
  });

  test('should return the sum of a positive and negative numbers', () => {
    const list3 = [5, 7, 10, 15, 3, -5];
    const result = addingNumbers(list3, (index = 0));
    expect(result).toBe(35);
  });

  test('should return the sum of a negative numbers', () => {
    const list4 = [-5, -7, -10, -15, -3];
    const result = addingNumbers(list4, (index = 0));
    expect(result).toBe(-40);
  });
});
