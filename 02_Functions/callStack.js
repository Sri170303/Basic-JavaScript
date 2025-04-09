function f1(num) {
    console.log("Inside f1()")
    f2(num);
}

function f2(num) {
    console.log("Inside f2()")
    f3(num);
}

function f3(num) {
    console.log("Inside f3()")
    f4(num)
}

function f4(num) {
    console.log("Inside f4()")
    console.log(num)
    return
}

f1(22)