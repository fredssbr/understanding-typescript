/*
SIMPLE GENERIC - because of the ANY type

As I log what I pass in, if I want to use, for example, .length 
from the result of the function, we don't know the type, but we
do not get any compilation errors, only maybe a runtime one.

It would be nice to know which data type it returns.
*/
function echo(data: any) {
    return data;
}

console.log(echo('Max').length);
// It returns undefined, but you don't have errors at compile time
console.log(echo(30).length);
console.log(echo({name: 'Max', age: 30}));

/*
BETTER GENERIC

You could use any character within the notation <char>.
It tells TS that it is a generic function.

Now it knows which type you are returning because it knows
it's the same type of what I pass in.
*/
function betterEcho<T>(data: T) {
    return data;
}
console.log(betterEcho('Max').length);
/*
You cannot get the lenght of the return now because
it knows you're passing in a number.

You can inform the type, though TS infers.
*/
console.log(betterEcho<number>(30));
console.log(betterEcho<Object>({name: 'Max', age: 30}));

// BUILT-IN GENERICS

//this is the same as declaring number[]
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Array with generic type
function printAll<T>(args: T[]) {
    args.forEach(element => console.log(element));
}
printAll<string>(['Apple', 'Banana', 'Avocado']);

/*
GENERIC TYPE

echo2 has a <T> generic type, which is a function thereafter, with
an input of type T, which receives the echo function declared
earlier.
*/
const echo2: <T>(data: T) => T = echo;
console.log(echo2<string>('Something'));

/*
GENERIC CLASS

You can extend a generic type (it's called CONSTRAINT), so that
you make sure it inherits from a specific type.

If you want to make it even more flexible, you could use more than 
one type, by convention, with letters following T.

You could extend both types below or use a shortcut and say one type
extends another, like T extends U, instead of:
T extends number | string, U extends number | string

However, now T has to be the same type of U, which is more inflexible.
*/
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        // Err: T could be any type but number
        // + CASTS to a number
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());