// // Object literal
// const client = {
//     name: "carlos",
//     balance: 20000,
// };

// // Object constructor, it's the way how the POO was known
// function Client(name, balance) {
//     this.name = name;
//     this.balance = balance;
// }

// // Create an object instance
// const santi = new Client("juan", 600);
// function formatClient(client) {
//     const { name, balance } = client;
//     return `the client ${name} has a balance of ${balance} `;
// }
// console.log(formatClient(santi));

// // The prototype to work with Enterprises
// function Enterprise(name, balance, category) {
//     this.name = name;
//     this.balance = balance;
//     this.category = category;
// }
// const CCJ = new Enterprise("codigo con juan", 4000, "online courses");

// function formatEnterprise(enterprise) {
//     const { name, balance, category } = enterprise;
//     return `the enterprise ${name} has a balance of ${balance} and belongs to the category ${category}`;
// }

// console.log(formatEnterprise(CCJ));

/* Creating a prototype */

// Constructor
function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

// Create a new method to the prototype of Client. The use of function declaration is important  because with the other ways can't be used 'this' to reference the instance of the object.
// This method return what type of client is according to their balance
Client.prototype.typeClient = function () {
    let type;

    if (this.balance > 10000) {
        type = "Gold";
    } else if (this.balance > 5000) {
        type = "Platinum";
    } else {
        type = "Regular";
    }

    return type;
};

// Method for the user to withdraw balance
Client.prototype.withDrawBalance = function (amount) {
    this.balance -= amount;
};

// Instantiate
const santi = new Client("santi", 50000);
console.log(santi.balance);
// console.log(santi.typeClient());
santi.withDrawBalance(20000);
console.log(santi.balance);

function Enterprise(name, balance, category) {
    this.name = name;
    this.balance = balance;
    this.category = category;
}

// Create an own method to return the category of Enterprise instance
Enterprise.prototype.getCategory = function () {
    return `The category of the enterprise "${
        this.name
    }" is ${this.category.toLowerCase()}`;
};

const SE = new Enterprise("code with santi", 2000, "Tech");
console.log(SE);
console.log(SE.getCategory());
