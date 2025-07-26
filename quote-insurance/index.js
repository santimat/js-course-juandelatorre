// Utils
const $ = (query) => document.querySelector(query);
const $$ = (query) => document.querySelectorAll(query);

// Constructors
function Secure(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

function UI() {}

// Fill the options of the years

// Can be used arrow function because isn't use 'this'
UI.prototype.fillOptions = () => {
    const max = new Date().getFullYear(),
        min = max - 20; // min will be before 20 years than max date

    const selectYear = $("#year");

    // Use 'for' bucle from max to min to add years in ascending sort
    for (let i = max; i > min; i--) {
        let option = document.createElement("OPTION");
        option.value = i; // i == current year
        option.textContent = i;

        // Add new option to select element
        selectYear.appendChild(option);
    }
};
// Instatiate UI
const ui = new UI();

// Listeners
document.addEventListener("DOMContentLoaded", () => {
    // Fill select with the years
    ui.fillOptions();
});

eventListeners();
function eventListeners() {
    const form = $("#quote-form");
    form.addEventListener("submit", quoteInsurance);
}

// Functions
