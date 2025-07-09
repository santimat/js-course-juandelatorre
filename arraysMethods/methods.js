const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
];

const cart = [
    { name: "Moni 27' samsung", price: 500 },
    { name: "Keyboard Logitech", price: 80 },
    { name: "Mouse Razer", price: 60 },
    { name: "Headphones Sony", price: 120 },
    { name: "Webcam Logitech", price: 90 },
    { name: "USB Hub Anker", price: 40 },
];

// some method, return true or false if a condition is true
const res = months.some((m) => m.toLowerCase() == "july"); //

// findIndex, return index if a condition is true
const idx = cart.findIndex((p) => p.price == 60);
// console.log(idx);

// reduce, return a single accumulator value
const res2 = cart.reduce((total, p) => total + p.price, 0);
// console.log("El total del carrito es:", res2);

// filter, create a new array with filtered values by a condition
const cartLowPrice = cart.filter((p) => p.price < 100);
// console.log(cartLowPrice);

// find, returns the first element matching the condition
const keyboard = cart.find((p) => p.name.toLowerCase().includes("keyboard"));
console.log(keyboard);

// spread Operator to add in end of array, this no change original array
const months2 = [...months, "December"];
