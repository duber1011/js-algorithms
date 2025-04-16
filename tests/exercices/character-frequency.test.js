describe('Character Frequency', () => {
  const characterFrequency = require('../../src/exercises/character-frequency');

  test('should return an empty object for an empty string', () => {
    expect(characterFrequency('')).toEqual([]);
  });

  test('should return the correct frequency for a single character', () => {
    expect(characterFrequency('a')).toEqual([['a', 1]]);
  });

  test('should return the correct frequency for multiple characters', () => {
    expect(characterFrequency('mississippi')).toEqual([
      ['i', 4],
      ['s', 4],
      ['p', 2],
      ['m', 1],
    ]);
  });

  test('should return the correct frequency for multiple characters ordered by character', () => {
    expect(characterFrequency('miaaiaaippi')).toEqual([
      ['a', 4],
      ['i', 4],
      ['p', 2],
      ['m', 1],
    ]);
  });

  test('should return the correct frequency for multiple characters ordered by frequency and character', () => {
    expect(characterFrequency('mmmaaaiiibbb')).toEqual([
      ['a', 3],
      ['b', 3],
      ['i', 3],
      ['m', 3],
    ]);
  });
});
