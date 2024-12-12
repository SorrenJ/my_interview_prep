"use strict";
/* 1. Create a TypeScript type called Status that can be
one of the following string literals: "active", "inactive", or "pending".
*/
/* Write a function getStatusMessage that takes a parameter of type Status
and returns a message based on the status. For example:

"active" should return "The status is active."
"inactive" should return "The status is inactive."
"pending" should return "The status is pending."

*/
function getStatusMessage(status) {
    switch (status) {
        case 'active':
            return `The status is active`;
        case 'inactive':
            return `The status is inactive`;
        case 'pending':
            return `The status is pending`;
        default:
            return 'The status is unknown';
    }
}
const activeStatusMessage = getStatusMessage('active');
console.log(activeStatusMessage); // Output: The status is active.
