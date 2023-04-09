class Department {
    name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }
    describe(this: Department) {
        console.log('Department' + this.name);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}

const IT =new Department("it")
// IT.employees[2] = "ana" //@cant be access because its private