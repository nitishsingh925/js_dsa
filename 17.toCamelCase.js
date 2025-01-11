/*  


------------------------------------
Programa:  Write a function to convert a string to Camel Case & Snake case
------------------------------------


*/

const toCamelCase = (str) => {
  str = str.trim().split(" ");
  str = str.map((curElem, index) => {
    if (index === 0) {
      return curElem.toLowerCase();
    } else {
      return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
    }
  });
  return str.join("");
};

const toSnakeCase = (str) => {
  return str.trim().split(" ").join("_").toLowerCase();
};

// Test cases
console.log(toCamelCase("hELlo wOrLD")); // Output: helloWorld
console.log(toSnakeCase("hELlo wOrLD")); // Output: hello_world
