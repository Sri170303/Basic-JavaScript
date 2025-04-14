for (let i = 0; i < 10; i++) {
    console.log(`${i*i}`)
}


let i = 0;
while (i < 10) {
    console.log(i*i);
    i = i + 1;
}


for (let i = 10; i > 0; i--) {
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    process.stdout.write(i + ' ');
}
console.log("\n");

for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log("");
}


for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= 5; j++) {
        process.stdout.write("*");
    }
    console.log("");
}

let x = 4;
do {
    console.log(x);
    x++;
} 
while (x < 4);


x = 4;
while (x < 4) {
    console.log(x);
    x++;
}


function digitSumString(num) {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result = result + parseInt(num[i]);
    }
    return result;
} 


function digitSumNum(num) {
    let result = 0;
    while (num > 0) {
        result = result + (num % 10);
        num = Math.floor(num / 10);
    }
    return result;
} 


console.log(digitSumNum(117630));

console.log(digitSumString("117630"));


for (let i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}


