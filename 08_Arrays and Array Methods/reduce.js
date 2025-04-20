const cart_products = [
    {"id":1, "name": "iphone1", "price": 1020},
    {"id":2, "name": "iphone2", "price": 2210},
    {"id":3, "name": "iphone3", "price": 3220}
]


let totol_cart_value = 0;

cart_products.forEach((item) => {
    totol_cart_value += item.price;
})

console.log(totol_cart_value);


const cart_value = cart_products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
}, 0)

console.log(cart_value);


console.log()