"use strict";
//>the combination of object type must have all the properties
const e1 = {
    name: 'Rick',
    privileges: ['read', 'write'],
    startDate: new Date(),
};
//:type guard
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const printEmployeeInfo = (emp) => {
    console.log('name: ' + emp.name);
    //@type guard with xxx in
    if ('privileges' in emp) {
        console.log('privileges: ' + emp.privileges);
    }
};
