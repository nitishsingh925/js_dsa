/*  
------------------------------------
Programa:  Sum of Squares 
------------------------------------
*/

//  Write a function to calculate the sum of the squares of all elements in an array.
// example given the array [1,2,3] the function should return 14 because 1*1 2*2 3*3 = 1+4+9 =14

// const sumOfSquares = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i] ** 2;
//   }
//   return sum;
// };

// const sumOfSquares = (arr) => {
//   let sum = 0;
//   for (let elem of arr) {
//     sum = sum + elem * elem;
//   }
//   return sum;
// };

const sumOfSquares = (arr) => arr.reduce((acc, val) => acc + val ** 2, 0);
console.log(sumOfSquares([1, 2, 3]));
