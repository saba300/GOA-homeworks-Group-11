class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log("Width must be a positive number.");
        }
    }

    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log("Height must be a positive number.");
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area);  // Output: 50

rectangle.width = 7;
rectangle.height = 12;
console.log(rectangle.area);  // Output: 84
