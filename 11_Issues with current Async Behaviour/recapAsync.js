
function blockingCodeMoreThan1Sec() {
    for (let i = 0; i < 10000000000; i++) {
        //some task
    }
    console.log("Hi")
}

let x = 10;

setTimeout(() => {
    console.log("Timer 1 done");
}, 10000)

blockingCodeMoreThan1Sec();

setTimeout(() => {
    console.log("Timer 2 done");
}, 5000)

setTimeout(() => {
    blockingCodeMoreThan1Sec();
    x++;
    console.log("Timer 3 done");
}, 100);

blockingCodeMoreThan1Sec();
console.log(x);