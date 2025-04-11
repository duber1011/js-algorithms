/*
Write a Binary Search function that counts the total number of keys examined during the search to find an specific number.

Example Input:  numberList = {10 , 11, 12, 16, 18, 23, 29, 33, 48, 54, 57 ,68, 77, 84, 98}
	            numberToFind = 48

Example Output:  Number found in index: 8
            Total Number of keys examined: 4
*/

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let count = 0; // Initialize the count of keys examined

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    count++; // Increment the count for each key examined

    if (arr[mid] === target) {
      return { index: mid, count }; // Return the index and the count
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return { index: -1, count }; // Return -1 if not found and the count
}

// Test case
const numberList = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98];
const numberToFind = 48;
const result = binarySearch(numberList, numberToFind);
if (result.index !== -1) {
  console.log(`Number found in index: ${result.index}`);
  console.log(`Total Number of keys examined: ${result.count}`);
} else {
  console.log('Number not found');
}

// Expected Output:
// Number found in index: 8
// Total Number of keys examined: 4

module.exports = binarySearch;
