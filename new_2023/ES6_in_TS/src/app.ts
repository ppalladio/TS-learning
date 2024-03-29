const printOutput: (a: number, b: number) => void = (a, b = 1) =>
    console.log(a + b); //@ default value can only be assigned to after type declaration

printOutput(1, 2);

const hobbies = ['sports', 'tennis', 'dream'];
const activeHobbies = ['hiking'];
const person = {
    name: 'Joe',
    age: 3,
};

//@spread operator
const infoPerson = { ...person, hobbies: 'acting' };
activeHobbies.push(...hobbies);
console.log(...hobbies);
console.log(activeHobbies);
console.log(infoPerson);

//@rest operator
const add = (...num: number[]): number => {
    return num.reduce((cur, val) => {
        return cur + val;
    }, 0);
};

console.log(add(1, 2, 3));
