// function to check if a function is pallindrome 
function pallindromeCheck(str) {
    for(let i = 0, j = str.length-1; i< j; i++) {
        if (str[i] != str[j]) 
            return false
        return true
    }
}

console.log(pallindromeCheck("malalam"))
console.log(pallindromeCheck("poem"))

// calculate factorial
function factorial(num) {
    let result = 1;
    if (num == 0 || num == 1) 
        return result
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result
}

console.log(factorial(5))