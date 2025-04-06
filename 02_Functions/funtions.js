function numSquare(num) {
    return num*num
}
console.log(numSquare(12))

function noReturn(num) {
    let numSqaure = num * num
}

console.log(noReturn(12))

let premiumMember = ""
if (premiumMember) {
    console.log("Rendering UI for premium members")
}
else {
    console.log("Rendering Normal UI")
}