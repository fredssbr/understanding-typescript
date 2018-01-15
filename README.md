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

# Decorators

Functions you can attach to classes, methods, properties to transform them.
It gives a chance to add extra functionality to a class, method, property.
It's like meta-programming.

It's also interesting to know about adding metadata to your projects. See documentation
bellow

References: http://www.typescriptlang.org/docs/handbook/decorators.html

# JS Libraries and Declaration files

In section 10 app.ts, notice that $ still gives an error, the editor does not know what it is. To solve that, TS has definition files.
In that file, you can map which var is which for typescript to know what to do.

http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

However, that is a cumbersome task. And you can find those
definitions already written at.

https://github.com/DefinitelyTyped/DefinitelyTyped

Typescript finds your file and knows how jQuery works.

Instead of copying the dts file manually, there's a library
that manages that for us, typings.
    
    sudo npm i typings -g
    typings install dt~jquery --global --save

Typescript 2.0 forward has a typing manager for that already.

    npm install --save-dev @types/jquery

We still rely on the DefinitelyTyped Github's repository,
TS will search for the dtd in node_modules.