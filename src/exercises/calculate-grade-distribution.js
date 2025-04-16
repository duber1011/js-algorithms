/*Write a function named calculateGradeDistribution that takes an array of student objects as a parameter. Each student object should have two properties: name (string) and grade (number). The function should calculate and return a distribution of the number of students in each grade range.

The grade ranges are as follows:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59

Example :
Input: students = [ { name: "John", grade: 85 }, { name: "Emma", grade: 95 }, { name: "Michael", grade: 72 }, { name: "Sophia", grade: 68 }, { name: "Ryan", grade: 90 }];

Output: { A: 2, B: 1, C: 1, D: 1, F: 0 }

Explanation: There are 2 students in group A (90-100), 1 student in group B (80-89), 1 student in group C (70-79), 1 student in group D (60-69) and 0 students in group F (0-59).
*/

function calculateGradeDistribution(students) {
  const result = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0,
  };

  for (const student of students) {
    const grade = student.grade;

    if (grade >= 90 && grade <= 100) {
      result.A++;
    } else if (grade >= 80 && grade < 90) {
      result.B++;
    } else if (grade >= 70 && grade < 80) {
      result.C++;
    } else if (grade >= 60 && grade < 70) {
      result.D++;
    } else if (grade >= 0 && grade < 60) {
      result.F++;
    }
  }

  return result;
}

// Example usage:
const students = [
  { name: 'John', grade: 85 },
  { name: 'Emma', grade: 95 },
  { name: 'Michael', grade: 72 },
  { name: 'Sophia', grade: 68 },
  { name: 'Ryan', grade: 90 },
];

console.log(calculateGradeDistribution(students)); // Expected Output: { A: 2, B: 1, C: 1, D: 1, F: 0 }

module.exports = calculateGradeDistribution;
