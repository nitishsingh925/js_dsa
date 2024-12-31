/*  

------------------------------------
Programa:  Checking given object is empty or not
--------------- ---------------------

*/

const isEmptyObject = (obj) => Object.keys(obj).length === 0;

console.log(isEmptyObject({})); // Output: true
console.log(isEmptyObject({ a: 1, b: 2 })); // Output: false
console.log(isEmptyObject({ keyWithNull: null })); // Output: false
console.log(isEmptyObject({ keyWithUndefined: undefined })); // Output:false
