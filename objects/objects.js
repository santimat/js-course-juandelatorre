const product = {
    name: "galletitas terrabusi",
    price: 20,
    available: true,
};

// destructuring, get property directly from object
const { name, price, available } = product; // the name in brackets will be the same as in the object

console.log(name);
console.log(price);

// objects inside of objects
const car = {
    brand: "audi",
    model: "s4",
    year: 2003,
    engine: {
        horses: 600,
    },
};

const {
    brand,
    // destructuring from object inside other object
    engine: { horses },
} = car;
