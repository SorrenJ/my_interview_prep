const steel = {
    name: "1084",
    type: "Carbon Steel",
    composition: {
      iron: 98.45,
      carbon: 0.8,
      manganese: 0.6,
      phosphorus: 0.08,
      sulfur: 0.06,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200,
  };

  /*
  Extracting the Elements
First, let's try extracting all the keys that are part of the 'composition' object inside of the 'steel' object.

Don't forget to use a console.log to confirm that you are returning the proper array.

Your code should return an array that looks like this:

["iron", "carbon", "manganese", "phosphorus", "sulfur"];
*/


/* Problem 1: Using for..in, extract all the keys that are part of the composition object. */


// displays all keys in compostion object
for (const key in steel.composition) {
  console.log(key);
}

// displays all keys in composition object in []
const output = [];
const composition = steel.composition;
for (const key in composition) {
  output.push(key);
};
console.log(output);


console.log(``);

/* Problem 2: Once completed, try the same problem with Object.keys() instead. */


// pushes the keys into array [] automatically
const keyOfComp = Object.keys(steel.composition);

console.log(keyOfComp);
console.log(``);

/* Problem 3: 
Now let's try calculating the sum of all the percentages to make sure that you reach a value that is near 100%.

The result should be 99.99.

Instruction
Using the Object.values() method, calculate the sum of all the percentages inside of the composition object.
*/

let sum = 0;
const valOfComp = Object.values(steel.composition);
console.log(valOfComp);

for (let i = 0; i < valOfComp.length; i++){
sum+= valOfComp [i];

}

console.log(sum);


/* lighthouse example of problem 3 */

let total = 0;
const composition1 = steel.composition
const percentages = Object.values(steel.composition);
console.log(percentages)  //here we can see the array that is returned from Object.values
for (const percent of percentages) {
  total += percent;
};
console.log(total);

console.log(``);


/* Problem 4: Once completed, try the same problem with for..in instead. */


let total1 = 0;
const composition2 = steel.composition
const percentages1 = Object.values(steel.composition);
console.log(`List of percentages in Problem 4: ${percentages1}`)  //here we can see the array that is returned from Object.values

for (const percentages1 in composition2){
  total1 += composition2[percentages1];
};

console.log(`Problem 4 total percentage: ${total1}`);

/*

Why Does This Work?
for..in Iterates Over Keys: The for..in loop retrieves the keys (iron, carbon, etc.) one by one.

composition2[percentages1] Retrieves Values: Using bracket notation (composition2[key]), you get the value associated with the current key in each iteration.

Accumulation: The values are added to total1 during each iteration.

*/