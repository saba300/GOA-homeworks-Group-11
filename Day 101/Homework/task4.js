class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value > 0) {
            this._price = value;
        } else {
            console.log("Price must be positive.");
        }
    }
}

const product = new Product("Laptop", 1000);
console.log(product.price); 

product.price = 1200;
console.log(product.price);  

product.price = -500; 
