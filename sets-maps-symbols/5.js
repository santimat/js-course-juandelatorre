"use strict";

// Symbols
// No symbol is the same
const sym = Symbol();
const sym2 = Symbol();

if (sym == sym2) {
    console.log("are same");
} else {
    console.log("are different");
}

const firstName = Symbol();
const lastname = Symbol();

const person = {};

// Add firstName and lastname as key the object
person[firstName] = "santino";
person[lastname] = "maturo";
person.type = "premium";
person.balance = 500;

// How the firstName and lastname are symbols to get them is used [name of the symbol]
console.log(person[firstName]);
// A symbol isn't iterable

console.log(person);

// add a description to the symbol
const nameClient = Symbol("Client name");
const client = {};
client[nameClient] = "santino";
console.log(client);
