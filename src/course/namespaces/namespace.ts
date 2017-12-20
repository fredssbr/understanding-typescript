/**
 * This is the way to import namespaces
 */
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

//This PI is in the global scope
const PI = Math.PI;

console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.Circle.calculateCircumference(3));
console.log(PI);

//Alternative import
import CircleMath = MyMath.Circle;
console.log(CircleMath.calculateCircumference(5));