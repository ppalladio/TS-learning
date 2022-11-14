//: generic function
function merge<T extends object, U extends object>(objA: T, objB: U) {
    //' here it can extends any object with any structure, but it has to be an object,  extends can be followed by string, custom type, union type
    return Object.assign(objA!, objB);
}

//' with T extends Object returns (objA: T, objB: U): T & U
//' with Object.assign(objA!, objB) returns (objA: T, objB: U): T & {} & U

const mergeObj = merge({ name: 'ana' }, { age: 10 });
const mergeObj2 = merge(
    { name: 'ana', hobbies: ['eat', 'pray', 'sleep'] },
    { age: 10 },
);

console.log(mergeObj.name); //. ana

mergeObj2.hobbies.forEach((el) => {
    console.log(el);
});
/**
 * eat
 * pray
 * sleep
 */

console.log(mergeObj2.hobbies[0]); //. eat

//: another generic function

interface Lengthy {
    length: number;
}
//. we only care that it has a length property because we rely on the length property in the function
function countNPrint<T extends Lengthy>(el: T): [T, string] {
    //' to specify that it will return a tuple
    let description = 'has no element';
    if (el.length > 0) {
        description = 'got' + el.length + ' element(s)';
    }
    return [el, description];
}

const count1 = countNPrint('text');
const count2 = countNPrint(['test1', 'test2']);
const count3 = countNPrint([]);
console.log(count1);
console.log(count2);
console.log(count3);

//: keyof contraint

function fn1<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

const Person = {
    name: 'John',
    age: 30,
    address: '123 Main St',
    occupation: 'manager',
    dicovoced: true,
};

const result = fn1(Person, 'dicovoced');

console.log(result);

//: Generic Classes

class DataStorage<T> {
    private data:T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItem() {
        return [...this.data];
    }
}

const fn2 = new DataStorage<string>();

fn2.addItem('a');
fn2.addItem('b');
fn2.removeItem('b');
console.log(fn2.getItem());

//: some other built-in types

//> Partial

interface Person {
    name: string;
    occupation: string;
    birthday: Date;
}
let ana: Partial<Person> = {}; //' to have one of your interfaces to be optional, but ONLY temporarily

function fn3(title: string, occupation: string, date: Date): Person {
    ana.name = title;
    ana.occupation = occupation;
    ana.birthday = date;
    return ana as Person; //' we can use type casting at this point because we know that stage all the properties will be filled not a partial one
}

//> Readonly

const names:Readonly<string[]> = ['ana','bob']
// names.push('cece')//'this wont work