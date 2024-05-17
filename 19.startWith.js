/*  

------------------------------------
Programa: String starting starts with a spaecific substring
------------------------------------


*/

const startsWith = (str, search) => str.startsWith(search);

console.log(startsWith("Hello World", "Hello")); //Output:true
console.log(startsWith("Hello World", "World")); //Output:false
