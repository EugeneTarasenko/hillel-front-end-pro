class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.owner = null;
  }

  assignOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log("The owner must be at least 18 years old.");
    }
  }

  displayInfo() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, License Plate: ${this.licensePlate}`
    );
    if (this.owner) {
      this.owner.displayInfo();
    }
  }
}

const person1 = new Human("Andriy Melnik", 26);
const person2 = new Human("Oleksandr Schevchenko", 21);
const person3 = new Human("Igor Kovalenko", 17);

const car1 = new Car("Toyota", "Corolla", 2019, "D438AS");
const car2 = new Car("Honda", "Civic", 2018, "I289SE");
const car3 = new Car("BMW", "M3", 2019, "Y923GF");

car1.assignOwner(person1);
car2.assignOwner(person2);
car3.assignOwner(person3);

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
