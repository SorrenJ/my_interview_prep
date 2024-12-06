/*
Problems
Problem #1: Write a while loop that prints out each item of ingredients.
Problem #2: Write a for loop that does the same thing.
Problem #3: Write any loop, while or for, that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").


*/


/*Problem 1*/
const ingredients = ["eggs", "poop", "bullshit", "bananas"];
let ing = 0;

console.log(`Problem 1: `);
while (ing < ingredients.length){
console.log(ingredients[ing]);
ing++;
}

console.log(` `);

/*Problem 2 */
console.log(`Problem 2: `);
for (let i = 0; i < ingredients.length; i++){
    console.log(ingredients[i]);

}