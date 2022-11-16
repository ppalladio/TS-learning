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
@Html1('<h1>rendered content</h1>', 'app')
class Person {
    name = 'ana';

    constructor() {
        console.log('creating new Person');
    }
}

const person = new Person();

console.log(person);

//: decorator factories
function Html1(el: string, tag: string) {
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
    @log3
    getPriceWithTax(@log4 tax: number) {
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

function log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function log4(target: any, name: string, position: number) {
    console.log('parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position); //: =0 the position of the parameter
}

//: returing a class in class decorator

function Html2(el: string, tag: string) {
    //' now html2 will only be render if we instantiate the object but when the decorator is created
    return function <T extends { new (...args: any[]): { name: string } }>(
        /**
         * ' SET to generic type
         * 'new , a function we can call with new keyword
         * 'this new method that T is based on will get any amount of arguments, hence the rest parameter. and will return an object.But we dont know if name will exist, which is correct because html2 is added to a class with name property
         */
        oldConstructor: T,
    ) {
        return class extends oldConstructor {
            constructor(..._args: any[]) {
                super(); //'save the original class
                console.log('rendering new constructor');
                const tagName = document.getElementById(tag);
                // const person = new oldConstructor(); //' we can access name useing this
                if (tagName) {
                    tagName.innerHTML = el;
                    tagName.querySelector('h1')!.textContent = this.name; //'use ! to assume that h1 alaways exists
                }
            }
        }; //' returning a constructor function that is based on the previous constructor function
    };
}

@Html2('<h1>chaing a class in class decorator<h2>', 'html2')
class People {
    name = 'bob';

    constructor() {
        console.log('creating new Person');
    }
}

// const people = new People();
// console.log(people); //' if we comment this out, bob wont show up on the screen [INSTANTIATE]

//: other decorator return type: (accessor) and method.

function Bind(_target: any, _name: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    console.log(descriptor);
    const adjDescriptor: PropertyDescriptor = {
        get() {
            const bindFn = originalMethod.bind(this);
            return bindFn;
        },
    };
    console.log(descriptor);
    return adjDescriptor; //' overwrite the original descriptor
}
class Printer {
    msg = 'its working';
    @Bind
    showMsg() {
        console.log(this.msg);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMsg);

//:validation with decorator

class Course {
    title!: string;
    price!: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;

    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.id;
    const price = +priceEl.id;

    const createdCourse = new Course(title, price);
    console.log(createdCourse);
    console.log(titleEl);
    console.log(title);
});
