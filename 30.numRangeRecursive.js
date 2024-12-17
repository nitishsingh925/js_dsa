/*

------------------------------------
Programa:  Recursive Number Range Generator
------------------------------------

*/

// const numRangeRecursive = (start, end) => {
//   if (start > end) return [];
//   console.log("start", start);
//   return [start].concat(numRangeRecursive(start + 1, end));
// };

const numRangeRecursive = (start, end, arr = []) => {
  if (start < end) {
    arr.push(start);
    return numRangeRecursive(start + 1, end, arr);
  }
  return arr;
};
console.log(numRangeRecursive(0, 5)); // Output: [0, 1, 2, 3, 4, 5]
console.log(numRangeRecursive(3, 7)); // Output: [3, 4, 5, 6, 7]
console.log(numRangeRecursive(-2, 2)); // Output: [-2, -1, 0, 1, 2]
