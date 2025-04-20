//custom map
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function customMap(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
}

const arr_sq = customMap(arr, element => element ** 2);
console.log(arr_sq);
console.log(arr.map((x) => x**2)); // to check whether it's working as intended

// sample use case of filter
const numbers = [1, -2, 3, -4, 5];
const positives = numbers.filter(n => n > 0);
console.log(positives);

// output prediction
const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result = arrays.map(arr => arr.filter(num => num % 2 === 0));
console.log(result);

// reduce example
function sumOfSquares(nums) {
    const numsSq = nums.reduce((accumulator, currentElement) => {
        return accumulator + currentElement**2;
    }, 0);
    return numsSq;
}

console.log(sumOfSquares([1, 2, 3, 4]));

// forEach example
let sum = 0;
const nums = [1, 2, 3, 4, 5];
nums.forEach((num, index) => {
if (index % 2 === 0) sum += num;
});
console.log(sum);

// from example
const arrayLike = { length: 5 };
const newArray = Array.from(arrayLike, (v, i) => i);
console.log(newArray);

// filter and reduce
const obj = [
    {name: "anker", value: 1200},
    {name: "sneakers", value: 120},
    {name: "bag", value: 2500},
    {name: "glasses", value: 3000},
    {name: "Atcase", value: 1200},
]
console.log(obj.filter((x) => /^[aA]/g.test(x.name)).reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value;
}, 0));

// good example on reduce
const nums1 = [1, 2, 3, 4, 5];
const result1 = nums.reduce((acc, curr) => {
if (curr % 2 === 0) {
acc.even.push(curr);
} else {
acc.odd.push(curr);
}
return acc;
}, { odd: [], even: [] });
console.log(result1);


// create array from array-like object
function createArray(arrLike) {
    const arr = Array(arrLike.length);
    for (let i = arrLike.length-1; i >= 0; i--) {
        arr[i] = arrLike[i];
    }
    return arr;
}

console.log(createArray({0: 'a', 1: 'b', 2: 'c', length: 3}));


// forEach example
const nums2 = [1, 2, 3, 4, 5];
nums2.forEach((num, idx) => {
    nums2[idx] = num *= 2;
});
console.log(nums2);