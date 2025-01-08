/*Exercise: Level 1
Define an object type Person with two properties: name and age.

Using the Person type defined above, create an object called person1 with your own details.

Extend the Person type to include an optional email property. Then create an object that uses this extended type.

Modify the Person type so that the name property is read-only.

*/

type Person = {
    readonly name:string; 
    age:number; 
    hobbies? : string [];
}

interface User extends Person {
    email?: string;
}

let person1: User = {
    name: "Sorren",
    age: 26,
    email: "soalexjao@gmail.com"

};

console.log(person1.name); // Output: "Sorren"