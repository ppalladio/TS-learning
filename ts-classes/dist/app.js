"use strict";
class Department {
    id;
    name;
    static fiscalYear = 2022;
    employees = [];
    managers = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static addEmployee(name) {
        return { name: name };
    }
}
const employee1 = Department.addEmployee('ana');
console.log(employee1, Department.fiscalYear);
class IT extends Department {
    admins;
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log(`IT department:➡️ ${this.id}`);
    }
}
const it = new IT('🔖d1', ['ana']);
it.addEmployee('bob');
it.addEmployee('alice');
it.describe();
it.name = '🤩🤩random Name';
it.printEmployee();
console.log(it);
class Frontend extends Department {
    admins;
    recentManager;
    get mostRecentManager() {
        if (this.recentManager) {
            return this.recentManager;
        }
        throw new Error('no recent manager found');
    }
    set mostRecentManager(value) {
        if (!value) {
            throw new Error('no recent manager found');
        }
        this.addAdmins(value);
    }
    constructor(id, admins) {
        super(id, 'Frontend');
        this.admins = admins;
        this.recentManager = admins[0];
    }
    addManager(manager) {
        this.managers.push(manager);
    }
    describe() {
        console.log(`frontend department 😶‍🌫️ ${this.id}`);
    }
    addAdmins(text) {
        this.admins.push(text);
        this.recentManager = text;
    }
    printManager() {
        console.log(this.managers);
    }
}
const frontend = new Frontend('🔔d2', []);
frontend.addAdmins('equal to addReport');
console.log(frontend.mostRecentManager);
frontend.addManager('elise');
frontend.addManager('🪄bob');
frontend.describe();
frontend.mostRecentManager = 'bob';
frontend.printManager();
console.log(frontend);
//# sourceMappingURL=app.js.map