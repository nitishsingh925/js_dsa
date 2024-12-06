/*  


------------------------------------
Programa: Remove Duplicates element from given Arrays 
------------------------------------


*/
// write a function that takes an arrays of intergrs as input as input and removes any duplicates elements
// returning a new arrays with only the unique elements

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 2, 3, 4, 3, 2, 1])); //output: [1,2,3,4]
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])); //output: [5,6,7,8]
console.log(removeDuplicates([1, 2, 3, 4])); //output: [1,2,3,4]
console.log(removeDuplicates([])); //output: []
