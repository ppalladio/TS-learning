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
//# sourceMappingURL=app.js.map