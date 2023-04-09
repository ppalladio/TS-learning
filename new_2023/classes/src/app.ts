class Department {

    private employees: string[] = [];

    constructor(private id: string,public name: string) {

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

const IT =new Department("d1","it")
// IT.employees[2] = "ana" //@cant be access because its private