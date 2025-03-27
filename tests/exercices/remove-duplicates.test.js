describe('Remove Duplicates', () => {
  const removeDuplicates = require('../../src/exercises/remove-duplicates');

  test('Example 1', () => {
    expect(removeDuplicates([-1, -1, 0, 1, 1, 2])).toEqual(4);
  });

  test('Example 2', () => {
    expect(removeDuplicates([10, 15, 18, 15, 22])).toEqual(5);
  });

  test('Example 3', () => {
    expect(removeDuplicates([1, 1, 1, 1, 1])).toEqual(1);
  });

  test('Example 4', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5])).toEqual(5);
  });

  test('Example 5', () => {
    expect(removeDuplicates([])).toEqual(0);
  });
});
