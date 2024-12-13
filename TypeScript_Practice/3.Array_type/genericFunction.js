"use strict";
/*
Create a generic function
getLastElement that takes an array of any
type and returns the last element of the array.
Test it with both a number array and a string array.
  
const numArray = [1, 2, 3, 4]; // get 4
  const strArray = ["a", "b", "c"]; // get "c"

*/
function getLastElement(mArray) {
    return mArray[mArray.length - 1];
}
// Test with a number array
const numArray = [1, 2, 3, 4];
console.log(getLastElement(numArray)); // Output: 4
// Test with a string array
const strArray = ["a", "b", "c"];
console.log(getLastElement(strArray)); // Output: "c"
/* Explanation
Generic Type <T>: Allows the function to work with arrays of any type.
T[] as Input: Indicates that the input is an array of type T.
Returns T: Ensures the return value matches the type of the elements in the array.
This approach works perfectly for arrays of any type and returns the last element correctly!
*/ 
