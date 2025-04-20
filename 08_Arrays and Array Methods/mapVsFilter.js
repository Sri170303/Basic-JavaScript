let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const arr2 = arr1.map((element) => {
    return element%2 == 0;
});

console.log(arr2);

const arr3 = arr1.map((element) => {
    if (element%2 == 0) return element;
});

console.log(arr3);

const arr4 = arr1.filter((element) => {
    return element%2 == 0;
});

console.log(arr4);