let x = [];

console.log(x);

let arr = [10, "sanket", null, true, 33.33];

console.log(arr)

let arr2 = new Array(15);

console.log(arr2.length)


let arr3 = Array(10).fill(0, 4, 6);
console.log(arr3);
console.log(arr3[0]);
console.log(arr3.length);


let arr4 = new Array(10).fill(0);
console.log(arr4);
arr4.push(55, 122);
console.log(arr4);
arr4.unshift(77);
console.log(arr4);
arr4.shift();
console.log(arr4);

arr4[15] = 19;
console.log(arr4);


arr4.pop();
console.log(arr4);


