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
var person = {
    name: 'John',
    age: 20,
    hobbies: ['coding', 'programming'],
    role: [1, 'prof'],
    skill: 0,
};
// person.role=[] //@not allowed
console.log(person.name);
if (person.skill === 0) {
    console.log('know java');
}
