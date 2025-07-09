// const header = document.querySelector(".contenido-hero h1"); // select header from HTML document

// const navegation = document.querySelector(".navegacion");

// console.log(navegation.childNodes); // white spaces are considered elements

// console.log(navegation.children); // show elements are HTML

// console.log(navegation.children[0].nodeName); // html tag
// console.log(navegation.children[0].nodeType); // type 1, ELEMENT_NODE, 2 ATRIBUTE_NODE, 3 TEXT_NODE, etc..

// const card = document.querySelector(".card");

// console.log(card.children[1].children[1].textContent);

const floatBtn = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

function showHideFooter() {
    footer.classList.toggle("activo");
    this.textContent = footer.classList.contains("activo")
        ? "Close"
        : "Idioma y Moneda";
}

floatBtn.addEventListener("click", showHideFooter);
