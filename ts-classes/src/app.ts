interface Named {
    name: string;
}

interface Greeting extends Named {
    // readonly name: string;//' readonly property
    age: number;
    greet(phrase: string): void; //' only the description of method
}

class Person implements Greeting {
    constructor(public name: string, public age: number) {}
    //'while doing shorthand initialization, it is a must to state public and private
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greeting;

user1 = new Person('John', 30);
// user1 = {
//     name: 'John',
//     age: 25,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     },
// };

user1.greet('whatever');
