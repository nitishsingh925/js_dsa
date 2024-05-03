/*  

------------------------------------
Programa: Hasg Tag Generator
------------------------------------


*/

//  You are required to implement a function generateHash that generates a hash tag from a given input string.
// the hash tag should be constructed as follows:

// The input string should be converted to a hash tag format, where each word is capitalized and concatenated
// together without spaces.

//  If the length of the input string is greater than 280 characters or if the input string is empty or
// contains only whitespace, the function should return false.

//  Otherwise, the function should return the generated hash tag prefixed with #.
//  Write a function generateHash to accomplish this task.

// write a function generteHah to accomplish this task.

const generateHash = (str) => {
  // Check if the string is empty or contains only whitespace
  if (!str.trim()) return false;

  // Check if the length of the input string is greater than 280 characters
  if (str.length > 280) return false;

  // Capitalize each word and concatenate them without spaces
  const capitalizedWords = str.split(" ").map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
    // word.replace(word[0], word[0].toUpperCase())
  );

  // Join the capitalized words to form the hash tag
  const hashTag = "#" + capitalizedWords.join("");

  return hashTag;
};

console.log(generateHash("The quick brown fox jumped over the lazy dog"));
