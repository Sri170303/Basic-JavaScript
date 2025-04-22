for (let i = 0; i < 1000000000; i++) {};

console.log("Run-time feature execution starts");
setTimeout(() => { console.log("Completed run-time task")}, 10000);

console.log("On main thread");