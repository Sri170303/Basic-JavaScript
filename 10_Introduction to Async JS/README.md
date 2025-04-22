# Asynchronous Programming

## Why asynchronous programming

We have been writing code where execution of code was done line by line. But in real world applications, a lot of times, things happen side by side. 
For example when we open Twitter, side bars on left and right load first and the content in between loads a bit later.
Let's say when we book a movie on bookMyShow and make payment, the payment goes into pending state and we can go back to the home page. Until we get the confirmation of booking we are free to interact with the application. When the confirmation arrives, we can see that in our bookings page.
In above two situation, we have tasks running side by side or in asynchronous manner.
This is very frequently used while building applications.

Here are simple examples of synchronous and asynchronous code execution.

- [Synchronous](./synchronous.js)
- [Asynchronous](./asynchronous.js)

## Threads

Threads are light weight processes. Initially when execution starts, there is single main thread. When needed, braches from main thread come out and execute some part of code. While the main thread keeps executing, execution of parallel threads happen side by side. 
Java, Python, C++, C# support multithreading.
Fun-fact: **JavaScript alone is single threaded**.
If JS is single threaded, how it can do so many tasks which are asynchously done?

## How using JS tasks happen asynchronously?

JS handles synchronous and asynchronous tasks by the support of run-time. 
There are functions that we use in our JS code that are not native part of JS language (Refer to offical JS documentation). Functions like setTimeout() are supported by the run-time.
All native pieces of code are executed on the main thread.
Browser provide us functionalities like:

```js
document.getElementById();
document.getElementByClassName();
setTimeout();
setInterval();
```

Run-time environments like Nodejs provide capabilties like access to file system, terminal, etc.

Depending on the run-time JS code is executed and different tasks can be performed.

Native pieces of code are always executed on the main thread and block the main thread until it gets executed.

Features of run-time are executed on parallel threads. Whenever, a run-time feature is hit, trigger is generated for run-time to create a thread for it and start its execution. While the execution on this thread happens, the native features can be executed on the main thread.

While there is something on the main thread for execution, the run-time responses have to wait.

Here are some examples.
[Code Example 1](./synchronousVsAsynchronous.js)
[Code Example 2](./mainThread.js)

## How this setup works?

**Event Loop** and **Event Queue** help in the the execution of native and run-time featues together giving priority to native features.

Event loop checks continuosly whether the main thread is empty or not.

Event queue/ Callback queue keeps track of which run-time task will be given chance to access the main thread when all the native features are executed.


