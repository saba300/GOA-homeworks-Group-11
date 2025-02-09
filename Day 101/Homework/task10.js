class Inventory {
    constructor() {
        this.items = new Map();
    }

    addItem(name, quantity) {
        this.items.set(name, quantity);
    }
}

class StoreInventory extends Inventory {
    getStock(item) {
        return this.items.get(item);
    }
}

const storeInventory = new StoreInventory();
storeInventory.addItem("Apple", 100);
storeInventory.addItem("Banana", 150);

console.log(storeInventory.getStock("Apple"));  
console.log(storeInventory.getStock("Banana"));
