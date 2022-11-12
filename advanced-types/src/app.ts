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
    constructor(public amount: number) {}
    drive() {
        console.log('driving a truck🚒');
    }

    loadCargo(_amount: number) {
        console.log(`loading cargo 📦 + ${this.amount}`); //@ take away, if we initialize the parameter in te constructor we can use it with this keyword and template literalsin other places, but we have to provide the initial value when create the class.
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();

const v2 = new Truck(10);

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

const para = document.querySelector('p') as HTMLParagraphElement; //'if we use querSelector, we get type: HTMLParagraphElement | null
//@ syntex two has property over syntex one with as keyword
const para2 = <HTMLParagraphElement>document.getElementById('para'); //' if we use getElementById, we get type: HTMLElement | null
para.textContent = 'my value1';
para2.textContent = 'my value2';

//:  index property [prop:string]:string

interface ErrorHandling {
    [prop: string]: string; //' with this, we are restricting the type of the property, without giving it a concrete name, hence we can create as many as we want. Then state the type of the value.
    //! the property type cant be boolean, and CAN NOT mix with other types.
}

const error: ErrorHandling = {
    email: 'must be a valid email address',
    username: 'must be a valid username',
};
