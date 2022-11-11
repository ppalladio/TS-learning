"use strict";
const e1 = {
    name: 'ana',
    privileges: ['be a boss'],
    startDate: new Date(),
};
const add = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
};
function printEmployee(emp) {
    console.log('name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privilege: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate: ' + emp.startDate);
    }
}
printEmployee(e1);
//# sourceMappingURL=app.js.map