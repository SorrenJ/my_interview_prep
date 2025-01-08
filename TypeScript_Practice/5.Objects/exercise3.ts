/*
Exercise: Level 3
Define a Dictionary object type that can have any number of properties where the keys are strings, and the values are numbers.

Explain the difference between type and interface in TypeScript. Provide an example of both, and show how to extend them.

Using a mapped type, define a type ReadonlyPerson where all properties of Person are readonly.

Create a conditional type IsString<T> that returns true if T is a string, otherwise returns false.

*/

type Dictionary = {
    [word: string]: number;
    page: number;

}

type Define = Dictionary & {
    meaning: string;
    usages: string;
    synoyms: string;
}


interface Dictionary1 {
    [word: string]: number;
    page: number;

}

interface Define1 extends Dictionary1 {
    // meaning: string; // type 'string' is not assignable to 'string' index type 'number'
    // usages: string;
    // synoyms: string;

    reference:number;
}



/*
When to Use What?

Use interface when:

You need to describe the shape of an object or class.
You need to extend or implement types.
You benefit from merging/reopening capabilities.

Use type when:

You need advanced type features (unions, intersections, primitives).
You want to alias complex types or utility types.





*/




type ReadonlyPerson<Type> = {
    readonly [Key in keyof Type]: Type[Key]; // apply readonly to all properties of Person

}

type IsString<T> = T extends string ? true : false;
