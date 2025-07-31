"use strict";

// WeakMap
const product = {
    id: 10,
};
const weakmap = new WeakMap();

weakmap.set(product, "Monitor");

console.log(weakmap.get(product));
