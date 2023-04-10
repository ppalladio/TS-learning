"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}
// IT.employees[2] = "ana" //@cant be access because its private
//IT.name ="accounting" Cannot assign to 'name' because it is a read-only property
class Accounting extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        return 'no report yet';
    }
    set mostRecentReport(report) {
        this.addReport(report);
    }
    constructor(id, reports) {
        super(id, 'accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log(Accounting);
    }
    // static
    static createEmployee(id, name) {
        return `new employee with id ${id} and name ${name}`;
    }
    addEmployee(employee) {
        super.addEmployee(employee); //The code super.addEmployee(employee) in TypeScript is calling the addEmployee method of the parent class of the current class.
    }
    addReport(text) {
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
    constructor(id) {
        this.id = id;
        console.log(`output from ${this.id}`);
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton('a');
        }
        return Singleton.instance;
    }
    doSomething() {
        console.log('Doing something...');
    }
}
const newSingleton = Singleton.getInstance();
const newSingleton2 = Singleton.getInstance();
console.log(newSingleton, newSingleton2);
newSingleton.doSomething();
/****************************
 * ***/ /@ interface                         */;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase);
    }
}
let user1;
user1 = new Person('user1'); // let user1 = new Person('user1'); also viable
user1 = {
    name: 'user1',
    age: 20,
    greet(phrase) {
        console.log(phrase);
    },
};
console.log(user1);
