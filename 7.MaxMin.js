/*  


------------------------------------
Programa: Find Max and Find Min 
------------------------------------


*/

// write a function findmax that takes an array of numbers as input and returns the maximum number in the array

const findMax = (arr) => {
  return Math.max(...arr);
};
const findMin = (arr) => {
  return Math.min(...arr);
};

console.log(findMax([1, 5, 3, 9, 2])); //Output:9
console.log(findMax([-10, -5, -3, -9, -2])); // Output : -2
console.log(findMax([5])); //Output : 5

console.log(findMin([1, 5, 3, 9, 2])); //Output:1
console.log(findMin([-10, -5, -3, -9, -2])); // Output : -10
console.log(findMin([5])); //Output : 5
