"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'ana' }, { age: 10 });
const mergeObj2 = merge({ name: 'ana', hobbies: ['eat', 'pray', 'sleep'] }, { age: 10 });
console.log(mergeObj.name);
mergeObj2.hobbies.forEach((el) => {
    console.log(el);
});
console.log(mergeObj2.hobbies[0]);
function countNPrint(el) {
    let description = 'has no element';
    if (el.length > 0) {
        description = 'got' + el.length + ' element(s)';
    }
    return [el, description];
}
const count1 = countNPrint('text');
const count2 = countNPrint(['test1', 'test2']);
const count3 = countNPrint([]);
console.log(count1);
console.log(count2);
console.log(count3);
function fn1(obj, key) {
    return obj[key];
}
const Person = {
    name: 'John',
    age: 30,
    address: '123 Main St',
    occupation: 'manager',
    dicovoced: true,
};
const result = fn1(Person, 'dicovoced');
console.log(result);
//# sourceMappingURL=app.js.map