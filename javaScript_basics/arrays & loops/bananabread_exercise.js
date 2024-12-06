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

console.log(` `);

/* Alternate Problem 2 */

console.log(`Alternate Problem 2 'of': `);
for (const ingredient of ingredients){
    console.log(ingredient);

}

console.log(` `);


/* Alternate Problem 2 */

console.log(`Alternate Problem 2 'forEach': `);

ingredients.forEach((ingredient) => {
    console.log(ingredient);
}

);



console.log(` `);

/*Problem 3 */
console.log(`Problem 3: `);

// remember length = number of items, since there are 4 items the last item is [3]

for (let i = ingredients.length-1; i >= 0; i-- ){
    console.log(ingredients[i]);

}