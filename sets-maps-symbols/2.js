// WeakSet

// Create a WeakSet, It only accept objects
const weakset = new WeakSet();

const client = {
    name: "santi",
    balance: 200,
};

weakset.add(client);

// If an attempt is made to add another type of data, this wont be added
// const name = "santino";
// weakset.add(name);

// console.log(weakset.has(client));
// weakset.delete(client);

// Can't be accessed to the size of a WeakSet nor iterate them
console.log(weakset.size);

console.log(weakset);
