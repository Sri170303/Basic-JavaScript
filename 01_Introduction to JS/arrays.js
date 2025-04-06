const nums = [1, 2, 3, 4, 5]
const myNewArr = new Array(11, 12, 13, 14, 15)
let dcHeros = ["batman", "flash", "superman"]


console.log(nums, myNewArr, dcHeros)


dcHeros.push("wonderwoman")
console.log(dcHeros)
let removedHero = dcHeros.pop()
console.log(dcHeros)
console.log(removedHero)

dcHeros.unshift("aquaman")
console.log(dcHeros)

console.log(dcHeros.toString())

console.log(dcHeros.join(" "))

console.log(dcHeros.toString().split(',').join(" "))

console.log(dcHeros.slice(1, 3))

console.log(dcHeros.slice(-3))

console.log(dcHeros.splice(1, 3, "Septile", "GreNinja"))

console.log(dcHeros)
