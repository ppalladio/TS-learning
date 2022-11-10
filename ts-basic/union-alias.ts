type NumStr = number | string
type Result ='number' | 'string'

function add(
    input1: NumStr,
    input2: NumStr,
    resultType: Result, //'we allow only these two strings for result conversion,any other string will not be allowed
) {
    let result;
    if (
        (typeof input1 === 'number' && typeof input2 === 'number') ||
        resultType === 'number'
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const age = add(30, 26, 'number');
console.log(age);

const stringAge = add('30', '20', 'number');
console.log(stringAge);

const names = add('ad', 'bc', 'string');
console.log(names);
