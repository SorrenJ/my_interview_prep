/* Write a function that returns a tuple of two numbers (representing coordinates). Then:

Use destructuring to assign the returned values to two variables.
Print the variables to the console.
*/




function tupleGenerator (): [number, number] {
return[69, 69];
}


let [num_of_beans, num_of_shits] = tupleGenerator();

console.log(`Number of beans eaten: ${num_of_beans}, Number of shits given: ${num_of_shits}`);


/* You are tasked with defining a tuple that includes:

A string (name),
A number (age),
An optional boolean (isEmployed),
An arbitrary number of string values (skills).
i. Define this tuple type.

ii. Create a tuple with all the elements: "Sam", 30, true, followed by three skills: "JavaScript", "TypeScript", "React".

iii. Now, create a tuple with only the required elements (name and age) and no isEmployed or skills.

iv. Can you still add skills to the tuple with no isEmployed? What does this tell you about the relationship between optional elements and rest elements?

The boolean? (optional isEmployed) doesn't block adding ...string[] (rest elements) 
because rest elements in tuples are treated as flexible extensions that allow any number of elements 
of the specified type (in this case, string).

*/

// If you want to start with three known values (a string, a number, an optional boolean) but allow for additional string values.
type jobTuple = [string, number, boolean?, ...string[]];


const candidate1: jobTuple = ["Sam", 30, true, "JavaScript", "TypeScript", "React"];

const candidate2: jobTuple = ["Bilbo", 26]

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

function processTuple(tuple: readonly [number, ...string[]]) {
    // tuple[0] = 10; // The error occurs at the line tuple[0] = 10; because the readonly modifier prevents any mutation of the tuple.
  
    console.log("First element:", tuple[0]);
    console.log("Rest of the elements:", tuple.slice(1));
}



