class Zoo {
    constructor() {
        this.animals = new Map();
    }

    addAnimal(name, count) {
        this.animals.set(name, count);
    }

    listAnimals() {
        let animalList = [];
        for (let [name, count] of this.animals) {
            animalList.push(`${name}: ${count}`);
        }
        return animalList;
    }
}

const zoo = new Zoo();
zoo.addAnimal("Lion", 3);
zoo.addAnimal("Elephant", 5);
zoo.addAnimal("Tiger", 2);

console.log(zoo.listAnimals()); 
