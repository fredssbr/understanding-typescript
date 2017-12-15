// Exercise 1 -Class
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string){
        this.name = name;
    }
 
    honk() {
        console.log("Toooooooooot!");
    };
 
    accelerate(speed: number) {
        this.acceleration += speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);
 
// Exercise 2 - Inheritance
abstract class BaseObject {
    width: number = 0;
    length: number = 0;
};

class Rectangle extends BaseObject{
    calcSize(): number {
        return this.width * this.length;
    }
}

let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
 
// Exercise 3 - Getters and setters
class Person {
    private _firstName: string = '';
    
    // Remember that even though it looks like a method,
    // you access it as a property
    get firstName() {
        return this._firstName
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = '';
        }
    }
}

let person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);

// FOR single files - tsc src/exercise-section-5-solution.ts -t ES5
// Specify the target