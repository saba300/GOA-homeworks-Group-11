class Appliance {
    constructor(brand, power) {
      this.brand = brand;
      this.power = power;
    }
  
    turnOn() {
      console.log("The appliance is now on.");
    }
}
  
class WashingMachine extends Appliance {
    constructor(brand, power) {
      super(brand, power);
    }
  
    washClothes() {
      console.log("Washing clothes...");
    }
  
    turnOn() {
      super.turnOn();
      console.log("Washing machine is running.");
    }
}
  
class Microwave extends Appliance {
    constructor(brand, power) {
      super(brand, power);
    }
  
    heatFood() {
      console.log("Heating food...");
    }
  
    turnOn() {
      super.turnOn();
      console.log("Microwave is heating.");
    }
}
  
const washingMachine = new WashingMachine("LG", 1500);
washingMachine.turnOn();
washingMachine.washClothes();
  
const microwave = new Microwave("Samsung", 1000);
microwave.turnOn();
microwave.heatFood();
  