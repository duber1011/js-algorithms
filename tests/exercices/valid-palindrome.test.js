describe('ValidPalindrome', () => {
  const validPalindrome = require('../../src/exercises/valid-palindrome');

  test('should return true if the string is a palindrome', () => {
    expect(validPalindrome('Able was I, ere I saw Elba.')).toBe(true);
    expect(validPalindrome('12321')).toBe(true);
  });
  test('should return false if the string is not a palindrome', () => {
    expect(validPalindrome('Hello World!')).toBe(false);
  });
});
