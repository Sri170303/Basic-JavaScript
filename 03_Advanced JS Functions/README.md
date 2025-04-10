# Advanced JS Functions

## Passing function as an arguments
[Code](callBack.js)

In JS, we can pass functions as arguments. **Call Backs** are the function that we pass as argument. The function to which it is passed is called a **Higher Order Function**.

## Important Use Case of Call Back
Sometimes a function might not complete immediately and will complete in future. Like downloading a 10GB file. In cases like this, we control what will happen after the function completes with the help of call backs.

## Inbuilt functions in JS
JS gives us access to some already built in functions.
Ex- Math.sqrt(), forEach(), map, etc.
console.log() is not a built in method in JS. It is method that the run-time environment gives us access too.


## Returning function 
[Code](./returnFunction.js)

As we discussed earlier, functions are first class citizens in JS. We can return function(s) from a function.

## Immediately Invoked Function Expression (IIFE)
[Code](./iife.js)

Wherever we define an IIFE, it can be executed there only and cannot be accessed anywhere else. IIFE(s) have their own scope of execution. Anytime we want to exclude something from global scope, we can use IIFE. 

Syntax of IIFE is important. 
```js
(function () {
    // What we want to execute
})();
```

Can this be done by introducing block scope? **No.**
Their will be scope conflicts and the part that we think needs to stay as blocked scope can change to global scope. 
Here is a situation where conflicts can occur:  
[Code](./withoutIIFE.js)

We can understand this better after scoping mechanism in JS is covered.

## Chaining of functions
[Code]()

```js
obj1.fun1(x).fun2(y).fun3(z)...
```

## Publisher Subscriber Architecture 
We have to learn this for interviews. Not for SDE-I.


