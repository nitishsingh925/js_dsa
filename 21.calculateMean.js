/*  

------------------------------------
Programa: Calculatr Mean
------------------------------------


*/

// The input array may contain positive and negative integers.
// The input array may be empty if it is empty the function should return 0

const calculateMean = (arr) => {
  if (arr.length === 0) return 0;
  return arr.reduce((a, c) => a + c, 0) / arr.length;
};

console.log(calculateMean([1, 2, 3, 4, 5])); //Output: 3
console.log(calculateMean([10, 20, 30])); // Output: 20
console.log(calculateMean([-1, 0, 1])); // Output: 0
console.log(calculateMean([])); //Output: 0
