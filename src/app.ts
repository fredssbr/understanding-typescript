// let & const
// Creates a block scope. The var is contained inside the scope it's defined in.
console.log("LET & CONST");

let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

// whenever a value is not going to change
const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // won't work

// Block scope
function reset() {
    // This would print undefined because variable defined
    // above is outside the scope of this function
    // console.log(variable);
    let variable = null;
    console.log(variable);
}

reset();
console.log(variable);

// Arrow Functions
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

const greetFriend = (friend: string) => console.log(friend);
greetFriend("Reindeer");

// Default Parameters
console.log("DEFAUT PARAMETERS");

// you could use another parameter based on the first, like
// finish: number = start + 10 
// order is important!
const countdown = (start: number = 10): void => {
    console.log(start);
    while(start > 0){
        start--;
    }
    console.log("Done!", start);
};
countdown();

// Rest & Spread
// Allow you to work with arrays
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));

// Spread operator - it passes a list of numbers based on an array
console.log(Math.max(...numbers));

// Rest operator - if you use it in a function, it gets all
// the parameters and transform it into an array
function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Fred", 1, 2, 6));

// Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userDataDestructuring = {userName: "Fred", age: 30};
// To assign different names, use :
const {userName: myNameDestruct, age: myAgeDestruct} = userDataDestructuring;
console.log(myNameDestruct, myAgeDestruct);