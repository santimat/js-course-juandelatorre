// object literal
const product = {
    name: "galletitas terrabusi",
    price: 20,
    available: true,
};

// object constructor
function Product(name, price) {
    this.name = name;
    this.price = price;
    this.available = true; // default value
}

const product2 = new Product("Monitor samsung 24'", 200);

console.log(product2);
