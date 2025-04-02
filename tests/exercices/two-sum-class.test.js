describe('TwoSum', () => {
  const TwoSum = require('../../src/exercises/two-sum-class');

  test('should return the correct pair of indexes that sum the target', () => {
    const twoSum = new TwoSum();
    twoSum.add(2);
    twoSum.add(24);
    twoSum.add(11);
    twoSum.add(5);

    expect(twoSum.find(29)).toEqual([2, 4]);
    expect(twoSum.find(13)).toEqual([1, 3]);
    expect(twoSum.find(36)).toEqual([]);
    expect(twoSum.find(26)).toEqual([1, 2]);
    expect(twoSum.find(7)).toEqual([1, 4]);
    expect(twoSum.find(9)).toEqual([]);
  });
});
