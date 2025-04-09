const namedFunctionExp = function process(num) {
    const result = isEvenOdd(num)
    console.log(result)
}

const anonymousFunctionExp = function (num) {
    const result = isEvenOdd(num)
    console.log(result)
}

function isEvenOdd(num) {
    console.trace()
    return num % 2 == 0
}

namedFunctionExp(22)
// anonymousFunctionExp(22)