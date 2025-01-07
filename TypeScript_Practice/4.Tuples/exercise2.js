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
