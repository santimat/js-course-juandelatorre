"use strict";

// Maps are lists order by key and value, the key and value will be any type of data.

// Create a map
const client = new Map();

// Add a key and value
client.set("name", "santino");
client.set("type", "premium");
client.set("balance", 200);

// Is possible add a boolean as a key and a array as a value, etc
client.set(true, [1, 2, 3, "santino"]);

// To get the size
console.log(client.size);

// Check if a value exists
console.log(client.has("name"));

// Get the value of a map
console.log(client.get("name")); // print "santino"

// Delete a map by its key
client.delete("balance");

console.log(client);

const patient = new Map([
    ["name", "patient"],
    ["room", "undefined"],
]);

patient.set("dr", "dr assigned");

// If set is used on a key that already exists it will be rewritten
patient.set("name", "patient2");

console.log(patient);

// as the maps are a key => value structure when is added the parameter index, it gets the value of the key
patient.forEach((data, index) => console.log(data, index));
