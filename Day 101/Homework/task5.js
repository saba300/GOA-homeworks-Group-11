class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Student ID: ${this.studentID}`);
    }
}

const student1 = new Student("Alice", 21, "S12345");
student1.displayInfo(); 
