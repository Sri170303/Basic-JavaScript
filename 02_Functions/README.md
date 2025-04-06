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