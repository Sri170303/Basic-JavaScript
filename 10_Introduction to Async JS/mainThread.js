console.log("Task 1 on main thread");
for (let i = 0; i < 100000; i++);
console.log("Task 1 on main thread completed");

console.log("Task 2 on main thread");
for (let i = 0; i < 100000; i++);
console.log("Task 2 on main thread completed");

console.log("Started timer 1")
setTimeout(() => {
    console.log("Completed timer 1")
}, 100000)


console.log("Started timer 2")
setTimeout(() => {
    console.log("Completed timer 2")
}, 0);


console.log("Task 3 on main thread");
for (let i = 0; i < 100000; i++);
console.log("Task 3 on main thread completed");


