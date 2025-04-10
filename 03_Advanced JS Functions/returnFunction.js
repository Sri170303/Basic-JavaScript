function fun() {
    console.log("Called fun()");

    return function cleanUp() {
        console.log("Clearing up the resources");
    }
}

const result = fun();
console.log(result)
result()