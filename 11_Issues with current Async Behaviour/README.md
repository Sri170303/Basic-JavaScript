# Issues with Asynchronous Behaviour 
## Asynchronous JS
[Code](./recapAsync.js)

Till now we have been using async code having callbacks. But use of callback itself can be problematic.

## Problems with Callbacks
[Code](./callBackProblem.js)

- When we use callbacks too much, code can become a bit non-intuitive(Less Readable Code).
- Inversion of Control

## Inversion of control(IOC)
- What if the callback code is buggy.
Say we have a payment gateway by razorpay. Generally there are two ways to complete a payment request. 
    - There can be network call to complete a request
    - There could be an SDK that has code for completing the task with callback

Relying on a third party's code could be risky as we don't have control on implementation of solutions used from there.
- Second problem is pretty obvious. We are relying on the runtime to control processes to be put in event loop and event queue. If this implementation has some problem, then the system is not suitable.

## Solution of IOC: Promises
- It is a special javascript object.
- They native to JS language.
- Even promises are readability enhancer compared to callbacks.
- Just like callbacks, promised can be used with synchronous and asynchronous code.
- Promises are considered as placeholders for future tasks.

## How to use a promise?
Let's understand a few properties of promises:
- Status (Pending, Fulfiled, Rejected)
- Value 
- onFulfilment
- onRejection
Note: There are other function apart from these properties. Properties define who you are. Functions define what you can do.

## States of a promise
- Possible States: Pending, Rejected, Fulfiled
- The moment a promise object is created it goes into pending state.
- From pending it can go to one of rejected or fulfiled state.
- Change of state happens according to some logic and programmed when promise is created.
- Consumer of promise don't decide when and how the state changes.
- A promise can remain in pending state forever.

# Value of a promise
- Initially when promise is created, it has pending status and value property is undefined. 
- When the state of the promise is changed, the value property may change.
- Value of promise cannot change without state change.
- Once value of a promise changes, it cannot change again.

# onFulfilment
- It is an array that holds functions which we want to execute once promise state goes from pending to fulfiled state.
- The consumer of of the promise writes the methods & manually register them into the array.
- The array remains empty until the first function is registered.
- State change will not control, when the array is empty.
- When the functions in the array will get executed is controlled by the state change.
- How to register functions? Going to learn that in next classes.

# onRejected
- It is also an array. The difference between onFulfilment and onRejected is that the methods registered in this case are to be executed when state of promise changes from pending to rejected.