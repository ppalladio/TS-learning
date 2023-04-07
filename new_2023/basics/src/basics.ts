function add1(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}
const num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = 'result is ';
const result = add1(num1, num2, printResult, resultPhrase);

console.log(result);
