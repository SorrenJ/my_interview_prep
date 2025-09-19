/*
For this challenge, you will reverse the order of words in a string.

Instruction
Implement a function called reverseWords() that will accept a string of space-separated words and return a copy of the string featuring the same words in reverse order.

Input
const reverseWords = function(str) {

  // Your solution here.

};

console.log(
  reverseWords('hello and welcome to Lighthouse Labs'),
  reverseWords('am I Yoda')
);
Expected Output
'Labs Lighthouse to welcome and hello'
'Yoda I am'

*/




const reverseWords = function (str) {
    // Your solution here.
  
    return str.split(" ").reverse().join(" ");
  };
  
  console.log(reverseWords("hello and welcome to Lighthouse Labs"));
  console.log(reverseWords("am I Yoda"));