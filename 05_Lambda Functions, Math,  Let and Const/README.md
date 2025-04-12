# Lambda Function, Math, Let and Const

## Let vs Const vs Var

- let , const support block scope.
  let, const also give access to TDZ.

Here's an important difference between let and const.
<img src="./Screenshot%20from%202025-04-12%2014-19-32.png" title="" alt="" data-align="center">
<img src="./Screenshot%20from%202025-04-12%2014-19-40.png" title="" alt="" data-align="center">

It's not like we cannot changes values once declared using const. We just cannot re-assign them.
In case of objects we can change their members.
<img src="./Screenshot%20from%202025-04-12%2017-07-55.png" title="" alt="" data-align="center">

- var supports function scope if declaration is inside a function else it gives a global scope.

## Reference Copy

[Code](./referenceCopy.js)

Variables declared using let can be reassigned altogether. We can still copy reference of an already declared object with let.
Using const we can do the same thing but reassignment is not supported.

## Math Library

[Code](./math.js)

We have a library provided to us with almost all mathematical functions. They provide solution to specific problems.
There are many interesting functions in Math Library.
One specific function that can be used every now and then is Math.random().

[Code](./randomNum.js)

Snake Game used this for random generating location of food for snake.

## Framework

Framework help to provide end-to-end solutions. Suppose we have to build desktop app. Electron is the JS Framework that helps for this purpose.

## Lambda functions

[Code](./lambdaFunctions.js)
They are also called arrow functions or anonymous functions.