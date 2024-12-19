/*  


------------------------------------
Programa: Is Palindrome
------------------------------------


*/

//  write a function to determine whether a given string is a panlindrome or not.
// a plindrome is a word, phrase, number, or other sequence of characters that reads the same  forward
// and backward, ignoring spaces. punctuation, and capitaliztion

// the input string may contain letters, digits, spaces, punctuation, and special characters.
// the function should be case-insesitive
// ignore spacres,special characters
// return true and false

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");
  let rev_str = str.split("").reverse().join("");
  return str === rev_str;
};

console.log(isPalindrome("a man, a plan, a canal, panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome("racecar")); //Output: true
console.log(isPalindrome("hello")); // Output: false
