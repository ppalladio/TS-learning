function add(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(add(1,2));
function printResult(num: number): void {
    //' this function doesnt have a return statement, hence void return type
    console.log('result' + num);
}


printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; //'function type  combineValues:Function

combineValues = add;

console.log(combineValues(1,1));
