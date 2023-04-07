"use strict";
const printOutput = (a, b = 1) => console.log(a + b); //@ default value can only be assigned to after type declaration
printOutput(1, 2);
const hobbies = ['sports', 'tennis', 'dream'];
const activeHobbies = ['hiking'];
const person = {
    name: 'Joe',
    age: 3,
};
const infoPerson = Object.assign(Object.assign({}, person), { hobbies: 'acting' });
activeHobbies.push(...hobbies);
console.log(...hobbies);
console.log(activeHobbies);
console.log(infoPerson);
const add = (...num) => {
    return num.reduce((cur, val) => {
        return cur + val;
    }, 0);
};
console.log(add(1, 2, 3));
