/*

------------------------------------
Programa:  fibonacci
------------------------------------

*/

const fibonacci = (n) => {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(8)); // Output: 21
console.log(fibonacci(9)); // Output: 34
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(11)); // Output: 89
console.log(fibonacci(12)); // Output: 144
console.log(fibonacci(13)); // Output: 233
console.log(fibonacci(14)); // Output: 377
console.log(fibonacci(15)); // Output: 610
