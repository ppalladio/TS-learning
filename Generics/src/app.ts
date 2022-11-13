//: generic function
function merge<T extends object, U extends object>(objA: T, objB: U) {
    //' here it can extends any object with any structure, but it has to be an object,  extends can be followed by string, custom type, union type
    return Object.assign(objA!, objB);
}

//' with T extends Object returns (objA: T, objB: U): T & U
//' with Object.assign(objA!, objB) returns (objA: T, objB: U): T & {} & U

const mergeObj = merge({ name: 'ana' }, { age: 10 });
const mergeObj2 = merge(
    { name: 'ana', hobbies: ['eat', 'pray', 'sleep'] },
    { age: 10 },
);

console.log(mergeObj.name); //. ana

mergeObj2.hobbies.forEach((el) => {
    console.log(el);
});
/**
 * eat
 * pray
 * sleep
 */

console.log(mergeObj2.hobbies[0]); //. eat
