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

//:property decrator

function Log(target: any, propertyName: string) {
    //' the name of parameters are arbitrary
    console.log('property decrator');
    console.log(target); //'prototype of the object
    console.log(propertyName); //' name of the property
}
class Product {
    @Log
    title: string;
    @log2
    set price(value: number) {
        if (value > 0) {
            this._price = value;
        }
    }
    constructor(a: string, private _price: number) {
        this.title = a;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}

//:accessor and parameters decorators
function log2(target: any, name: string, descriptor: PropertyDescriptor) {
    //'PropertyDescriptor is a built-in interface
    console.log('accessor decorator');
    console.log(target); //' prototype
    console.log(name); //'name of the setter
    console.log(descriptor); //'description of the setter
}
