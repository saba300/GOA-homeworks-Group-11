class Shape {
    constructor(name, sides) {
      this.name = name;
      this.sides = sides;
    }
}
  
  class Triangle extends Shape {
    constructor(name, sides, base, height) {
      super(name, sides);
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
}
  
const triangle = new Triangle("Triangle", 3, 5, 10);
console.log(`Area of ${triangle.name}: ${triangle.calculateArea()}`);
  