"use strict";
// const person :{}={
// 	name:string;
// 	age:number;
//	hobbies:string[]; //>string array
// }
var Skill;
(function (Skill) {
    Skill[Skill["JAVA"] = 0] = "JAVA";
    Skill[Skill["C"] = 1] = "C";
    Skill[Skill["PYTHON"] = 2] = "PYTHON";
    Skill[Skill["GO"] = 3] = "GO";
    Skill[Skill["SQL"] = 4] = "SQL";
    Skill[Skill["OTHER"] = 5] = "OTHER";
})(Skill || (Skill = {}));
const person = {
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
