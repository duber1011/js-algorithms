/*
Description: 
Create a code that prints all numbers in a range without the use of any loop (for, foreach, while, do, etc)


Input example:
PrintNumbersWithNoLoops(0, 10)

Output: 
0,1,2,3,4,5,6,7,8,9,10
*/

const printNumbersWithNoLoops = (start, end) => {
  if (start <= end) {
    console.log(start);
    printNumbersWithNoLoops(start + 1, end);
  }
};

printNumbersWithNoLoops(0, 10);

module.exports = printNumbersWithNoLoops;
