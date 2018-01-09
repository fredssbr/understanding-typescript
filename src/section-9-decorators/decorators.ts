/*
DECORATORS

Functions you can attach to classes, methods, properties to transform them.
It gives a chance to add extra functionality to a class, method, property.
It's like meta-programming.

This is a decorator that will be attached to a class.
It always receives the constructor function of that class.
(Typescript feature).

Summary: a decorator is any function (theoretically, depending on how you
wanna use it)
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

/*
METHOD DECORATOR
*/
//factory
function editable(value: boolean) {
    /* 
    Let's make the method non-overwriteable
    first argument varies if the class is static (uses the constructor) or
    an instantiated one (uses the prototype)
    second is the property name
    third is descriptor - Object.defineProperty (used to define and configure
    a property) 
    */
    return function(target: any, propName: string, descriptor: PropertyDescriptor ) {
        //defines if it's overwritable or not
        descriptor.writable = value;
    }
}

// PROPERTY DECORATOR
function overwritable(value: boolean) {
    return function(target: any, argName: string){
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;

    }
}
class Project {
    /*
    You cannot set the value of this property anymore
    if you use this decorator, since the writable property
    of it's descriptor is set to false (which makes the property
    readonly). 

    It's more useful as a listener, where you just have to read values
     */
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        //this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project('Super Project');
project.calcBudget();
/* project.calcBudget = function() {
    console.log(2000);
} */
//project.calcBudget();
console.log(project);

// PARAMETER DECORATOR
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log('Target: ', target);
    console.log('methodName: ', methodName);
    console.log('paramIndex: ', paramIndex);
}

class Course {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        }else{
            console.log(2000);
        }
    }
}

const course = new Course('Typescript');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
