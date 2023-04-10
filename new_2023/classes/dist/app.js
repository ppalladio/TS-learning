"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(this.id + ' Department ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}
const IT = new Department('d1', 'it');
IT.describe();
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
    // static
    static createEmployee(id, name) {
        return (`new employee with id ${id} and name ${name}`);
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
