/*
------------------------------------
Programa: Repetition Check Arrays
------------------------------------
*/

const repetitionCheck = (arr) => {
  let counts = {};
  for (let e of arr) {
    counts[e] = (counts[e] || 0) + 1;
  }
  return counts;
};

console.log(repetitionCheck([1, 2, 2, 3, 1, 4, 2])); // Output: { '1': 2, '2': 3, '3': 1, '4': 1 }
