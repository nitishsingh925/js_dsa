/*  


------------------------------------
Programa: Arrays Are Equal 
------------------------------------


*/

// write a function arrays are equal that takes two arrays array 1 and array 2
// as input and returen true if the arrays are equal and also index

const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((curVal, index) => curVal === arr2[index]);
};

// Exampls

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // false
console.log(arraysAreEqual([], [])); // true
