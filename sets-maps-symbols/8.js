const cities = ["Londres", "New York", "Madrid", "Paris"];
const orders = new Set([123, 321, 131, 102]);
const data = new Map();

data.set("name", "santino");
data.set("profession", "web developer");

// Entries iterator
// .entries() return the pair key => value
// for (let entry of cities.entries()) {
//     console.log(entry);
// }

// for (let entry of orders.entries()) {
//     console.log(entry);
// }

// Values iterator

// for (let value of cities.values()) {
//     console.log(value);
// }
// for (let value of orders.values()) {
//     console.log(value);
// }

// Keys iterator
// for (let keys of cities.keys()) {
//     console.log(keys); // print the index of the elements
// }

// for (let keys of orders.keys()) {
//     console.log(keys); // print the values as the keys
// }

// for (let keys of data.keys()) {
//     console.log(keys);
// }

// Default, it's the same to .entreis()
for (let city of cities) {
    console.log(city);
}

for (let order of orders) {
    console.log(order);
}

for (let d of data) {
    console.log(d);
}
