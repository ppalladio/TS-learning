interface Person {
    name: string;
    age: number;

    greet(phrase: string): void; //' only the description of method
}

let user1: Person;

user1 = {
    name: 'John',
    age: 25,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    },
};

user1.greet('whatever');
