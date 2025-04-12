console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);


const x = 24;
console.log(x.toString());
console.log(x.toString(2));
console.log(x.toString(8));


console.log(parseInt("1001", 2));
console.log(parseInt("501", 8));

const y = 45.33221872;
console.log(y.toPrecision(6));
console.log(y.toFixed(6));


const zero = 0;
const postiveZero = +0;
const negativeZero = -0;

console.log(zero, postiveZero, negativeZero);
console.log(zero == negativeZero);
console.log(zero === negativeZero);


console.log(Object.is(negativeZero, -0));
console.log(Object.is(negativeZero, 0));

