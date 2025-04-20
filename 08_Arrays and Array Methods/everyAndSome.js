let nums = [101, 102, 103, 104];
console.log(nums.every((x) => x > 100));

let nums2 = [99, 101, 102, 103, 104];
console.log(nums2.every((x) => x > 100));

let nums3 = [99, 101, 102, 103, 104];
console.log(nums3.some((x) => x < 100));
console.log(nums.some((x) => x < 100));

