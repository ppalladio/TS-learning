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
