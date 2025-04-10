function processArray(array, fn) {
    const result = new Array();
    for (let i = 0; i < array.length; i++) {
        result.push(fn(array[i]));
    }
    return result;
}

console.log(processArray([1, 2, 3, 4, 5], function cube(x) { return x*x*x; }));


function exec() {
    console.log("Hello World")
}

setTimeout(exec, 3000);