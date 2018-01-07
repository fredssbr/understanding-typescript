/* TYPE: STRING (primitive) */
let myName: string = 'Fred';
//myName = 12;

/* TYPE: NUMBER (primitive) */
let myAge: number = 27;
// myAge = 'Fred'

/* TYPE: BOOLEAN (primitive) */
let hasHobbies: boolean = true;
// hasHobbies = 1;

/* ASSIGNING TYPES

 This does not result in error because when we declare a variable
 without defining a type, the type is ANY (default)
*/
let myRealAge;
myRealAge = 27;
// myRealAge = '27';

/* TYPE: ARRAY */
let hobbies: any[] = ["Cooking", "Sports"];
/* If I did not defined it as any[], it would consider my array as one of
strings and the line below would result in error. */
hobbies = [100];

/* TYPE: TUPLES 

 It's an array of different types, with limited number of itens.
*/
 let address: [string, number] = ["Superstreet", 99];

/* TYPE: ENUM

 if you don't inform values for the keys, it will assume sequential numbers starting from 0
*/
enum Color {
    Gray,
    Green = 100,
    Blue
};

// Color.Blue now has the value of 101 - it continues to increase from the previous key value
let myColor: Color = Color.Green;
console.log(myColor);

/* TYPE: ANY

Careful! It accepts any thing. Try to be specific. 
*/
let car: any = 'BMW';
console.log(car);
car = {
    brand: 'BMW',
    series: 3
};
console.log(car);

/* TYPE: FUNCTION
 the type of the function always refer to the return type
*/
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// VOID - nothing to be returned
function sayHello(): void {
    // It should return nothing so the line below is wrong
    //return myAge;
    console.log("Hello!");
}

// ARGUMENT TYPES
function multiply(value1: number, value2: number) {
    return value1 * value2;
}
// console.log(multiply(2, 'Fred')); // shows NaN if I define the arguments as any
console.log(multiply(10, 2));

/* FUNCTION AS TYPES
 The order of arguments is important */
let myMultiply: (val1: number, val2: number) => number;
/* myMultiply = sayHello;
myMultiply(); */
myMultiply = multiply;
console.log(myMultiply(5, 2));

/* TYPE: OBJECT - it's turned into a type when you don't define the types
and create it straight away. 
Names of the properties DO matter, order IS NOT important */
let userData: {name: string, age: number} = {
    name: "Fred",
    age: 30
};

/* Wrong property names
userData = {
    a: "Hello",
    b: 22
}; */

// COMPLEX OBJECT
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};
// Wrong line below!
// complex = {};

/* TYPE: ALIAS

If you just want to use a type (instead of a class).
As we are creating a type, use = to define the type (it's not a value 
assignment)
*/
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};

/* UNION TYPES

Use it when the value you wanna hold can be of a known range of types.
Use the pipe | character.
*/
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
//myRealRealAge = true;

// CHECKING TYPES
let finalValue: number = 30;
if(typeof finalValue === "number"){
    console.log("Final value is a number");
}

/* TYPE: NEVER

 Something that never returns (neither void nor a value of some type) anything.
 It actually throws an error. It never finishes.
*/
function neverReturns(): never {
    throw new Error('An error!');
}

/* TYPE: NULL */
let canBeNull: number | null = 12;
canBeNull = null;
// if the var is undefined (declared without value nor types, it can be null
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;
