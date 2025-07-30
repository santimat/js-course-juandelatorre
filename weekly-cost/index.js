// Utils
const $ = (q) => document.querySelector(q);
const $$ = (q) => document.querySelectorAll(q);

// Vars
const form = $("#add-expense");
const expenseList = $("#expenses ul");

// Events
eventListeners();
function eventListeners() {
    document.addEventListener("DOMContentLoaded", askBudget);
    form.addEventListener("submit", addExpense);
}

// Classes
class Budget {
    constructor(budget) {
        this.budget = budget;
        this.remaining = budget;
        this.expense = [];
    }
}

// This class will work how HTML render
class UserInterface {
    // Destructuring to the received object to get budget and remaining
    insertBudget({ budget, remaining }) {
        // Add to the HTML
        $("#total").textContent = budget;
        $("#remaining").textContent = remaining;
    }

    showAlert({ msg, type }) {
        // remove the previous alert if it already exists
        const prevAlert = $(".alert");
        prevAlert && prevAlert.remove();

        // Create the div
        const msgDiv = document.createElement("DIV");
        msgDiv.classList.add(
            "text-center",
            "alert",
            // Depending of the alert type
            type === "error" ? "alert-danger" : "alert-success"
        );

        // error msg
        msgDiv.textContent = msg;

        // Insert in the HTML
        $(".primary").insertBefore(msgDiv, form);

        // Remove the alert after 2.5s
        setTimeout(() => {
            msgDiv.remove();
        }, 2500);
    }
}

// Instances
let budget;
let userInterface = new UserInterface();

// Functions
function askBudget() {
    // Number() to convert a valid string to a number
    let userBudget = Number(prompt("What is your budget?"));
    while (isNaN(userBudget) || userBudget == null || userBudget <= 0) {
        userBudget = Number(prompt("The budget must be a valid number"));
    }

    // Instatiate a Budget class with the valid budget
    budget = new Budget(userBudget);

    // Insert the information with the method of the userInterface object
    userInterface.insertBudget(budget);
}

function addExpense(e) {
    e.preventDefault();

    // Read data from the form
    const name = $("#expense").value.trim();
    const amount = $("#amount").value.trim();

    // Validate
    if (name === "" || amount === "") {
        // console.log("Both fields must be filled and valid");
        userInterface.showAlert({
            msg: "Both fields must be filled",
            type: "error",
        });
        return;
    } else if (amount <= 0 || isNaN(amount)) {
        userInterface.showAlert({
            msg: "The amount must be valid",
            type: "error",
        });
        return;
    }
}
