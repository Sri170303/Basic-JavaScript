let arr1 = [1, 2, 3, 4, 5, 6, 7];

let even_elements = arr1.filter((element) => {
    return element%2 == 0;
})

console.log(even_elements);

const products = [
    {"id":1, "name": "iphone1", "price": 1020},
    {"id":2, "name": "iphone2", "price": 2210},
    {"id":3, "name": "iphone3", "price": 3220}
]


const premium_category_products = products.filter((product) => {
    return product.price > 1500;
})

console.log(premium_category_products);