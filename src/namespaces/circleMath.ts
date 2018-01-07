/**
 * NAMESPACE a way to avoid polluting the GLOBAL scope
 * You can define all types of objects (types, functions, consts, lets)
 * inside it. It's compiled like a JS Object with a IIFE
 * 
 * 
 * It's a great tool for small applications, but not very
 * manageable since they are not declarative as to what
 * dependencies they rely on.
 */
namespace MyMath {
    /**
     * You can have namespaces inside namespaces
     */
    export namespace Circle {
        const PI = 3.14;
        /*
        In order to use something outside the namespace, you have to export it
        */
        export function calculateCircumference(diameter: number) {
            return diameter * PI;
        }
    }
}