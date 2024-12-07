/*  


------------------------------------
Programa: Character is uppercase or lowercase
------------------------------------


*/

// the input char will be a sigle character.
// the character can be any printable ASCII character.
// you can assume that the input will always be a string length 1.

const isUpperCase = (c) => c.toUpperCase() === c;
const isLowerCase = (c) => c.toLowerCase() === c;

console.log(isUpperCase("S")); //Output: true
console.log(isLowerCase("b")); //Output: true
