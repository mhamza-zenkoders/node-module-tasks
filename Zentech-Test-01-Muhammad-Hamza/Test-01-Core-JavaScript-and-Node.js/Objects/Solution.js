// Objects
// Write a function to merge two deeply nested objects, where properties from the second object overwrite those in the first if there are conflicts. Ensure arrays are concatenated and not overwritten.

function mergeNestedObjects(obj1, obj2) {
    for (let key of Object.keys(obj2)) {
        if (!obj1[key]) {
            obj1[key] = obj2[key];
        }
        else if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
            mergeNestedObjects(obj1[key], obj2[key]);
        }
        else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
            obj1[key] = obj1[key].concat(obj2[key]);
        }
        else {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}


let obj1 = { a: 1, b: { c: [1, 2], d: 3 } };
let obj2 = { a: 1, b: { c: [3, 4, 5], d: 4, e: 5 } };

console.log(mergeNestedObjects(obj1, obj2));








// Implement a function that finds all properties in an object whose values are functions and returns their names as an array.

function getFunctionPropertyNames(obj) {
    return Object.keys(obj).filter(x => typeof obj[x] === 'function');
}

console.log(getFunctionPropertyNames({
    name: 'hamza',
    funcA: function () { console.log('a') },
    funcB: function () { console.log('b') }
}))






// Write a function that removes all properties from an object whose values are falsy (null, undefined, false, 0, NaN, or an empty string).

function removeFalsyProperties(obj) {
    for (let key in obj) {
        if (!obj[key]) {
            delete obj[key];
        }
    }
    return obj;
}

console.log(removeFalsyProperties({ name: 'hamza', age: 0, occupation: null, salary: 0, isMarried: false }))







// Create a function that calculates the deep difference between two objects. For example, given:
// obj1 = { a: 1, b: { c: 2, d: 3 } };
// obj2 = { a: 1, b: { c: 2, d: 4, e: 5 } };
// The result should be { b: { d: [3, 4], e: [undefined, 5] } }.

function deepDiff(obj1, obj2, result={}) {
    let uniqueKeys = new Set([...Object.keys(obj1),...Object.keys(obj2)]);
    uniqueKeys.forEach((key) => {
        let val1 = obj1[key];
        let val2 = obj2[key];

        if(typeof(val1) == 'object' && !Array.isArray(val1) && typeof(val2) == 'object' && !Array.isArray(val2)){
            result[key] = {};
            deepDiff(val1, val2, result[key]);
            if(Object.keys(result[key]).length == 0){
                delete result[key];
            }
        }
        else if(val1 !== val2){
            result[key] = [val1, val2]
        }
    })
    return result;
}

obj3 = { a: 1, b: { c: 2, d: 3 } };
obj4 = { a: 1, b: { c: 2, d: 4, e: 5 } };
console.log(deepDiff(obj3, obj4));







// Write a function that converts a flat object to a nested one based on its keys. For example,
// { 'a.b.c': 1, 'a.b.d': 2, 'e': 3 }
// should be converted to:
// { a: { b: { c: 1, d: 2 } }, e: 3 }


