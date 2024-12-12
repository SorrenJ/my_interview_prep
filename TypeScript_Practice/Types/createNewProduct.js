"use strict";
/* Create a new product type alias that represents a product with the
following fields: name (string), price (number or string), and category (string).
Then, create a function createProduct that takes a product as a parameter
and prints out its details.
*/
const newProduct = {
    name: "Laptop",
    price: 999,
    category: "Electronics"
};
function createProduct(product) {
    console.log(`Product Name: ${product.name}`);
    console.log(`Product Price: ${product.price}`);
    console.log(`Product Category: ${product.category}`);
}
;
createProduct(newProduct);
