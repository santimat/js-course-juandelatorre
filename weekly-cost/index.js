// Utils
const $ = (q) => document.querySelector(q);

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
        this.expenses = [];
    }

    newExpense(expense) {
        this.expenses = [...this.expenses, expense];
        this.calculateRemaining();
    }

    calculateRemaining() {
        // Start in the budget and substract every amount of every expense
        this.remaining = this.expenses.reduce(
            (budget, { amount }) => budget - amount,
            this.budget
        );
    }

    deleteExpense(id) {
        // select the expense element by his data attribute
        this.expenses = this.expenses.filter((expense) => expense.id != id);
        this.calculateRemaining();
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
        const prevAlert = form.parentElement.querySelector(".alert");
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

    showExpenses(expenses) {
        // Clear previous expenses
        while (expenseList.firstChild) {
            expenseList.firstChild.remove();
        }

        // Iterate
        expenses.length &&
            expenses.forEach((expense) => {
                // Destructuring from expense object
                const { amount, name, id } = expense;

                // Create a LI element
                const newExpense = document.createElement("LI");
                // some classes are of boostrap
                newExpense.className =
                    "list-group-item d-flex justify-content-between align-items-center";
                // add an attribute with the id
                newExpense.dataset.id = id;
                newExpense.textContent = name;

                // Add the HTML of the expense
                const amountSpan = document.createElement("SPAN");
                amountSpan.className = "badge badge-primary badge-pill";
                amountSpan.textContent = `$${amount}`;
                newExpense.appendChild(amountSpan);

                // Delete btn
                const deleteBtn = document.createElement("BUTTON");
                deleteBtn.className = "btn btn-danger delete-expense";
                deleteBtn.innerHTML = "Delete &times";
                deleteBtn.onclick = () => {
                    deleteExpense(id);
                };

                // add the delete btn to newExpense element
                newExpense.appendChild(deleteBtn);

                // Add to HTML
                expenseList.appendChild(newExpense);
            });
    }

    updateRemaining(remaining) {
        $("#remaining").textContent = remaining;
    }

    checkBudget(ObjBudget) {
        const { budget, remaining } = ObjBudget;
        const remainingDiv = $(".remaining");

        // Check if was spent the 75% of the budget
        if (budget / 4 > remaining) {
            remainingDiv.classList.remove("alert-succes", "alert-warning");
            remainingDiv.classList.add("alert-danger");
        }
        // Check for the 50%
        else if (budget / 2 > remaining) {
            remainingDiv.classList.remove("alert-succes");
            remainingDiv.classList.add("alert-warning");
        } else {
            remainingDiv.classList.remove("alert-danger", "alert-warning");
            remainingDiv.classList.add("alert-success");
        }

        // If the total <= 0
        if (remaining <= 0) {
            userInterface.showAlert("The budget was used up", "error");
            form.querySelector("button[type='submit']").disabled = "true";
        }
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
    const amount = Number($("#amount").value.trim());

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

    // Expense object
    // name and expense will be a properties of the expense object and they will get the corresponding values.
    const expense = { name, amount, id: Date.now() };

    // Add a new expense
    budget.newExpense(expense);

    // After the new expense is correctly added, display an alert
    userInterface.showAlert({ msg: "Added", type: "success" });

    // Print expenses
    // destructuring to send only the expenses array to showExpenses() method
    const { expenses, remaining } = budget;

    userInterface.showExpenses(expenses);

    // Update the HTML remaining value
    userInterface.updateRemaining(remaining);

    userInterface.checkBudget(budget);

    // Reset the form
    form.reset();
}

function deleteExpense(id) {
    budget.deleteExpense(id);
    const { expenses, remaining } = budget;
    userInterface.showExpenses(expenses);
    userInterface.updateRemaining(remaining);
    userInterface.checkBudget(budget);
}
