/*
Challenge name: Remove Duplicates from Sorted Array
Description: 
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory. 		

Example 1:
Input: A = [-1, -1, 0, 1, 1,  2]
Output:  	length = 4, and A is now [-1,0,1,2]. 
	

   Example 2:
Input: S = [10,15,18,15,22]
Output:  	length = 4, and S is now [10,15,18,22]. 
*/

function removeDuplicates(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(removeDuplicates([-1, -1, 0, 1, 1, 2])); // 4
console.log(removeDuplicates([10, 15, 18, 15, 22])); // 5
console.log(removeDuplicates([1, 1, 1, 1, 1])); // 1
console.log(removeDuplicates([1, 2, 3, 4, 5])); // 5
console.log(removeDuplicates([])); // 0

module.exports = removeDuplicates;
