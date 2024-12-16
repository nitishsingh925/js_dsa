/*
------------------------------------
Programa:  Truncate String
------------------------------------

*/

const truncateString = (str, num) => {
  if (num <= 0) return str;

  return str.slice(0, num).concat("…");

  //   return num <= 0 ? str : str.slice(0, num).concat("...");
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
