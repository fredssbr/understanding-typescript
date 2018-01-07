/* 
    It's important to know which module loader you are using (defined in
    tsconfig.json). Systemjs is kind of universal. We need to install
    it through NPM.
*/

//Importing specifically
//import { PI, calculateCircumference } from './math/circle'
//import { calculateRectangle } from './math/rectangle';

//General import with alias
import * as Circle from "./math/circle";
import calc from './math/rectangle';

/**
 * The files above use relative paths to be imported.
 * If you use an absolute path, it looks for it in the
 * node_modules folder by default.
 */
const diameter: number = 10;
console.log(Circle.PI);
console.log(Circle.calculateCircumference(diameter));
console.log(`Area of a circle of diameter ${diameter} is ${Circle.calculateArea(diameter)}`);
console.log(calc(20, 50));