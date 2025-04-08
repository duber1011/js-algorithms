/*
Within a string or file that has multiple lines of text you need to find the word (or words separated by comma) 
especified and return the entire line where there is a match.

String Example Input

In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.
In analytic number theory, big O notation is often used to express a bound on the difference between an arithmetical function and
a better understood approximation; a famous example of such a difference is the remainder term in the prime number theorem. 
Big O notation is also used in many other fields to provide similar estimates.

Search Example 1

Input word(s): notation
Output: 
Line 1: In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.
Line 2: In analytic number theory, big O notation is often used to express a bound on the difference between an arithmetical function and
Line 4: Big O notation is also used in many other fields to provide similar estimates.

Search Example 2

Input word(s): fields
Output: 
Line 4: Big O notation is also used in many other fields to provide similar estimates.

Search Example 3

Input word(s): requirements, similar
Output: 
Line 1: In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.
Line 4: Big O notation is also used in many other fields to provide similar estimates.
*/

function findWordsInText(text, words) {
  const textArray = text.trim().split('\n');
  const entireLine = textArray.filter((item) =>
    words.some((word) => item.includes(word))
  );

  return entireLine;
}

const text = `
In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.
In analytic number theory, Big O notation is often used to express a bound on the difference between an arithmetical function and
a better understood approximation; a famous example of such a difference is the remainder term in the prime number theorem.
Big O notation is also used in many other fields to provide similar estimates.
`;

const words = ['requirements', 'similar'];
// const words = ['notation'];
// const words = ['fields'];
console.log(findWordsInText(text, words));
// output:
// [
//   'In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.',
//   'Big O notation is also used in many other fields to provide similar estimates.'
// ]

module.exports = findWordsInText;
