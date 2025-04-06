# Starting with JavaScript

## Best Sources to Study

- [W3Schools](https://www.w3schools.com/)
- [MDN](https://developer.mozilla.org/en-US/)
- [ECMAScript 2024](https://262.ecma-international.org/15.0/index.html?_gl=1*1c2eafi*_ga*MTUwOTg3MzE1Ni4xNzQzODUzMTcy*_ga_TDCK4DWEPP*MTc0Mzg1MzE3Mi4xLjEuMTc0Mzg1MzI2MC4wLjAuMA..)

## JS Introduction

[Code](startJS.js)

Building a project requires a lot of planning.
Let's consider registration page of a website. It takes input from the user and saves these details for further processing.
These details include name, email, phone-number, age, gender, address, etc. 
If we look carefully, these details could be numbers, strings or collection of numbers/ strings/ both.
Languages have built-in data-types to store and process them.

Some built-in data types in JS are:
string, number, boolean, object, array.

strings, numbers and boolean are easy to understand.

Objects are collection of key-value pairs.

Arrays are collection of indexed values.

JavaScript gets a lot of functionalities from the environment in which it runs. 
Browsers have [Javascript run-time environment](JSEngine.drawio) that includes execution engine and rendering engine. V8 is the execution engine used by Chrome.
Nodejs is another run-time environment and it also used the V8 execution engine.

Consider printing on the console. We have console.log(), console.error(), console.warn() like methods in the browsers. When they are run, they display the message in different way.

Commenting in JS: Ctrl + / after selecting the part to be commented

## let and const

[Code](let.js)

```js
let userEmail = "jammy.123@gmail.com"
```

Variables declared with let can be modified in the following lines of code.

[Code](const.js)

```js
const userId;
```

Variables declared with const cannot be modified in the following lines of code.

## Data Types

[Code](dataTypes.js)

[Primitive Types](heapAndStack.drawio)

- String
- Number
- Boolean
- Null 
- Undefined 
- Symbol
- BigInt

Examples:

```js
const firstName = "Jammy"
const age = 20
const score = 30.88
let isLoggedIn = true
const nodeVersion = null
let bankbalance = undefined
const button = Symbol("id")
const largeNum = 827829281287821n
```

[Reference Type](./heapAndStack.drawio)

- Arrays
- Objects
- Functions

Examples:

```js
const numbers = [1, 2, 3, 4, 5]
const heroes = ["flash", "superman", "supergirl", "wonderwoman"]
const object1 = {
    name : "hitesh",
    age : 30,
    isLoggedIn : true
}
const welcome = function() {
    console.log("Welcome")
}
```

## Operators

[Code](operators.js)

- Arithmetic Operators:
    +, -, *, /, %
- Increment Operators:
    ++, --
- Assignment Operators:
    =, +=, -= and so on
- Comparison Operators:
    <, >, ==, ===
- typeOf Operator

## Type Coercion

[Code](typeConversion.js)

- Implicit Coercion (done automatically by runtime)
- Explicit Coercion (done by programmer)

## Strings

[Code](playWithStrings.js)

Strings are indexed collection of characters. Here are some methods that are frquently used while handling strings:

- toUpperCase()
- toLowerCase()
- indexOf()
- charAt()
- trim()
- includes()

## Numbers

[Code](./playWithStrings.js) 

Numbers are integers and floating-point values. They are stored based on international standards. We can use Math object to use mathematical functions on numbers. Some methods worth trying are:

- toString()
- toFixed()
- Math.random()

## Arrays

[Code](arrays.js)

Arrays are indexed collection of data. Here are few methods available with arrays:

- push()
- pop()
- toSting()
- slice()
- splice()
- unshift()
- join()

## Objects

[Code](./objects.js)

Objects are collection of key-value pairs. To start with objects, we can try the following:

- Acessing values
- Object.values()
- Object.keys()
- Object.entries()
- hasOwnProperty()

## if statement

[Code](ifStatement.js)

We use if statement to run code conditionally. Pretty simple to understand. There a funny syntax that I've learnt. Do check it out in the code section. 
An important part is to understand scoping of variables. We will surely learn this in upcoming classes.

## switch statement

[Code]()

Things that can be done with if statement can also be done with switch statement. Although switch statements are considered faster than if-else.

## json
[Code](./data.json)

json (javaScript object notation) is the preferred format of sharing data between front-end and back-end.

## truthy and falsy values
[Code](./truthyAndFalsy.js)

Here are the falsy values that should be remembered while working with javaScript:
- false
- 0, -0, 0n
- ""
- null
- undefined
- NaN

## Logical Operation
[Code](./andOr.js)

&& and || are frequently used logical operators.

## ? operator
[Code](./condtionalOperator.js)

Not so much used.


## Loops
[Code](./loops.js)

Very frquently we encounter situation where we have to repeat pieces of code.