"use strict";
/* Create a function processValue that takes a
 parameter of type number | string and performs the following:
If the input is a string, return the length of the string.
If the input is a number, return its square.
*/
function processValue(input) {
    if (typeof input === "string") {
        return input.length;
    }
    if (typeof input === "number") {
        return Math.pow(input, 2);
    }
    else {
        return input;
    }
}
console.log(processValue(10));
console.log(processValue("Sorren"));
