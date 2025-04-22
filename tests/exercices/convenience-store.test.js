describe('changeEnough', () => {
  const changeEnough = require('../../src/exercises/convenience-store');

  test('should return true if change is enough for item price', () => {
    const change = [25, 20, 5, 0];
    const itemPrice = 4.25;
    expect(changeEnough(change, itemPrice)).toBe(true);
  });

  test('should return false if change is not enough for item price', () => {
    const change = [2, 100, 0, 0];
    const itemPrice = 14.11;
    expect(changeEnough(change, itemPrice)).toBe(false);
  });

  test('should return true if change is exactly equal to item price', () => {
    const change = [0, 0, 20, 5];
    const itemPrice = 0.75;
    expect(changeEnough(change, itemPrice)).toBe(true);
  });

  test('should return true if change is more than enough for item price', () => {
    const change = [30, 40, 20, 5];
    const itemPrice = 12.55;
    expect(changeEnough(change, itemPrice)).toBe(true);
  });

  test('should return false if change is not enough for item price', () => {
    const change = [10, 0, 0, 50];
    const itemPrice = 3.85;
    expect(changeEnough(change, itemPrice)).toBe(false);
  });

  test('should return false if change is not enough for item price', () => {
    const change = [1, 0, 5, 219];
    const itemPrice = 19.99;
    expect(changeEnough(change, itemPrice)).toBe(false);
  });

  test('should return a message becuase array contains a string', () => {
    const change = [2, 3, 7, 'string'];
    const itemPrice = 19.99;
    expect(changeEnough(change, itemPrice)).toBe(
      'The elements within the change array must be positive integers'
    );
  });

  test('should return a message if change is an empty array', () => {
    const change = [];
    const itemPrice = 19.99;
    expect(changeEnough(change, itemPrice)).toBe(
      'The change array must be an array with 4 positive integer values'
    );
  });

  test('should return message if change has less than four elements', () => {
    const change = [45, 10, 0];
    const itemPrice = 19.99;
    expect(changeEnough(change, itemPrice)).toBe(
      'The change array must be an array with 4 positive integer values'
    );
  });

  test('should return message if change has at least a negative element', () => {
    const change = [45, 10, 0, -5];
    const itemPrice = 19.99;
    expect(changeEnough(change, itemPrice)).toBe(
      'The elements within the change array must be positive integers'
    );
  });
});
