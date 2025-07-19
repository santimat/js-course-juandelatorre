// set is for save in local storage, just can save strings
// key - value
localStorage.setItem("name", "santino");

const myName = localStorage.getItem("name");

// how save an object in local store
const person = {
    name: "juan",
    age: 21,
};

// convert object to string
const personString = JSON.stringify(person);
localStorage.setItem("person", personString);

// when we want use to the object in local storage, we need to convert it back to an object with JSON.parse()
const personObject = JSON.parse(localStorage.getItem("person"));

// delete elements from local storage
localStorage.removeItem("name");

// to update a log we need to rewrite it
personObject.birthday = "21/03/2003";
localStorage.setItem("person", JSON.stringify(personObject));

// clear all local storage
localStorage.clear();
