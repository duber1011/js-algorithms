describe('binarySearch', () => {
  const binarySearch = require('../../src/exercises/binary-search');

  test('should return the index and count of keys examined for a found number', () => {
    const numberList = [
      10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98,
    ];
    const numberToFind = 48;
    const result = binarySearch(numberList, numberToFind);
    expect(result.index).toBe(8);
    expect(result.count).toBe(4);
  });

  test('should return -1 and count of keys examined for a not found number', () => {
    const numberList = [
      10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98,
    ];
    const numberToFind = 100;
    const result = binarySearch(numberList, numberToFind);
    expect(result.index).toBe(-1);
    expect(result.count).toBe(4);
  });
  test('should return -1 and count of keys examined for an empty list', () => {
    const numberList = [];
    const numberToFind = 100;
    const result = binarySearch(numberList, numberToFind);
    expect(result.index).toBe(-1);
    expect(result.count).toBe(0);
  });
  test('should return the index and count of keys examined for the first element', () => {
    const numberList = [
      10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98,
    ];
    const numberToFind = 10;
    const result = binarySearch(numberList, numberToFind);
    expect(result.index).toBe(0);
    expect(result.count).toBe(4);
  });
});
