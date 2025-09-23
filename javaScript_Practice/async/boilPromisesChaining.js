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
    return new Promise((resolve) => { 
    console.log("Water is boiling");

    setTimeout(() => {
        resolve("water has boiled");

    }, 2000);

});

};

const pourWater = () => {
    return new Promise ((resolve) => {
        console.log ("Pouring water...");

        setTimeout(() => {
            resolve ("Water has been poured");
        }, 1000);

    });
};

boilWater() // since boilWater is a promise we can make chains
.then((message) => {
    console.log(message);
    return pourWater();
})
.then((message) => {
    console.log(message);
})

.catch((error) => console.error("Error", error))


// Execution below
