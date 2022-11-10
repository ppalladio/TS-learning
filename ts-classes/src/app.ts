abstract class Department {
    static fiscalYear: number = 2022; //' static is that they are to detach from instance, if we want to use static inside of block, we have to access use classname.property
    // name: string;
    private employees: string[] = [];
    protected managers: string[] = []; //' private makes the property only available in the current scope and cant be interited, but protected make sure it can be inherited.

    constructor(protected readonly id: string, public name: string) {
        // this.name = n; //. shorthand initialization, so we dont have to initialize it again
        //. readonly must be stated in the initialization phase
    }
    /**
     *  ' first[this] should be class type
     *  ' second [this] will refer to the thing it is calling,⬇️
     */
    abstract describe(this: Department): void; //' when we cant provide a default implementation in the base class, only the structure of the method, but every inherited class !must! include and specify this method
    // {
    //     console.log(`department${this.id}: ${this.name}`);
    // }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static addEmployee(name: string) {
        return { name: name };
    }
}

// const dev = new Department('di', 'Dev');//# cant create instance of abstract class

// console.log(dev);

// dev.describe();

// const devCopy = { name: 's', describe: dev.describe }; //'by adding name property it will return 'department s'

// devCopy.describe(); //' with employees[] added its not working
/**
 * 'if we didnt add this:Department in the method definition, we could execute
 * $const devCopy = { describe: dev.describe };
 * $devCopy.describe()
 * #but it will return undefined, because this keyword refers to devCopy,which has no name property
 */

// dev.addEmployee('ana');
// dev.addEmployee('bob');
// // dev.describe()
// dev.printEmployee();

//>static call
const employee1 = Department.addEmployee('ana');
console.log(employee1, Department.fiscalYear);

//: 1st inheritance

class IT extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }
    describe() {
        console.log(`IT department:➡️ ${this.id}`); //> has to change id from private to protected in order to access it
    }
}
const it = new IT('🔖d1', ['ana']);

it.addEmployee('bob');
it.addEmployee('alice');

it.describe();
it.name = '🤩🤩random Name';
it.printEmployee();

console.log(it);

//'second interited class
class Frontend extends Department {
    private recentManager: string;
    private static instance: Frontend;
    get mostRecentManager() {
        //! mostRecentManager is readonly
        if (this.recentManager) {
            return this.recentManager;
        }
        throw new Error('no recent manager found');
    }
    set mostRecentManager(value: string) {
        if (!value) {
            throw new Error('no recent manager found');
        }
        this.addAdmins(value);
    }
    private constructor(id: string, private admins: string[]) {
        super(id, 'Frontend');
        this.recentManager = admins[0]; //'have to initialize recentManager for getter
    }
//> check if the instance is existed, if not, we will initiate a new instance with 
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Frontend('d2', []);
        return this.instance;
    }
    //' use protected
    addManager(manager: string) {
        this.managers.push(manager);
    }

    describe() {
        console.log(`frontend department 😶‍🌫️ ${this.id}`);
    } //! we must add describe in every extended class

    addAdmins(text: string) {
        this.admins.push(text);
        this.recentManager = text;
    }
    printManager() {
        console.log(this.managers);
    }
}

// const frontend = new Frontend('🔔d2', []); //' instead, we call
const frontend = Frontend.getInstance()
console.log(frontend);

frontend.addAdmins('equal to addReport');
console.log(frontend.mostRecentManager); //. get, if we put this before .addAdmins, we will receive error,it will check for the if there is a manager already.
frontend.addManager('elise');
frontend.addManager('🪄bob');
frontend.describe();

frontend.mostRecentManager = 'bob'; //. trying to set, if we put an empty string we will receive error, becausr of the if check for !value
frontend.printManager();
console.log(frontend);
