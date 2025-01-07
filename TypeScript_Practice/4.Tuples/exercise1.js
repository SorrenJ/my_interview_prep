"use strict";
/*

Create a tuple that holds a string and a number. Try the following:

Define a tuple with the values "Alice" and 25.
Swap the order of the values (e.g., 25 and "Alice") and observe the error.
What error do you get when you try to change the order?

*/
let myTuple = ["Alice", 25];
/*
You have the following tuple:

  let myTuple: [number, string] = [42, "TypeScript"];
Access the first element and assign it to a variable.
Change the first element to a different number.
Try changing the second element to a number. What error do you get?

Type 'string' is not assignable to type 'number'

*/
let myTuple2 = [42, "TypeScript"];
let language = myTuple2[1];
console.log(language);
//output: TypeScript
/*
You have the following code:
  let myTuple = ["TypeScript", 2024];

What type is inferred for myTuple? Is it considered a tuple or an array?

(string | number)[]

This means myTuple is an array that can contain elements of type string or number, but it doesn't guarantee a specific order or fixed length as a tuple would.


Manually define myTuple as a tuple of string and number, ensure TypeScript enforces the correct types.

Can you add an extra element to the tuple using push? Why or why not?

yes, In TypeScript, tuples are arrays with specific element types in a fixed order, but at runtime, they are still arrays.

*/
let myTuple3 = ["TypeScript", 2024];
myTuple3.push("boo", 666);
console.log(myTuple3);
