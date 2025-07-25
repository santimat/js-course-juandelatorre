function Client(name, balance) {
    this.balance = balance;
    this.name = name;
}

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

Client.prototype.withDrawBalance = function (amount) {
    this.balance -= amount;
};

function Person(name, balance, phone) {
    // How Person share name and balance with Client, can be inherited from Client using the call() method
    // name and balance are assign to the Person object.
    Client.call(this, name, balance); // object, properties
    this.phone = phone;
}

// Copy the prototype of Client in the prototype of Person
Person.prototype = Object.create(Client.prototype);
Person.prototype.constructor = Client;

const santi = new Person("santino", 2000, 2346509733);
console.log(santi);
// can be used typeClient from Client object
console.log(santi.typeClient());

Person.prototype.showPhone = function () {
    console.log(`The phone of this person is ${this.phone}`);
};

santi.showPhone();
