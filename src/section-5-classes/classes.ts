class Person {
    // default accessor is public (when you leave the accessor out)
    name: string;
    // JavaScript alone doesn't offer private accessor
    // PRIVATE: only accessible within the object
    private type: string;
    // PROTECTED: only accessible within the object and 
    // the ones that INHERIT (extend) from this class
    protected age: number = 30;

    // Creates a public property username for this class
    // (shortcut to creating properties)
    constructor(name: string, public username: string){
        this.name = name;
    }

    // A method is setup like a function without the function keyword
    // METHODS CAN HAVE ACCESSORS AS WELL AS PROPERTIES
    printAge() {
        console.log(this.age);
        this.setType('Cool guy');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

}
// Instatiate the person (creates an object based on the class Person)
const person = new Person('Frederico', 'fred');
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // Won't work with private method

// INHERITANCE
class Fred extends Person {
    // name = 'Fred';

    constructor(username: string) {
        /* If you define a constructor in the extended class,
        you have to call the one from the superclass inside it
        with the super keyword */
        super('Fred', username);
        // you can access protected properties but not private
        this.age = 30;
    }
}

const fred: Fred = new Fred('fred');
/* The name is overwritten with the definition of the class 
which extends Person, even if you use a constructor.
(It will always overwrite the contents of the superclass) */
console.log(fred);

// GETTERS & SETTERS
class Plant {
    private _species: string = 'Default';
    
    /* you can execute some code before setting or getting a value
    with set/get (can work like a watch)
    
    GET AND SET WORK LIKE CALLING A PROPERTY, NOT A METHOD! */
    set species(value: string) {
        if(value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }

    get species() {
        return this._species;
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Passiflora Incarnata';
console.log(plant.species);

// STATIC PROPERTIES & METHODS
class Helpers {
    /**
     * STATIC means that it's a feature of the class and not the 
     * instances (objects) of it, therefore, you don't need to
     * have an object to use this feature with static accessor
     * (there's no need to use NEW keyword).
     * 
     * Helper classes are a great example of use for STATIC.
     * However, use it with caution!
     */
    static PI: number = Math.PI;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
// No need to use new!
console.log(2 * Helpers.PI)
console.log(Helpers.calcCircumference(8));

// ABSTRACT CLASSES

/**
 * You cannot instantiate an abstract class,only extend it.
 * It works like a framework for the child classes.
 * Common properties and that child will inherit
 */
abstract class Project {
    projectName: string = 'Default';
    budget: number = 1000;

    // You only define what the method should be like
    // But do not implement its content
    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);

// private constructors

//SINGLETON PATTERN: only one instance during runtime
class OnlyOne {
    
    private static instance: OnlyOne;

    // a readonly property can only be get but not set
    // even if it's public
    private constructor(public readonly name: string){}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else'; //readOnly