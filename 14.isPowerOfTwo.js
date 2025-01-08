/*  
------------------------------------
Programa:  Is Power Of Two 
------------------------------------
*/

// Write a function called isPowerOfTwo that takes an interger num as input and
// return true if num is a power if two and false otherwise

const isPowerOfTwo = (num) => {
  if (num <= 0) return false;

  let power = 1;
  while (power < num) {
    power *= 2;
  }

  return power === num;
};

console.log(isPowerOfTwo(8)); //Output: true
console.log(isPowerOfTwo(7)); //Output: false
