const printOutput: (a: number, b: number) => void = 
(a, b = 1) => console.log(a + b); //@ default value can only be assigned to after type declaration 

printOutput(1, 2);


const hobbies = ["sports", "tennis", "dream"];
const activeHobbies = ["hiking"]
const person={
	name: "Joe",
	age:3
}

const infoPerson = {...person,hobbies:"acting"}
activeHobbies.push(...hobbies);
console.log(...hobbies);
console.log(activeHobbies);
console.log(infoPerson);