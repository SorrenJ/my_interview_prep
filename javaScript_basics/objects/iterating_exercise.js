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
