function isEvenOdd(x, fn) {
    let result = fn(x);
    return result;
}

console.log(isEvenOdd(22, function (x) {
    console.trace()
    return x ** 2
}))