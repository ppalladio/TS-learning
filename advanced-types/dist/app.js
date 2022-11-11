"use strict";
const e1 = {
    name: 'ana',
    privileges: ['be a boss'],
    startDate: new Date(),
};
const add = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
};
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
    drive() {
        console.log('driving a truck🚒');
    }
    loadCargo(amount) {
        console.log('loading cargo 📦' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
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
para2.value = 'my value';
//# sourceMappingURL=app.js.map