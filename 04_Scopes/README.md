# Scopes

[Code](./notInterpreted.js)
Scope defines visibility of variables. Understanding scoping mechanism in JS needs us to to first understand how JS code execution happens. 

Is JS a compiled language? No.
Is JS an interpreted language? No.
Well JS is hybrid of both. And like it Java and Python are also hybrid of compiled and interpreted language.

Bash Shell Programmiing is an example of interpreted code execution.
C, C++ are purely compiled language.

```js
console.log("Hello World");
console.lo("123";
console.log("Wow");
```

A simple situation can be seen above where JS throws error. If JS would have been an interpreted language then it should have printed "Hello World" and shown syntax error for second line. But upon execution it shows error from the start and does not executes even the first statement. So, it cannot be an interpreted language.

## How execution in JS happens

JS executes code in two phases:

- Compilation Phase
  Synatax checking and Scope Resolution happens in this phase
- Execution Phase
  Value Assignment and Code Execution happens in this phase

## Diving into lexical scoping

[Code](./scopeEx1.js)
In phase one scope resolution happens for formally declared variables.
Formally declared varibles are those which are delcared with var, let, const. Even declaration with function is considered as formal declaration.

**var** gives us function scope if declaration is inside a function else it gives a global scope.

Steps:

- First check all formal declarations and assign scope to them.
- In second when execution starts, assign value to variables. 

This causes an issue called Auto Global promotion.  

In [example-3](./scopeEx3.js) auto global promotion happens but in [example-4](./scopeEx4.js) it doesn't.

Since this is ambiguous, we need some solution for it.

Strict Mode is the solution for auto global promotion.

**Lexical Scoping** means doing scope resolution ahead of execution.
**Dyanamic Scoping** is not supported by JS.

## Function Scope

[Code](./functionScope.js)
variables declared using var get function scope. Until the declaration + initialization of the variable happens, the variable has undefined stored in it. 
Even before the value assignment the run-time knows that there is a variable if it is found during scope resolution.

## Temporal Dead Zone

[Code](./TDZ.js)  
It is the term used to describe the state where variables are unreachable.
When we declare variable using let and const, they stay in TDZ till there declaration hits.
TDZ makes JS consistent with C++, Java where usage of a variable before declaration is not allowed.
It happens for global variables as well.
In fact usage of let and const make sure that the variable we declare is not accessible outside.

Old code bases have usage of var. So, knowing how it behaves can help if working on legacy code.

## Hoisting

[Code](./hoisting.js)
Phenomenon in which functions and variables can be used before declaration. This happens due to lexical scoping.
More than a feature of JS, it's a consequence of lexical scoping.

## let vs var

[Code](./letVsVar.js)  
Finally, let's check the difference in let and var using the above example.

## Function expression

[Code](./functionExpression.js)  
In function expression like above the scope of function is limited to the variable. So, after the assignment we cannot assign it.
