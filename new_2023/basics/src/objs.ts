// const person :{}={
// 	name:string;
// 	age:number;
//	hobbies:string[]; //>string array
// }

enum Skill {
    JAVA,
    C,
    PYTHON,
    GO,
    SQL,
    OTHER,
}
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //tuple length cant be changed, but push can add element. type cant be changed.
    skill: Skill; //>customized type
} = {
    name: 'John',
    age: 20,
    hobbies: ['coding', 'programming'],
    role: [1, 'prof'],
    skill: 0, //here it can be skill:0 or skill: Skill.JAVA, both mean the same thing
};

// person.role=[] //@not allowed

console.log(person.name);

if (person.skill === 0) { // it can be the position in the enum or the string JAVA
    console.log('know java');
}
