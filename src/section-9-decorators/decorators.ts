/*
DECORATORS

Functions you can attach to classes, methods, properties to transform them.
It gives a chance to add extra functionality to a class, method, property.
It's like meta-programming.
*/

/*
This is a decorator that will be attached to a class.
It always receives the constructor function of that class.
(Typescript feature)
*/
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

// Attaching it to a class - use @<<decoratorName>>
// set experimentalDecorators : true in tsconfig.json
@logged
class Person {
    constructor() {
        console.log('Hi!');
    }
}

/*
FACTORY

You can use other functions to manipulate what the decorator
might do. These functions are used as decorators but actually
they return a decorator.

False means no decorator is attached to the class.
*/
function logging(value: boolean) {
    return value ? logged : null
}

@logging(true)
class Car {
}

/*
ADVANCED USEFUL DECORATOR

This decorator means: each object instantiated from a class that has 
this decorator attached to will receive the print method. This method
allows the object to print itself.
*/
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name: string = 'Green Plant';
}

const plant = new Plant();
// In compile time, if you don't convert to any, it will say that print() 
// does not exist on plant. It will work in runtime, though.
(<any>plant).print();
