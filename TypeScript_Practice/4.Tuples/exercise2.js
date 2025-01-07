"use strict";
/* Write a function that returns a tuple of two numbers (representing coordinates). Then:

Use destructuring to assign the returned values to two variables.
Print the variables to the console.
*/
function tupleGenerator() {
    return [69, 69];
}
let [num_of_beans, num_of_shits] = tupleGenerator();
console.log(`Number of beans eaten: ${num_of_beans}, Number of shits given: ${num_of_shits}`);
const candidate1 = ["Sam", 30, true, "JavaScript", "TypeScript", "React"];
const candidate2 = ["Bilbo", 26];
candidate2.push("JavaScript", "TypeScript", "React");
console.log(candidate1);
console.log(candidate2);
/*

You are given a function:

  function processTuple(tuple: readonly [number, ...string[]]) {
    tuple[0] = 10; // Try modifying this line
  }
Why does this code throw an error?
Modify the function to only read from the tuple without trying to modify it.
Can you still append more elements to a tuple defined with rest elements if it is marked as readonly? Why or why not?

No, you cannot append more elements to a tuple marked as readonly, even if it includes rest elements. The readonly modifier applies to the entire tuple, including its fixed elements and the rest elements. This prevents any operation that mutates the tuple, such as:

Adding elements with push.
Removing elements with pop.
Changing the value of any existing element.


*/
function processTuple(tuple) {
    // tuple[0] = 10; // The error occurs at the line tuple[0] = 10; because the readonly modifier prevents any mutation of the tuple.
    console.log("First element:", tuple[0]);
    console.log("Rest of the elements:", tuple.slice(1));
}
