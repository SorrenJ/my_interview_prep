/*

We need to boil some water and pour it, create two functions representing each of those steps and call them in a way that
they will execute one after the other using promises.



// Question code
const boilWater = () => {
// ...
};
const pourWater = () => {
// ...
};
// Execution below

*/


// Question code

const boilWater = () => {
console.log("Water is boiling now");


};
const pourWater = () => {
console.log("Pouring water");
};

const myPromise = new Promise ((resolve, reject)=> {
    const success = true;

    boilWater();

    setTimeout (() => {
if (success) {

    resolve("Water is present");
} else {
reject("No water is present");
}

    }, 2000)


});

myPromise
    .then((message) =>
{
    console.log(message);
    return pourWater();
}
)
    .catch((error) => console.log(error))
 



// Execution below
