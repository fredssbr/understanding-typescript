# Udemy course: Understanding typescript
A repo for Udemy's Understanding Typescript course by [Maximilian Schwarzmüller](https://mschwarzmueller.com/)

# What is Typescript?
It's a wrapper for JavaScript (compiles into JavaScript) that introduces new features to use in our code.
It does not run in the browser. We need to compile it into Javascript before. It's like an extra language to 
use during development.

It makes sure we are not introducing bugs because of wrong types.

# Compile your project with typescript
By running the command tsc --init (after npm i -g typescript), you create a tsconfig.json file so that you have more control over the way you *.ts files are managed.

Have a look at the configuration options at: http://www.typescriptlang.org/docs/handbook/tsconfig-json.html

# ES6 & TypeScript Compatibility
Not necessarily all ES6 Features are supported by TypeScript, but quite a lot of them are.

The following Compatibly Chart helps you find out if you're favorite Feature is supported: http://kangax.github.io/compat-table/es6/


# Namespaces vs Modules

| Namespaces        | Modules|
| ------------- |-------------|
| Organize application with js objects |  Organize application with real modules |
| Can be split up over multiple files | Can be split up over multiple files |
| No module loader required | Module loader required |
| Dependencies get difficult to manage in bigger applications | Explicit dependency declaration |