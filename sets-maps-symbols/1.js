// A Set allows create a list of values without duplicates, this type of list don't uses indexs

// Create a Set
const cart = new Set();

// Add an element to the Set cart
cart.add("t-shirt");
cart.add("disk");
cart.add("shoes");
// If an attempt is made to add an element that already exists in the Set, it wont be added
cart.add("shoes");

console.log(cart);

// To get the size of a Set
console.log(cart.size);

// Ask for a value, return true or false
console.log(cart.has("shoes"));

// Delete a value, return true or false
cart.delete("disk");
// If an attempt is made to delete an element that no exists, return false
console.log(cart.delete("guitar"));

// The sets can be iterated
cart.forEach((product) => {
    console.log(product);
});

// An use example

// delete the duplicated
const nums = [1, 2, 3, 2, 4, 5, 3, 6, 1];

// creating a Set, the duplicate numbers will be deleted
const noDuplicates = new Set(nums); // Create a Set from an array
console.log(noDuplicates);
