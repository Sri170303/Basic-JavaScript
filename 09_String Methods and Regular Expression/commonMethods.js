const str = "How are you?"
const substr = str.substring(1, 5);
console.log(substr);

const str_lower = str.toLowerCase();
console.log(str_lower);

const str_upper = str.toUpperCase();
console.log(str_upper);

const tokens = str.split(" ");
console.log(tokens);

console.log(str.at(1));

concatenated = str.concat(substr);
console.log(concatenated);

console.log(parseInt("12334"));

console.log("   hello how  ".trim());

console.log("   hello how  ".replaceAll(" ", "."));

console.log("   hello how  ".split(" "));
console.log("   hello how  ".split(" ").join(""));