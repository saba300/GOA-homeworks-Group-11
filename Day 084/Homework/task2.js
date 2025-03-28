function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

let myCar = new Car("Mercedes", "Gt 63", 2021, "grey");
let yourCar = new Car("BMW", "M8", 2019, "black");

console.log(myCar);
console.log(yourCar);
