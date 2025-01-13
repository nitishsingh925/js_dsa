/*  

------------------------------------ 
Programa: Count of Total Vowels
------------------------------------
 
*/

// write a function that takes as input and returns ths count of vowels in that string.
// Consider 'a','e','i','o','u' as vowels
// Both (lower and upper case) letters should be considered as vowels

// exmaple 1

// const countVowels = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u" ||
//       str[i] === "A" ||
//       str[i] === "E" ||
//       str[i] === "I" ||
//       str[i] === "O" ||
//       str[i] === "U"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// exmple 2

// const countVowels = (str) => {
//   let count = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// exmple 3

// const countVowels = (str) =>
//   str
//     .toLowerCase()
//     .split("")
//     .filter((char) => "aeiou".includes(char)).length;

// exmple 4

// const countVowels = (str) => {
//   let count = 0;
//   const vowels = "aeiouAEIOU";
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

// exmple 5

const countVowels = (str) => str.replace(/[^aeiou]/gi, "").length;

console.log(countVowels("hello")); //output: 2
console.log(countVowels("ThE quIck brOwn fOx jUMPED ovEr thE lAZY doG")); //output: 12
console.log(countVowels("")); //output: 0
console.log(countVowels("Brrap")); //output: 1
