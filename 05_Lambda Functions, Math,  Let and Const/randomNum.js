/**
 * 
 * @param {x} Lower_Limit 
 * @param {y} Upper_Limit
 * @returns random number in [x, y]
 * 
 */

function randomInRange(x, y) {
    return x + (y - x)* Math.random();
}



console.log(randomInRange(-3, 5))