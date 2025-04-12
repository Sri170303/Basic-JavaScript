# Functions

## What are functions?

Functions are the way in which we reuse code. We have a principle called DRY in programming. Functions help to apply this in programming.
DRY - Don't Repear Yourself.
Consider situation when there is need of re-rendering mobile screen when a movie card is clicked from home screen of BookMyShow. This uses functions in its background. Whatever is needed to process the movie screen is passed when we click the movie card. So, something is passed as input and a code is executed. This happens for all movie cards on the home screen. There is a function that handles this situation for all movie cards.

```js
function functionName(para1, para2, para3,..) {
    // Logic
}
```

[**return**](./funtions.js) is not mandatory in JavaScript. If function is not returning anything then it return undefined by default.
There are many functions that are already written and ready for use when needed. Like the ```console.log()```. The runtime has logic written for it.

## Arguments and Parameters

[Code](./argumentsAndParameters.js)

Parameters are the inputs that the function expects when a function is defined. They are like placeholders.
Arguments are the values that we pass during the function call.

## How do you handle variable args in JS?

[Code](./funWithFunctions.js)

- spread operator
- **arguments** keyword
  arguments keyword gives access to special object that has array like element access. The elements in this case are the actual arguments passed during function call.

## Date

[Code](./date.js)

How do you get the system data when needed? Check it!

## Try Yourself

[Code](./homeWork.js)

## Function Expression

[Code]()

- Why do we need it?
- And how to identify whether a written function is a function declaration or function expression?

Well we are going to answer this. But before that we should know that in JS functions are considered as first class citizen.
Well JS is heavily influenced by functional programming paradigm.

Key features that should be known are: 

- In Js we can store function anywhere.
- can pass functions are arguments.
- We can also return function.

If the first valid word is not "function" then it is not a function. If not a function then it is a function expression.

What difference does it make whether we use function declaration or function expression?
Scoping mechanism in them are different.

Types of function expression:

- [Named function expression](./namedFunctionExpression.js)
- [Anonymous function expression](./anonymousFunctionExpression.js)
- IIFE (Immediately Invoked Function Expression)

## Why named function expression is important?

- Debugging 
- Recursion
- Code Readability

## Passing Functions as Args

[Code](./passFunctionAsArg.js)

When functions are passed as arguments to another function, we can see the name of function in the call stack using trace when it is a named function expression. If it is an anonymous function expression then we cannot see it.

## Function Call Stack

[Code](./callStack.js)

Files are stored in Hard Disk. They are brought to RAM for execution but actual execution happens in processor.
System Monitor shows all processes running on the system.

Stack is DS that has many application in programming. There are used in tab mantaning, process control, file manager, etc. It allows LIFO accessing of elements.

The order in which the functions must be called and executed is maintained using call-stack. When a function is called, it is pushed onto the stack. When a function returns after completing the execution, it is popped from the stack. The function on the top of call stack is the currently executing one.

## Kernel Stack

Kernel Stack is used during context switching.It is maintained by OS.
<img title="" src="Screenshot%20from%202025-04-12%2014-36-51.png" alt="" data-align="center">

## Recursion

[Code](./recursion.js)

Recursion is name given to situation when a function call itself. This needs a litte care to prevent falling into condition where there is no end to function call.

<img src="./Screenshot%20from%202025-04-12%2014-43-52.png" title="" alt="Recursion" data-align="center">