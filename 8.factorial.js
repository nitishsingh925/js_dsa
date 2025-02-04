/*  
------------------------------------
Programa: factorial 
------------------------------------

*/

// write  a function factorial that takes a non-negative interger numas as input and return its factriacl.
//  the factirial od a non-negative integer n denoted as n! is the profict od all
// positive intergrts less then or equal to the n the factorial of 0 is defined as 1

// factorial(0)=>1
// factorial(1)=>1
// factorial(2)=>2
// factorial(3)=>6
// factorial(4)=>24
// factorial(5)=>120

// const factorial = (num) => {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   return fact;
// };

const factorial = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(5));
