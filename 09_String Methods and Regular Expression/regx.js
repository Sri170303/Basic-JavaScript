let regx = /yo/g;

let str = "How are you. Are you fine?"

let found = str.match(regx)

console.log(found);

regx = /yo/;

found = str.match(regx)

console.log(found);


regx = /are/gi;

found = str.match(regx)

console.log(found);
