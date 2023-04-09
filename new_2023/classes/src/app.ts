class Department {

    private employees: string[] = [];

    constructor(private id: string,public readonly name: string) {

    }
    describe(this: Department) {
        console.log(this.id+ ' Department ' + this.name);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}

const IT =new Department("d1","it")
IT.describe()
// IT.employees[2] = "ana" //@cant be access because its private
//IT.name ="accounting" Cannot assign to 'name' because it is a read-only property