let cart = [];

const product1 = { name: "Laptop", price: 1200 };
const product2 = { name: "Headphones", price: 150 };
const product3 = { name: "Mouse", price: 40 };
const product4 = { name: "Keyboard", price: 80 };

cart = [product1, product2, product3, product4];

// map create a new array
const newCart = cart.map((p) => {
    p.price += 20;
    return p;
});

console.log(newCart);
