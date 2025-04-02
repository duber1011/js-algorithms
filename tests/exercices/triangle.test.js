describe('Triangle', () => {
  const triangle = require('../../src/exercises/triangle');

  test('Example 1', () => {
    expect(triangle([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
  });

  test('Example 2', () => {
    expect(triangle([[-1], [2, 3], [1, -1, -3]])).toBe(-1);
  });
});
