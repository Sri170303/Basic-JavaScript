let arr1 = [12, 13, 14, 15, 16, 17, 18, 19, 20];

arr1.forEach((x, idx) => {
    console.log(`${idx} : ${x}`);
})


let fun = function dummyForEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i);
    }
}

fun([1, 2, 3], (x, idx) => {
    console.log(`${idx} : ${x**2}`);
})