/*  



------------------------------------
Programa: Calculate the Average
------------------------------------


*/

//  write a function called calulate Average that takes an array of numbers as input
//  and returns the average of those numbers.

// accept an array of numbers as input
// calculate the sum of all the numbers in the array.
//  divide the sum by the total number of elements in the array to find the average.
// return the calcualte average

// const calculateAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// };

const calculateAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length;

console.log(calculateAverage([5, 10, 2, 8]));
