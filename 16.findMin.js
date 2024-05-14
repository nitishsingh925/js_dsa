/*  

------------------------------------
Programa:  Find the minimum value in an array
------------------------------------


*/

// write a function findmin that takes an array of numbers as input and returns the value found in the array

// the input array may contain both pasitive and negative intergers.
// the input array may be empty
// the input array may contain dup;icate values

const findMin = (arr) => {
  if (arr.length === 0) return { undefined: "array is empty" };
  return Math.min(...arr);
};

console.log(findMin([1, 5, 3, 9, 2])); //Output:1
console.log(findMin([-10, 0, 12, -9, -2])); // Output : -10
console.log(findMin([])); // output : undefined (or any suitable message for emoty array)
