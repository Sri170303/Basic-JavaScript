console.log(Array.from("foo"));

console.log(Array.from([1, 2, 3], (x) => x + x));


function factorial(num) {
    return Array.from({length: num}, (element, i) => i+1).reduce((accumulator, currentValue) => {
        return accumulator * currentValue
    }, 1)
}

console.log(factorial(5));
