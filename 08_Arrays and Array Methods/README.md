# Arrays

## Data Structure
In computers, storage of data in specific ways called data structures are done so that the storage and retrieval of elements of the structure can be done optimally in terms of space and time.

Arrays, Binary Trees, Linked-Lists, Stacks, Queues are some frequently used data structures.

Arrays are used to create many other advanced data structures. Heaps and Segment Trees are recommeded to be implemented using arrays. 
Many algorithms are heavily dependent on arrays.
Colored Images are combinations of 2D-arrays. So, whenever we have to process images we work with matrices or multi-dimensional arrays.

## Linear Data Structure Vs Non-Linear Data Structures
Arrays, Linked-Lists, Stacks, etc. store elements in linear fashion. 
Trees store data in hierarchical manner. Files are typical example of usage of tree data structure.

## Homogeneous and Non-Homogeneous 
In C++ and Java, arrays have to homogeneous.
In JS and Python, elements can be of different type.

Apart from this there are tuples in Python which have array like element storage but elements are not mutable once added.

## Properties of Arrays in JS
- Linear Data Structure
- Non-Homogeneous
- Contiguous
- 0-based Indexing

## Array Methods
[Code](./array.js)

- push()
- pop()
- fill()
- shift()
- unshift()

[Code](./arrayMethods.js)

- slice()
- reverse()
- join()
- delete operator
- splice()

## forEach()
[Code](./forEach.js)

It's the most convenient method for accessing and applying a call back to each accessed element.

## map()
[Code](./map.js)

It works exactly like forEach() but instead of returning undefined, it return an array of return values for each element with callback.

## filter()
[Code](./filter.js)

It filters out elements based on some condition.

## map() vs filter()
[Code](./mapVsFilter.js)

Understanding the difference is important.

## Discussion
Let's say we have to show list of laptops of HP to a user on flipkart. 
There are two ways to do it.
- We can bring all the laptops of HP to the client side and then show it to the user.
- Else we can bring all the laptops the client side and the filter HP ones out.

## map() vs filter() vs forEach()
[Code](./mapVsFilterVsForEach.js)
 
The difference between them should be known.

## every() and some()
[Code](./every.js)

Let's say we have a list of songs from a movie. We want to know whether all the songs of the playlist are in my personal playlist or not. Here, we can use every() method. 
In case of some, return is true if atleast one of the elements fulfils the condition.

## reduce()
[Code](./reduce.js)

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

## from()
[Code](./from.js) 

The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.


## Practise
[Code](./practise.js)

Let's have some fun with array methods.

