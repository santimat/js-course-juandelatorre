// Iterators
function createIterator(arr) {
    // Counter
    let i = 0;

    // Elements to iterate

    return {
        siguiente: () => {
            const end = i >= arr.length;
            const value = !end ? arr[i++] : undefined;

            return {
                end,
                value,
            };
        },
    };
}

const cart = ["product1", "product2", "product3", "product4", "product5"];

// Use the iterator
const iterateCart = createIterator(cart);

console.log(iterateCart.siguiente());
console.log(iterateCart.siguiente());
console.log(iterateCart.siguiente());
console.log(iterateCart.siguiente());
console.log(iterateCart.siguiente());
console.log(iterateCart.siguiente());
