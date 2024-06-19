/*  

------------------------------------
Programa: Convert Object to Array and Vice versa
------------------------------------


*/

const obj = {
  name: "Nitish",
  age: 24,
  city: "alwar",
};

// Convert Object to Array
const data = Object.entries(obj);

console.log(data.flat());

// Convert Array to Object
//
const obj2 = Object.fromEntries(data);

console.log(obj2);
