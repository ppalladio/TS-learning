"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(el) {
    return function (target) {
        console.log(target);
        console.log(el);
    };
}
let Person = class Person {
    constructor() {
        this.name = 'ana';
        console.log('creating new Person');
    }
};
Person = __decorate([
    Html('<h1>rendered content</h1>', 'app')
], Person);
const person = new Person();
console.log(person);
function Html(el, tag) {
    return function (constructor) {
        const tagName = document.getElementById(tag);
        const person = new constructor();
        if (tagName) {
            tagName.innerHTML = el;
            tagName.querySelector('h1').textContent = person.name;
        }
    };
}
function Log(target, propertyName) {
    console.log('property decrator');
    console.log(target);
    console.log(propertyName);
}
class Product {
    constructor(a, _price) {
        this._price = _price;
        this.title = a;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    log2
], Product.prototype, "price", null);
function log2(target, name, descriptor) {
    console.log('accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
//# sourceMappingURL=app.js.map