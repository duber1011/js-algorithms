describe('calculateGradeDistribution', () => {
  const calculateGradeDistribution = require('../../src/exercises/calculate-grade-distribution');

  it('should return the correct grade distribution for a given array of students', () => {
    const students = [
      { name: 'John', grade: 85 },
      { name: 'Emma', grade: 95 },
      { name: 'Michael', grade: 72 },
      { name: 'Sophia', grade: 68 },
      { name: 'Ryan', grade: 90 },
    ];

    const expectedOutput = { A: 2, B: 1, C: 1, D: 1, F: 0 };
    expect(calculateGradeDistribution(students)).toEqual(expectedOutput);
  });

  it('should return the correct grade distribution with all students in one grade range', () => {
    const students = [
      { name: 'Alice', grade: 95 },
      { name: 'Bob', grade: 92 },
      { name: 'Charlie', grade: 90 },
      { name: 'David', grade: 98 },
      { name: 'Eve', grade: 100 },
    ];
    const expectedOutput = { A: 5, B: 0, C: 0, D: 0, F: 0 };
    expect(calculateGradeDistribution(students)).toEqual(expectedOutput);
  });

  it('should return an empty distribution for an empty array', () => {
    const students = [];
    const expectedOutput = { A: 0, B: 0, C: 0, D: 0, F: 0 };
    expect(calculateGradeDistribution(students)).toEqual(expectedOutput);
  });
});
