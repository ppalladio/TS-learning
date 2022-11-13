const name1: string[] = ['ana'];
const name2 = []; //' any[]
// const names:Array=[]//'Generic type 'Array<T>' requires 1 type argument(s)
const name3: Array<string> = []; //' === name3:string[]

const promise: Promise<string> = new Promise((res, _rej) => {
    setTimeout(() => {
        res('timeout');
    }, 2000);
});



