// // a generator is a function that return a iterator
// // the * is to indicate that the function is a generator
// function* createGenerator() {
//     // the yields are the value that the generator will go the iterate
//     yield 1;
//     yield "Santino";
//     yield 3 + 3;
//     yield true;
// }

// const iterator = createGenerator();

// // .next() allow the accest to the values
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// Generator for shop cart
function* generatorCart(cart) {
    for (let i = 0; i < cart.length; i++) {
        yield cart[i];
    }
}

const cart = ["product1", "product2", "product3"];
const iterator = generatorCart(cart);
