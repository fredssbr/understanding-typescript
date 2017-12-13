class Person {
    // default accessor is public (when you leave it out)
    name: string;
    // JavaScript alone doesn't offer private accessor
    // PRIVATE: only accessible within the object
    private type: string;
    // PROTECTED: only accessible within the object and 
    // the ones that inherit from this class
    protected age: number = 30;

    // Creates a public property username for this class
    // (shortcut to creating properties)
    constructor(name: string, public username: string){
        this.name = name;
    }

    // A method is setup like a function without the function keyword
    // Methods can have accessors as well as properties
    printAge() {
        console.log(this.age);
        this.setType("Cool guy");
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

}
// Instatiate the person (creates an object based on the class
// Person)
const person = new Person("Frederico", "fred");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // Won't work with private methods

// INHERITANCE
class Fred extends Person {
    //name = "Fred";

    constructor(username: string) {
        // If you define a constructor in the extended class,
        // you have to call the one from the superclass inside it
        super("Fred", username);
    }
}

const fred = new Fred("max");
// The name is overwritten with the definition of the class 
// which extends Person, even if you use a constructor.
// (It will always overwrite the contents of the superclass)
console.log(fred);

