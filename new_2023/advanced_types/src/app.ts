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

class Car {
    drive() {
        console.log('driving...');
    }
}

class Truck {
    drive() {
        console.log('driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        //>wont world if the truck is created wtih interface
        vehicle.loadCargo(5);
    }
};

//discriminated UNion

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'; //@literal type
    groundSpeed: number;
}

type Animal = Bird | Horse;

const movingAnimal = (animal: Animal) => {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.groundSpeed;
    }
    console.log('moving at speed ' + speed);
};

movingAnimal({ type: 'bird', flyingSpeed: 3 });

//@ type casting

const h1 = <HTMLHeadingElement>document.querySelector('h1'); //h1: HTMLHeadingElement | null //:V1

const msg = document.getElementById('msg-output') as HTMLElement; //msg: HTMLElement | null //:v2

//@index properties

interface ErrorContainer {
    [key: string]: string;
}

const Err: ErrorContainer = {
    email: 'must be a valid email',
    username: 'must start with a letter',
};

//@function overload
function addOverload(a: number, b: number): number;
function addOverload(a: string, b: string): string;

function addOverload(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = addOverload('a', 'b');

//@optional chaining

const fetchUserData ={
	id:'u1',
	name:'Rick',
    email:'envkt@example.com',
    job:{title:'Developer',description:'some developer'},
}

console.log(fetchUserData?.job?.title);

//@nullish coalescing
//'nullish coalescing operator only checks for nullish values.
const userInput = '';

const storedData = userInput || 'Default value';
console.log(storedData);//>return default value

const userInput2 = '';

const storedData2 = userInput2 ?? 'Default value';

console.log(storedData2);//>return ''