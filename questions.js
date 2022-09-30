// Question 1 Write a function to find the index of the value in the 2D Array
let numList = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function findIndex(array, target) {
  // Write the logic
  for (let outer_index = 0; array.length > outer_index; outer_index++) {
    let inner_index = array[outer_index].findIndex((element) => element === target);
    if (inner_index > 0) return [outer_index, inner_index];
  }
  return null; // Here 0 is the index of outer array, and 1 is the index of inner array
}

// Example - findINdex(numList, 5) // [1, 1]
console.log(findIndex(numList, 5))


// Question 2 Write a function that takes a string, and capitalizes every first letter of the word
let str = "hello world";

function capitlize(str) {
  // return's first capitalized
  const capitalizedWords = str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(" ");
}

console.log(capitlize(str)); // Hello World

// HINT - .split method on a string
// .join method on the array


// Question 3 , Write a binary function using recursion (VERY ADVANCE)


// Question 4 , Write a function to find the sum of numbers in an array but using recursion

