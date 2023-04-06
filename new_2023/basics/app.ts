function add(input1: number | string, input2: number | string) {
    let result;
    if (input1 === 'number' && input2 === 'number') {
        result = input1 + input2;
    } else {
       result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(add(1, 2));

console.log(add('number', 'string'));


