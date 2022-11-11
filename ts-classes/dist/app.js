"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('John', 30);
user1.greet('whatever');
//# sourceMappingURL=app.js.map