"use strict";
const add = (input1, input2, resultConversion) => {
    let result;
    if ((input1 === 'number' && input2 === 'number') ||
        resultConversion === 'as-num') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log(add(1, 2, 'as-num'));
console.log(add('1', '2', 'as-num'));
console.log(add('number', 'string', 'as-str'));
