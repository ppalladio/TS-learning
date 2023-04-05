// const person :{}={
// 	name:string;
// 	age:number;
//	hobbies:string[]; //>string array
// }

const person :{
	name:string;
	age:number;
	hobbies:string[];
	role:[number, string]; //tuple length cant be changed, but push can add. type cant be changed.
} = {
    name: 'John',
    age: 20,
	hobbies: ['coding', 'programming'],
	role:[1,'prof']
};

// person.role=[] //@not allowed

console.log(person.name);