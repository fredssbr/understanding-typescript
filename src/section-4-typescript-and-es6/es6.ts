/* LET & CONST
 Creates a block scope. The var is contained inside the scope it's defined in.*/
console.log("LET & CONST");

let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

// whenever a value is not going to change
const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99; // won't work

// BLOCK SCOPE
function reset() {
    /* This would print undefined because variable defined
    above is outside the scope of this function

    console.log(variable); 
    */
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// ARROW FUNCTIONS
console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumbers(10, 3));

// if you have only one line, you do not need this
/* {
    return number1 * number2;
} */
const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
    console.log("Hello!");
};
greet();

/* You don't need the parentesis if you don't declare the type of the only parameter
but it's always best to declare the type. */
const greetFriend = (friend: string): void => console.log(friend);
greetFriend("Reindeer");

// DEFAULT PARAMETERS
console.log("DEFAUT PARAMETERS");

/* you could use another parameter based on the first, like
finish: number = start + 10 
order is important! */
const countdown = (start: number = 10): void => {
    console.log(start);
    while(start > 0){
        start--;
    }
    console.log("Done!", start);
};
countdown();

/* REST & SPREAD
Allow you to work with arrays and lists of data
An array is an object. A list of values is just a list of values.
*/
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
//You pass in a list of numbers, not an array
console.log(Math.max(33, 99, 10, -3));

/* SPREAD OPERATOR - it passes a list of numbers based on an array.
It spreads out an array into single values, like removing the square brackets.
*/
console.log(Math.max(...numbers));

/* REST OPERATOR - if you use it in a function, it gets all
the parameters as a list of values and transform it into an array.

If you don't want to transform some of the parameters in an array item,
use it first in your function, before the rest operator parameter*/
function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Fred", 1, 2, 6));

// DESTRUCTURING
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userDataDestructuring = {userName: "Fred", age: 30};
// To assign different const/vars names, use :
const { userName: myNameDestruct, age: myAgeDestruct } = userDataDestructuring;
console.log(myNameDestruct, myAgeDestruct);

/* TEMPLATE LITERALS (strings with more features) - use backtips ``

You can use curly braces to concatenate values anywhere in the text.
*/
console.log('TEMPLATE STRINGS');
const userName = "Fred";
const greeting = `This is a heading!
I'm ${userName}.
This is cool`;
console.log(greeting);