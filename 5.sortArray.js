/*  
------------------------------------
Programa: Sort an array  method
------------------------------------
*/

// the function should take an array of numbers as input.
//  it should return an array of the same numbers, but in ascending order.
//  the original array should not be modified.

const sortArray = (arr) => arr.sort((a, b) => a);

console.log(sortArray([4, 3, 2, 1, 10])); // Output: [1, 2, 3, 4, 5]
console.log(sortArray([10, 1, 2, 3, 4])); // Output: [1, 2, 3, 4, 5]
