// It's recommended  that the class names start with uppercase
// Class Expression
const Client2 = class {};

// Class declaration, It's the most used
class Client {
    // To indicate that a property will be private, use the #.
    // The recommendation is to create a method to get, set or delete any private property
    #name;
    constructor(name, balance) {
        this.#name = name; // name will be a private propery
        this.balance = balance;
    }

    // Methods
    showInfo() {
        return `Client: ${this.#name}, your balance is $${this.balance}`;
    }

    // static properties, this make posible the use of a method without the object instance
    static welcome() {
        return "Welcome to the ATM";
    }
}

// Instatiate the class
const santi = new Client("santino", 400);
console.log(santi.showInfo());
console.log(Client.welcome());

// Inheritance
// Company inherits from client, this means that the company is a child of the Client class
class Company extends Client {
    constructor(name, balance, phone, category) {
        // It is the right way to inherits properties from the father class
        super(name, balance);

        this.phone = phone;
        this.category = category;
    }
    // When a method from father class is written, it´s rewritten in the child class
    static welcome() {
        return `Welcome to the company`;
    }
}

const company = new Company("Codigo divertido", 500, 2346509733, "tech");
console.log(company);
console.log(Company.welcome());
console.log(company.showInfo());

// A class with setName method
class Person {
    #name;
    // Setter
    setName(name) {
        this.#name = name;
    }

    // Getter
    getName() {
        return this.#name;
    }
}

const person1 = new Person();
person1.setName("pedro");
console.log(person1.getName());
