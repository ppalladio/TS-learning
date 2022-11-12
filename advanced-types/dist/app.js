"use strict";
const e1 = {
    name: 'ana',
    privileges: ['be a boss'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployee(emp) {
    console.log('name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privilege: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate: ' + emp.startDate);
    }
}
printEmployee(e1);
class Car {
    drive() {
        console.log('Driving');
    }
}
class Truck {
    constructor(amount) {
        this.amount = amount;
    }
    drive() {
        console.log('driving a truck🚒');
    }
    loadCargo(_amount) {
        console.log(`loading cargo 📦 + ${this.amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck(10);
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}
useVehicle(v1);
useVehicle(v2);
function race(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('moving at speed of ' + speed);
}
race({ type: 'bird', flyingSpeed: 50 });
const para = document.querySelector('p');
const para2 = document.getElementById('para');
para.textContent = 'my value1';
para2.textContent = 'my value2';
const error = {
    email: 'must be a valid email address',
    username: 'must be a valid username',
};
const result = add(3, 'max');
result.split(' ');
const fetchUserData = {
    id: 'u1',
    name: 'ana',
    job: { title: 'daydreamer', descrption: 'love sleep' },
};
const userInput = null;
const storedValue = userInput !== null && userInput !== void 0 ? userInput : 'the value is null or undefined';
console.log(storedValue);
//# sourceMappingURL=app.js.map