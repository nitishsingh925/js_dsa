/*
------------------------------------
Programa:  Number Range Generator
------------------------------------
*/

const numberRange = (s, e) => {
  let arr = [];
  for (let i = s; i <= e; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(numberRange(1, 10)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
