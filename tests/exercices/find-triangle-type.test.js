describe('findTriangleType', () => {
  const findTriangleType = require('../../src/exercises/find-triangle-type');

  test('should return "an Obtuse Triangle" for obtuse triangle', () => {
    const triangle = {
      hypo: 23,
      leg1: 17,
      leg2: 13,
    };
    expect(findTriangleType(triangle)).toBe('an Obtuse Triangle');
  });

  test('should return "an Acute Triangle" for acute triangle', () => {
    const triangle = {
      hypo: 70,
      leg1: 45,
      leg2: 55,
    };
    expect(findTriangleType(triangle)).toBe('an Acute Triangle');
  });

  test('should return "a Right Triangle" for right triangle', () => {
    const triangle3 = {
      hypo: 116,
      leg1: 80,
      leg2: 84,
    };
    expect(findTriangleType(triangle3)).toBe('a Right Triangle');
  });

  test('should return "Invalid triangle dimensions" for wrong triangle', () => {
    const triangle4 = {
      hypo: 0,
      leg1: -1,
      leg2: -23,
    };
    expect(findTriangleType(triangle4)).toBe('Invalid triangle dimensions');
  });
});
