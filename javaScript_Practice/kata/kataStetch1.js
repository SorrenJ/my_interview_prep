/*

For this challenge, you will remove duplicates from an array.

Implement a function called removeDuplicates() that will accept an array as an argument and return a new array with all duplicate values removed.


Input
const removeDuplicates = function(arr) {

  // Your solution here.

};

console.log(
  removeDuplicates([1, 2, 2, 2, 3, 4, 5]),
  removeDuplicates(['a', 'b', 'b', 'c', 'd', 'e', 'e', 'a', 'f']),
);


Expected Output
[1, 2, 3, 4, 5]
['a', 'b', 'c', 'd', 'e', 'f']


*/


const removeDuplicates = function (arr) {
    // Your solution here.
  
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;

}