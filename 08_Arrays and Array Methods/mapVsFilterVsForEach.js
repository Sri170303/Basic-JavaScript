const users = [2, 3, 4];
const modified_user = users.map(user => user + 2);
console.log(modified_user);



const items = [
    {name : "orange", type : "fruit"},
    {name : "laptop", type : "electronic"},
    {name : "apple", type : "fruit"},
    {name : "kettle", type : "electronic"},
]

const fruits = items.filter(x => x.type == "fruit").map(x => x.name);

console.log(fruits);


const nums = [1, 2, 3, 4, 5];
let sum = 0;
nums.forEach(num => {
    if (num % 2 == 0) {
        sum += num;
    }
});
console.log(sum)