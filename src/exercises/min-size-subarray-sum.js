/*
Challenge name: minimum-size-subarray-sum
Description: 
Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn’t one, return [0] instead. 
		
Example 1:
Input: array= [2,3,1,2,4,3]  s=7
Output:  [4,3]

Example 2:
Input: array= [2,6,5,6,7,9,10]  s=22
Output:  [5,7,10]

Example 3:
Input: array= [1,2,3,4,5]  s=16
Output:  [0]
*/

function minSubarraySum(arr, s) {
  let left = 0,
    sum = 0,
    minLength = Infinity,
    subarray = [];

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= s) {
      let currentLength = right - left + 1;
      if (currentLength < minLength) {
        minLength = currentLength;
        subarray = arr.slice(left, right + 1);
      }
      sum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? [0] : subarray;
}

console.log(minSubarraySum([2, 3, 1, 2, 4, 3], 7)); // [4,3]
console.log(minSubarraySum([2, 6, 5, 6, 7, 9, 10], 22)); // [6, 7, 9]
console.log(minSubarraySum([1, 2, 3, 4, 5], 16)); // [0]

module.exports = minSubarraySum;
