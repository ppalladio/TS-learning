type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type PromoteEmployee = Admin &
    /* if | is used then we dont need all three properties */ Employee; //'combine two types

const e1: PromoteEmployee = {
    name: 'ana',
    privileges: ['be a boss'],
    startDate: new Date(),
};
//@ type guard
//> type guard 1
type type1 = number | string;
type type2 = number | boolean;

type intersect = type1 & type2; //' type intersect: number

//> type guard 2: checking properties
const add = (a: type1, b: type1) => {
    //'type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
};

type unknownEmployee = Employee | Admin;

function printEmployee(emp: unknownEmployee) {
    console.log('name: ' + emp.name);
    if ('privileges' in emp) {
        // 'use property as a string and in keyword to check validity
        console.log('Privilege: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate: ' + emp.startDate);
    }
}

printEmployee(e1);

//> type guard 3: instanceof

class Car {
    drive() {
        console.log('Driving');
    }
}

class Truck {
    drive() {
        console.log('driving a truck🚒');
    }

    loadCargo(amount: number) {
        console.log('loading cargo 📦' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();

const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        //'instanceof can find out if some object is based on that class. and instanceof is a js class keyword
        vehicle.loadCargo(100);
    }
}

useVehicle(v1);
useVehicle(v2);

//:discriminated unions
interface Bird {
    type: 'bird'; //' type assignment
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function race(animal: Animal) {
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

//: type casting

const para = document.querySelector('p') as HTMLInputElement; //.if we use querSelector, we get type: HTMLParagraphElement | null
const para2 = <HTMLInputElement>document.getElementById('para'); //. if we use getElementById, we get type: HTMLElement | null

para2.value = 'my value';
