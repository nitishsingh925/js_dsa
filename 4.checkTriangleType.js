/*  
------------------------------------
Programa: Check Triangle Type
------------------------------------
*/

// write a function called  Check Triangle Type that takes three parameters:
//  representing the lengths of thr sides of a triangle. the function should return a string indication the typr of triangle:
// "equilateral" if all sides are equal, "isosceles" if exactly 2 sides are equal, "scalene" if no sides are equal.

//  todo the function should adhere to the following constraints:

//  if all three sides are of all equal length,return "equilateral"
//  if only two sides are equal, return "isosceles"
//  if all three sides have difference lengths, retuen "scalene"

const checkTriangleType = (a, b, c) => {
  if (a === b && b === c) return "equilateral";
  if (a === b || b === c || c === a) return "isosceles";
  return "scalene";
};

console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
console.log(checkTriangleType(3, 3, 4)); // Output: "isosceles"
console.log(checkTriangleType(3, 4, 5)); // Output: "scalene"
