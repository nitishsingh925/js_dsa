/*
------------------------------------
Programa: Find the Mode in an array
------------------------------------
*/

const findMode = (arr) => {
  if (arr.length === 0) return "array is empty";

  let counts = {};
  let maxNum = 0;
  let mode;

  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > maxNum) {
      maxNum = counts[element];
      mode = element;
    }
  }
  return mode;
};

// Test Cases

console.log(findMode([])); // Output: array is empty
console.log(findMode([1, 2, 2, 3, 1, 4, 2])); // Output: 2
