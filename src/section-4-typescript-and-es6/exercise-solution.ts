// Exercise 1 - ARROW FUNCTIONS
const double = (value: number): number => value * 2;
console.log(double(10));
 
// Exercise 2 - DEFAULT VALUE PARAMETERS
const greet = (name: string = 'Max'): void => console.log("Hello, " + name);
greet();
greet("Anna");
 
// Exercise 3 - SPREAD OPERATOR
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
 
// Exercise 4 - SPREAD OPERATOR (REST)
const newArray: number[] = [55, 20];
newArray.push(...numbers);
console.log(newArray);
 
// Exercise 5 - DESTRUCTURING ARRAYS
const testResults = [3.89, 2.99, 1.38];
const [ result1, result2, result3 ] = testResults;
console.log(result1, result2, result3);
 
// Exercise 6 - DESTRUCTURING OBJECTS
const scientist = {firstName: "Will", experience: 12};
const { firstName, experience } = scientist;
console.log(firstName, experience);