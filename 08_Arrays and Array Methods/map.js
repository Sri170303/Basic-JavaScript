const arr1 = [1, 2, 3, 4, 5, 6];

const arr2 = arr1.map((x) => {
    return x*x;
});

console.log(arr2);

const products = [
    {"id":1, "name": "iphone1", "price": 1020},
    {"id":2, "name": "iphone2", "price": 1210},
    {"id":3, "name": "iphone3", "price": 1220}
]

const products_modified = products.map((product) => {
    return {id: product.id, name: product.name};
})

console.log(products_modified);