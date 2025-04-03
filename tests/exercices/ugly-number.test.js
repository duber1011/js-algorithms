describe('Ugly Number', () => {
  const nthUglyNumber = require('../../src/exercises/ugly-number');

  test('should return the nth ugly number', () => {
    expect(nthUglyNumber(10)).toBe(12);
    expect(nthUglyNumber(1)).toBe(1);
    expect(nthUglyNumber(15)).toBe(24);
    expect(nthUglyNumber(20)).toBe(36);
    expect(nthUglyNumber(30)).toBe(80);
  });

  test('should return the first ugly number', () => {
    expect(nthUglyNumber(1)).toBe(1);
  });
});
