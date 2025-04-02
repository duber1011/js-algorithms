/*
Challenge name: Valid Palindrome
Description: A phrase is considered a palindrome if, after converting all characters into lowercase and removing all 
non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Write a function isPalindrome that takes a string s as input and returns true if it is a palindrome, or false otherwise.

Input: s = "Able was I, ere I saw Elba."
Output: true
Explanation: After converting to lowercase and removing non-alphanumeric characters, the string becomes "ablewasiereisawelba", 
which reads the same forward and backward.

Input: s = "Hello, World!"
Output: false
Explanation: After converting to lowercase and removing non-alphanumeric characters, the string becomes "helloworld", 
which is not a palindrome.

Input: s = "12321"
Output: true
Explanation: After converting to lowercase and removing non-alphanumeric characters, the string remains "12321", 
which reads the same forward and backward.
*/

function isPalindrome(s) {
  let cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  const isPalindrome = cleanedStr === cleanedStr.split('').reverse().join('');

  return isPalindrome;
}

module.exports = isPalindrome;

// Test cases
console.log(isPalindrome('Able was I, ere I saw Elba.')); // Output: true
console.log(isPalindrome('Hello, World!')); // Output: false
console.log(isPalindrome('12321')); // Output: true
