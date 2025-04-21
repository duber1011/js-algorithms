/*
Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency 
and then by ascending order by character.
The function should:

Take a string as input Count the frequency of each character in the string Return an array of sub-arrays where each subarray contains 
the character and its frequency Sort the array in descending order by frequency and ascending order by character

Example 1:
characterFrequency('mississippi') === 
[
  ['i', 4],
  ['s', 4],
  ['p', 2],
  ['m', 1]  
]

Example 2:
characterFrequency('miaaiaaippi') ===
[
  ['a', 4],
  ['i', 4],
  ['p', 2],
  ['m', 1]
]

Example3:
characterFrequency('mmmaaaiiibbb') === 
[
  ['a', 3],
  ['b', 3],
  ['i', 3],
  ['m', 3]
]
*/

function characterFrequency(str) {
  const frequencyMap = {};

  // count the frequency of each character
  for (let char of str) {
    if (frequencyMap[char]) {
      frequencyMap[char]++;
    } else {
      frequencyMap[char] = 1;
    }
  }
  console.log('frequencyMap ==> ', frequencyMap);

  // convert object to array of subarrays
  const frequencyArray = [];

  for (let char in frequencyMap) {
    frequencyArray.push([char, frequencyMap[char]]);
  }

  console.log('frequencyArray ==> ', frequencyArray);

  // order by frequency and character
  frequencyArray.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1]; // order by descending frequency
    } else {
      return a[0].localeCompare(b[0]); // Ascending order by character
    }
  });

  return frequencyArray;
}

const input = 'mississippi';

console.log(characterFrequency(input));

module.exports = characterFrequency;
