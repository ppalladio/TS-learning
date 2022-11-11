// type addFn=(a:number, b:number)=>number //' define a function with type

interface addFn {
    (a: number, b: number): number;
} //' define a function with interface

let add: addFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    name?: string; //' with name being optional we can make the name in class optional too
    outputName?: string; //' it would be optional and wont be enforced on classes that use this interface
    sayMyName?(): void; //' same thing with methods
}

interface Greeting extends Named {
    // readonly name: string;//' readonly property
    age: number;
    greet(phrase: string): void; //' only the description of method
}

class Person implements Greeting {
    constructor(public name: /*?*/ string, public age: number) {} //' a required parameter cant be followed by optional parameter
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
