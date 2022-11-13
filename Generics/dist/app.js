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
//# sourceMappingURL=app.js.map