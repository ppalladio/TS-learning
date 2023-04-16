type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
//>the combination of object type must have all the properties
const e1: ElevatedEmployee = {
    name: 'Rick',
    privileges: ['read', 'write'],
    startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

//> with any type, only the overlapping properties will be build;

type Universal = Combinable & Numeric;

//:type guard

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;
const printEmployeeInfo = (emp: UnknownEmployee) => {
    console.log('name: ' + emp.name);
    //@type guard with xxx in
	if ('privileges' in emp) {
        console.log('privileges: ' + emp.privileges);
    }
};

class Car{
	drive(){
		console.log('driving...');
	}
}

class Truck{
	drive(){
        console.log('driving a truck...');
    }

	loadCargo(amount:number)
	{
		console.log('loading cargo...' + amount);
	}
}

type Vehicle = Car | Truck;
const v1= new Car();
const v2 = new Truck();

const useVehicle=(vehicle:Vehicle)=>{
	vehicle.drive();
	if (vehicle instanceof Truck){ //>wont world if the truck is created wtih interface
		vehicle.loadCargo(5);
	}
}