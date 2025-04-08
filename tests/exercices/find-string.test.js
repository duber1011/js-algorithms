describe('findString', () => {
  const findWordsInText = require('../../src/exercises/find-string');

  test('should return an array with the lines where the string appears', () => {
    const text = `Hello, world,
    this is a test string.
    It contains multiple lines.`;
    const words = ['world'];
    expect(findWordsInText(text, words)).toEqual(['Hello, world,']);
  });

  test('should return an array with the two first lines where the string appears', () => {
    const text = `Hello, world everone,
the world is beatuful.
Enjoy it.`;
    const words = ['world'];
    expect(findWordsInText(text, words)).toEqual([
      'Hello, world everone,',
      'the world is beatuful.',
    ]);
  });

  test('should return an array with all the lines where the two strings appears', () => {
    const text = `Hello, world everone,
the world is beatuful.
Enjoy it.`;
    const words = ['world', 'it'];
    expect(findWordsInText(text, words)).toEqual([
      'Hello, world everone,',
      'the world is beatuful.',
      'Enjoy it.',
    ]);
  });
});
