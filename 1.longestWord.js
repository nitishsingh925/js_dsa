/*  

------------------------------------
Programa: Longest Word in a String 
------------------------------------


*/

//  Q: write a  function find longrst word that takes a string as input and return the longest word in the string.
//  if there are multiple longest word, return the first one encounterd .

// Constraints:

// the input string may contain alphanumeric characters, digits, spaces and punctuation marks.
// the input string is non-empty.
// the input string may contain multiple words separated by spaces.

// Note :

// if the input string is empty or contains only whitespace the function should return an false.
// the function should ignore leading and trailing whitespace when determing the longesr word

const findLongestWord = (str) => {
  // Check if the input string is empty or contains only whitespace
  if (!str.trim()) return false;

  const splitWords = str.trim().split(/\s+/); // Split the string into an array of words

  // Sort the array of words in descending order of length and return the first element
  const longestWord1 = splitWords.sort((a, b) => b.length - a.length)[0];

  // Use reduce to find the longest word
  const longestWord2 = splitWords.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );

  // Use Math.max and spread syntax 
  const maxLength = Math.max(...splitWords.map((word) => word.length));
  const longestWord3 = splitWords.find((word) => word.length === maxLength);

  return [longestWord1, longestWord2, longestWord3];
};

console.log(findLongestWord("The quick brown fox jumped  over the lazy dog"));
