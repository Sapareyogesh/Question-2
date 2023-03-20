class Car {
    constructor(carType) {
      this.carType = carType;
    }
  }
  
  class Service {
    constructor(code, description, price) {
      this.code = code;
      this.description = description;
      this.price = price;
    }
  }
  
  class Bill {
    constructor(car, services) {
      this.car = car;
      this.services = services;
    }
  
    calculateTotal() {
      let total = 0;
      for (let service of this.services) {
        total += service.price;
      }
      return total;
    }
  
    generateBill() {
      console.log(`Car Type: ${this.car.carType}`);
      console.log("Services requested:");
      for (let service of this.services) {
        console.log(`${service.code} - ${service.description} - ${service.price}`);
      }
      let total = this.calculateTotal();
      console.log(`Total amount: ${total}`);
    }
  }
  
  // Example usage:
  
  // Create car and services
  let car = new Car("SUV");
  let services = [
    new Service("OIL", "Oil Change", 50),
    new Service("AIR", "Air Filter Replacement", 30),
    new Service("WASH", "Car Wash", 20)
  ];
  
  // Create bill and generate it
  let bill = new Bill(car, services);
  bill.generateBill();
  