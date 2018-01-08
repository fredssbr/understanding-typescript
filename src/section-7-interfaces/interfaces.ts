/*
INTERFACES - is a contract.

When we need the guarantee that an object has a property/method.

While we can define an interface (the contract) as we did in the signature
of a function, object, type, it's better to actually define an interface
with its keyword.

Interfaces are not compiled at all!
They are just here to check your code during compilation!

*/

interface NamedPerson {
    firstName: string;
    // ? indicates it's an optional property
    age?: number;
    /* if you don't know the name of the other properties your object
    might have, use this notation []. The type string is used
    because a class/interface's property can be written as string
    'firstName': string */
    [propName: string]: any;
    
    //a method
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log(`Hello, ${person.firstName}`)
}

function changeName(person: NamedPerson) {
    person.firstName = 'Anna';
}

const person: NamedPerson = {
    firstName: 'Fred',
    hobbies: ['Cooking', 'Sports'],
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
}

/* Even though the line below is the same as above, the object literal 
passed directly is strictly checked. 

However, as I used age as optional, I can now use this syntax.*/
// greet({
//     firstName: 'Fred',
//     age: 30
// });
changeName(person);
greet(person);
person.greet('Silva');

// You could also implement the interface
class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
}

const myPerson = new Person();
myPerson.firstName = 'Frederico';
myPerson.lastName = 'Silva';
greet(myPerson);
myPerson.greet(myPerson.lastName);

// FUNCTION TYPES - using interfaces to set the type
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));

// INTERFACE INHERITANCE
interface AgedPerson extends NamedPerson {
    // It is now required in here
    age: number;
}

const oldPerson: AgedPerson = {
    age: 30,
    firstName: 'Fred',
    greet(lastName: string) {
        console.log('Hello!');
    }
}

console.log(oldPerson);