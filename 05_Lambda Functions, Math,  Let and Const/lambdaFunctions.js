function processArray(array, fun) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i} : ${fun(array[i])}`);
    }
}

processArray([1, 2, 3, 4, 5], (x) => {return x*x*x}); 
processArray([1, 2, 3, 4, 5], (x) => x*x*x); 
processArray([1, 2, 3, 4, 5], x => x*x*x); 

const g = (x, y) => {
    return x + y;
}

console.log(g(22, 44));