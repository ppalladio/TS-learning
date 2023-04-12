abstract class Department {
    private employees: string[] = [];

    constructor(private id: string, public readonly name: string) {}

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}

// IT.employees[2] = "ana" //@cant be access because its private
//IT.name ="accounting" Cannot assign to 'name' because it is a read-only property

class Accounting extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        return 'no report yet';
    }

    set mostRecentReport(report: string) {
        this.addReport(report);
    }

    constructor(id: string, public reports: string[]) {
        super(id, 'accounting');
        this.lastReport = reports[0];
    }
    describe(): void {
        console.log(Accounting);
    }
    // static

    static createEmployee(id: string, name: string) {
        return `new employee with id ${id} and name ${name}`;
    }
    addEmployee(employee: string) {
        super.addEmployee(employee); //The code super.addEmployee(employee) in TypeScript is calling the addEmployee method of the parent class of the current class.
    }
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
}

const accounting = new Accounting('d2', []);

//getter
console.log(accounting.mostRecentReport);
accounting.addReport('report1');
console.log(accounting.mostRecentReport);

//setter
accounting.mostRecentReport = 'report2';
console.log(accounting.mostRecentReport);

// static

const newEmployee = Accounting.createEmployee('d3', 'max');
console.log(newEmployee);

class Singleton {
    private static instance: Singleton;
    private constructor(public id: string) {
        console.log(`output from ${this.id}`);
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton('a');
        }
        return Singleton.instance;
    }

    public doSomething(): void {
        console.log('Doing something...');
    }
}

const newSingleton = Singleton.getInstance();
const newSingleton2 = Singleton.getInstance();

console.log(newSingleton, newSingleton2);
newSingleton.doSomething();

/****************************
 * ***/ /@ interface                         */;
interface Named {
    name: string;
}
interface Age {
    age: number;
}
interface Greetable extends Named, Age {
    //

    greet(phrase: string): void;
}

class Person implements Greetable {
    constructor(public name: string, public age: number) {}
    greet(phrase: string): void {
        console.log(phrase);
    }
}

let user1: Person;

user1 = new Person('user1', 20); // let user1 = new Person('user1'); also viable

user1 = {
    name: 'user1',
    age: 20,

    greet(phrase: string): void {
        console.log(phrase);
    },
};

//@use interface to define function

interface fn {
    addFn(a: number, b: number): void;
}
type addFnn = (a: number, b: number) => void; //user type to define function

//: optional parameter and method
interface Optional{
	name: string;
	age?: number;

	printInterface?():void;
}

console.log(user1);
