let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

let arr2 = arr1.slice(1, 4);

let arr3 = arr1.slice(-4, -1); 

console.log(arr1, '\n', arr2, '\ n', arr3);

arr1.reverse();

console.log(arr1);

console.log(arr1.join(''));

delete arr1[1];

console.log(arr1);

arr1.splice(2, 4, "R1", "R2")

console.log(arr1);

arr2.splice(1)

console.log(arr2)