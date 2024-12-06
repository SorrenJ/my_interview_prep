/*
Instructions
Our objective is to make the code log one of the following strings, based on the value of the age variable:

Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases

The logic should help learners decide which school they should attend based on the conditions outlined above.

*/

const students = [
    { name: "Sorren", age: 26 },
    { name: "Tahu", age: 13 },
    { name: "Jala", age: 12 }
];



for (let i = 0; i < students.length; i++) {
    const student = students[i];

if (student.age < 13) {

console.log(`${student.name} attends Elementary School`);
    
} else {
    if (student.age < 19) {
        console.log(`${student.name} attends Secondary School`);

    } else {
        console.log (`${student.name} attends Lighthouse Labs`);
    }
}
}