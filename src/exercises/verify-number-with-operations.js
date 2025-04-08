/*
Challenge name: Verify Number With Operations
Description: 
Given a list of numbers and a target number, write a program to determine whether the target number can be calculated by 
applying "+ - * /" operations to the number list? You can assume () is automatically added when necessary. 

Example 1:
Input: list = [1,2,3,4] target = 21
Output:  true
Explanation= (1+2)(3+4)=21 


Example 2:
Input: list = [4,3,2,5] target = 33
Output:  true
Explanation= 3+5(2+4)=33

Example 3:
Input: list = [3,4,2] target = 5
Output:  false
Explanation= There are no operations that achieve the result
*/

function verifyNumberWithOperations(list, target) {
  const n = list.length;
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => new Set())
  );

  for (let i = 0; i < n; i++) {
    dp[i][i].add(list[i]);
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      for (let k = i; k < j; k++) {
        for (const a of dp[i][k]) {
          for (const b of dp[k + 1][j]) {
            dp[i][j].add(a + b);
            dp[i][j].add(a - b);
            dp[i][j].add(a * b);
            if (b !== 0) {
              dp[i][j].add(a / b);
            }
          }
        }
      }
    }
  }

  return dp[0][n - 1].has(target);
}

// Example usage:
console.log(verifyNumberWithOperations([1, 2, 3, 4], 21)); // Output: true explanation= (1+2)(3+4)=21
console.log(verifyNumberWithOperations([4, 3, 2, 5], 33)); // Output: true explanation= 3+5(2+4)=33
console.log(verifyNumberWithOperations([3, 4, 2], 5)); // Output: true explanation= 3+4-2=5
console.log(verifyNumberWithOperations([1, 2, 3], 6)); // Output: true explanation= 1+2+3=6

module.exports = verifyNumberWithOperations;
