// function Logger(target: Function) {
//     //' the number of parameters depends on where we use the decorator
//     console.log('logging');
//     console.log(target);
// }
function Logger(el:string) {
        return function(target: Function) {

            console.log(target);
            console.log(el);
        }
    }

/////@ Logger //'to use decorator, use @decorator before the where we want to use it
@Logger('el message🌈')//' with decorator factories, we need to call the function and we can add parameters
class Person {
    name = 'ana';

    constructor() {
        console.log('creating new Person');
    }
}

const person = new Person();

console.log(person);

//: decorator factories

