/*  

------------------------------------
Programa: Calculate Median
------------------------------------


*/

// const findMedian = (arr) => {
//   arr.sort((a, b) => a - b);
//   let arrLength = arr.length;
//   let mid = Math.floor(arrLength / 2);

//   if (arrLength % 2 === 0) return (arr[mid] + arr[mid - 1]) / 2;
//   else return arr[mid];
// };

const findMedian = (arr) => {
  arr.sort((a, b) => a - b);
  let mid = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid];
};

console.log(findMedian([5, 3, 9, 1, 7])); // Output :5
console.log(findMedian([2, 4, 6, 8])); // Output :5
console.log(findMedian([1, 3, 5, 7, 9, 11])); // Output :6
