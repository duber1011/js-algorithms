/*
Challenge name: Two-Sum-II-Data-Structure-design
Description: Designed and implemented a TwoSum class. This class should support the following operations: add and find. 
add: Adds the number to an internal data structure. find: Finds if there exists a pair of numbers whose sum is equal to the given value. 
Please note that your returned answers (both index1 and index2) are not zero-based. 

Example:
add function
Input: The numbers that will be entered into the data structure.

find function
Starting from the array created in the previous function, which is as follows: [2,24,11,5]
	Input: target = 29
Output: index1=2, index2=4
*/
class TwoSum {
  constructor() {
    this.nums = [];
  }

  add(number) {
    this.nums.push(number);
  }

  find(target) {
    const map = new Map();

    for (let i = 0; i < this.nums.length; i++) {
      const complement = target - this.nums[i];

      if (map.has(complement)) {
        return [map.get(complement), i + 1];
      }

      map.set(this.nums[i], i + 1);
    }

    return [];
  }
}

// Example test cases
const twoSum = new TwoSum();
twoSum.add(2);
twoSum.add(24);
twoSum.add(11);
twoSum.add(5);
console.log(twoSum.find(29)); // Output: [2, 4]
console.log(twoSum.find(13)); // Output: [1, 3]
console.log(twoSum.find(36)); // Output: []
console.log(twoSum.find(26)); // Output: [1, 2]
console.log(twoSum.find(7)); // Output: [1, 4]
console.log(twoSum.find(9)); // Output: []

module.exports = TwoSum;
