function Logger(target: Function) {
    //' the number of parameters depends on where we use the decorator
    console.log('logging');
    console.log(target);
}

@Logger //'to use decorator, use @decorator before the where we want to use it
class Person {
    name = 'ana';

    constructor() {
        console.log('creating new Person');
    }
}

const person = new Person();

console.log(person);
