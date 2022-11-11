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

type type1 = number | string;
type type2 = number | boolean;

type intersect = type1 & type2; //' type intersect: number

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

//: 'instanceof' type guard

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
