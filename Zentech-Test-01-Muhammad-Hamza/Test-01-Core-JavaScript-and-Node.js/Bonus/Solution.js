// Array + Objects + Sets:
// Write a function that:
// Takes an array of objects and a Set of keys.
// Returns a new array where each object contains only the properties whose keys are in the Set.

function filterObjects(arr, set) {
    for (let obj of arr) {
        for (let key in obj) {
            if (!set.has(key)) {
                delete obj[key];
            }
        }
    }
    return arr;
}

let arrayOfObjects = [{ name: 'hamza', age: 24, gender: 'male' }, { name: 'taha', age: 25, gender: 'male' }, { name: 'john', age: 30, gender: 'male' }]
let setOfKeys = new Set(['name', 'age'])

console.log(filterObjects(arrayOfObjects, setOfKeys))


// Maps + Objects:
// Implement a function that converts an array of Maps into a deeply nested object. For example:

// array = [new Map([['a', 'value1']]), new Map([['b', new Map([['c', 'value2']])]])];
// The result should be:

// { a: 'value1', b: { c: 'value2' } }

function covertMapIntoObjects(arr) {
    let result = {}
    for (let map of arr) {
        for (let [key, value] of map) {
            if (value instanceof Map) {
                result[key] = covertMapIntoObjects([value]);
            }
            else {
                result[key] = value
            }
        }
        return result;
    }
}

let array = [new Map([['a', 'value1']]), new Map([['b', 'value2']])];
console.log(covertMapIntoObjects(array))

