/*

Exercise: Level 2
Define an object type Address with properties street, city , and zipCode. 
Now, modify the Person type so that it has an address property, which is of type Address.

Modify the Person type to include a property hobbies that is an array of strings. 
Then create an object person2 using this updated type.

Define a new type Employee that intersects with Person and has an additional jobTitle property. 
Then create an object employee1 using this type.
*/




type Address = {
    street: string;
    city: string;
    zipCode: string;
};

type Employee = Person & {
    jobTitle: string;

}
const person2: Employee = {
    name: "Bilbo",
    age: 26,
    hobbies: ["cooking", "coding", "video gaming"],
   jobTitle: "Full-Stack Developer"
}

console.log(`${person2.name} ,  ${person2.hobbies}`);