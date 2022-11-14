// function Logger(target: Function) {
//     //' the number of parameters depends on where we use the decorator
//     console.log('logging');
//     console.log(target);
// }
function Logger(el: string) {
    return function (target: Function) {
        console.log(target);
        console.log(el);
    };
}

function Html(el: string, tag: string) {
    return function (constructor: any) {
        const tagName = document.getElementById(tag);
        const person = new constructor(); //' convert constructor type to any to access the properties inside
        if (tagName) {
            tagName.innerHTML = el;
            tagName.querySelector('h1')!.textContent = person.name; //'use ! to assume that h1 alaways exists
        }
    };
}
/////@ Logger //'to use decorator, use @decorator before the where we want to use it
///// @Logger('el message🌈') //' with decorator factories, we need to call the function and we can add parameters
@Html('<h1>rendered content</h1>', 'app')
class Person {
    name = 'ana';

    constructor() {
        console.log('creating new Person');
    }
}

const person = new Person();

console.log(person);

//: decorator factories
