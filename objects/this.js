const product = {
    name: "galletitas terrabusi",
    price: 20,
    available: true,
    showName() {
        // “this” is for referencing something within the same object.
        console.log(this.name);
    },
};

product.showName();
