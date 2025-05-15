# Number, Date

## Fun discussion

== , === operator are not that simple as we think. The documentation of JS details how they operate on operands provided and return the result afterwards.

![](./Screenshot%20from%202025-04-12%2023-26-58.png)
![](./Screenshot%20from%202025-04-12%2023-27-15.png)

From here it's clear that things aren't undefined about JavaScript. The official documentation covers things about JS. Just need to look and understand.

## NaN

[Code](./nan.js)

Let's say we have a collection to search for a target. We need to return the index if target is found. 
What should be do if the target is not present?
Can we go and return null or undefined?

- null is used to reflect invalidity
- undefined is used for uninitialized variables 

But we have to return a number as index is going to be a number.
Here, we can use NaN.  It's the only value in Js which is not equal to itself.

But there can be situation where we need to return NaN from a function and check if we have got NaN.

We have specific method for that purpose. 
isNaN();

## Precision

[Code](./number.js)

- toPrecision(x) 
  x is the number of significant digits we want

- toFixed(y)
  y is the number digits after decimal we want to show

## Types in JS

The ECMAScript language types are Undefined, Null, Boolean, String, Symbol, Number, BigInt, and Object. 
But why do everyone says, "Everything in JS is an Object."?

Check the below output of console in Chrome.

![](./Screenshot%20from%202025-04-13%2000-17-31.png)

So, here when we assign a primitive value to a variable, it has a primitive value only. Primitive value like number do not have method like toString(). Objects have such properties. So, when we try to call method toString() with a variable having primitve value, it converts the primitive number into non-primtive number (object) and then calls the function toString() on it.
Same thing happens when we enclose a primitive value and call method toString().

![](./Screenshot%20from%202025-04-13%2000-24-14.png)

**"Every type in JS has the capabiltiy to behave as an object"**
This is called as Boxing by members of JS communities.

## Why there is -0 ?
