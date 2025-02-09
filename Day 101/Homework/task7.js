class Store {
    constructor() {
        this.products = new Map();
    }

    getPrice(product) {
        return this.products.get(product);
    }

    addProduct(name, price) {
        this.products.set(name, price);
    }
}

const store = new Store();
store.addProduct("Laptop", 1000);
store.addProduct("Phone", 500);

console.log(store.getPrice("Laptop"));
console.log(store.getPrice("Phone")); 
