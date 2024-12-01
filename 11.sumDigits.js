/*  


------------------------------------
Programa: Sum of Digits 
------------------------------------


*/

// const sumOfDigits = (num) => {
//   let sum = 0;
//   num = num.toString();
//   for (let index = 0; index < num.length; index++) {
//     sum = sum + parseInt(num[index]);
//   }
//   return sum;
// };

const sumOfDigits = (num) => {
  return num
    .toString()
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur), 0);
};

console.log("Sum of Digits", sumOfDigits(1234)); // output : 10
console.log("Sum of Digits", sumOfDigits(4321)); // output : 10
console.log("Sum of Digits", sumOfDigits(123456)); // output : 21
