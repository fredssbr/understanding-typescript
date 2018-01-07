// Exercise 1 - Class
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string){
        this.name = name;
    }
 
    honk() {
        console.log('Toooooooooot!');
    };
 
    accelerate (speed: number) {
        this.acceleration += speed;
    }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

 
// Exercise 2 - Inheritance
abstract class BaseObject{
    width: number =  0;
    length: number =  0;
};

class Rectangle extends BaseObject{
    calcArea() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 3;
console.log(rectangle.calcArea());
 
// Exercise 3 - Getter and Setter
/*
Compile it with tsc -t ES5 <file>
this is because the default value for compiling is ES3, which does not
fully support getters and setters
 */
class Person {
    private _firstName: string = '';

    get firstName(){
        return this._firstName;
    }

    set firstName(firstName: string){
        if (firstName.length > 3) {
            this._firstName = firstName;
        }
        else {
            this._firstName = '';
        }
    }

}
const person = new Person();
console.log(person.firstName);
person.firstName = 'Fr';
console.log(person.firstName);
person.firstName = 'Frederico';
console.log(person.firstName);