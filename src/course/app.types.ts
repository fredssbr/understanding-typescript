// string
let myName: string = 'Fred';
// myName = 12;

// number
let myAge: number = 27;
// myAge = 'Fred'

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1;

// Assigning types

// This does not result in error because when we declare a variable
// without defining a type, the type is ANY (default)
let myRealAge;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
// if you don't inform values for the keys, it will assume sequential numbers starting from 0
enum Color {
    Gray,
    Green = 100,
    Blue
};

// Color.Blue now has the value of 101 - it continues to increase from the previous key value
let myColor: Color = Color.Green;
console.log(myColor);

// any - Careful! It accepts any thing. Try to be specific.
let car: any = 'BMW';
console.log(car);
car = {
    brand: 'BMW',
    series: 3
};
console.log(car);

// FUNCTION
// the type of the function always refer to the return type
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number) {
    return value1 * value2;
}
// console.log(multiply(2, 'Fred')); // shows NaN if I define the arguments as any
console.log(multiply(10, 2));

// function types
// The order of arguments is important
let myMultiply: (val1: number, val2: number) => number;
/* myMultiply = sayHello;
myMultiply(); */
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects - it's turned into a type
// Names of the properties DO matter, order IS NOT important
let userData: {name: string, age: number} = {
    name: "Fred",
    age: 30
};
// Wrong property names
// userData = {
//     a: "Hello",
//     b: 22
// };

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};
// complex = {};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finalValue: number = 30;
if(typeof finalValue == "number"){
    console.log("Final value is a number");
}

// never type
// Something that nevers returns (neither void nor a value of some type)
// It actually throws an error
function neverReturns(): never {
    throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
// if the var is undefined (declared without value nor types, it can be null
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;