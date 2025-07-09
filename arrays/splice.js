let cart = [];

const product1 = { name: "Laptop", price: 1200 };
const product2 = { name: "Headphones", price: 150 };
const product3 = { name: "Mouse", price: 40 };
const product4 = { name: "Keyboard", price: 80 };

cart = [product1, product2, product3, product4];

console.table(cart);

// delete from start of a array
cart.shift();
console.table(cart);

// delete from end of a array
cart.unshift();
console.table(cart);

// delete from a index n elements of a array
cart.splice(2, 1); // index: 2, items to remove: 1
console.table(cart);
