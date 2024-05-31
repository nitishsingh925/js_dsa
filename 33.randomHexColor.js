/*  

------------------------------------
Programa: Random Hex Color Generator
------------------------------------


*/

const randomHexColor = () => "#" + Math.random().toString(16).slice(-6);
//   Math.random().toString(16).slice(2, 8).padStart(7, "#");
//   Math.random().toString(16).slice(-6).padStart(7, "#");

console.log(randomHexColor());
