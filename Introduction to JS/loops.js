for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${i * 5}`)
}

let nums = new Array(1, 2, 3, 4, 5, 6, 7)
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] ** 2)
}


let score = 22
for (let i = 0; i < 10; i++) {
    console.log(score);
    score++;
    if (score == 25) {
        console.log("Life increased")
        score -= 25
        break
    }
}

score = 22
for (let i = 0; i < 10; i++) {
    console.log(score);
    score++;
    if (score == 25) {
        console.log("Level Up")
        score -= 25
        continue
    }
}