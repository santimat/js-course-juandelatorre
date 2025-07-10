// run when html document is ready
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("hi");
// });

// const nav = document.querySelector(".navegacion");

// // run when user leave an element
// nav.addEventListener("mouseout", () => {
//     nav.style.background = "transparent";
// });

// // run when user enter on the nav element
// nav.addEventListener("mouseenter", () => {
//     nav.style.background = "white";
// });

const search = document.querySelector(".busqueda");

// run when input value's change
search.addEventListener("input", (e) => {
    console.log(e.target.value);
});

// run when the user copies something from an input
search.addEventListener("copy", (e) => {
    e.preventDefault(); // blocked copy with ctrl+c for the users
});

// to stop Event Bubblig using e.stopPropagation()

const cards = document.querySelectorAll(".hacer .card");
const infoDivs = document.querySelectorAll(".hacer .card .info");
const cardTitles = document.querySelectorAll(".hacer .card .titulo");
cards.forEach((c) => {
    c.addEventListener("click", () => {
        console.log("im a card");
    });
});

infoDivs.forEach((iD) => {
    iD.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("im a div with information");
    });
});

cardTitles.forEach((cT) => {
    cT.addEventListener("click", () => {
        console.log("im a title card");
    });
});
