class Department {
    private employees: string[] = [];

    constructor(private id: string, public readonly name: string) {}
    describe(this: Department) {
        console.log(this.id + ' Department ' + this.name);
    }
    addEmployee(employee: string) {
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
    private lastReport: string;

	get mostRecentReport() {
		if(this.lastReport)
		{
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

    addEmployee(employee: string) {
        super.addEmployee(employee);//The code super.addEmployee(employee) in TypeScript is calling the addEmployee method of the parent class of the current class. 
    }
	addReport(text: string) {
		this.reports.push(text);
		this.lastReport=text;
	}
}

const accounting = new Accounting('d2',[])

//getter
console.log(accounting.mostRecentReport);
accounting.addReport('report1');
console.log(accounting.mostRecentReport);

//setter
accounting.mostRecentReport	= 'report2';
console.log(accounting.mostRecentReport);
