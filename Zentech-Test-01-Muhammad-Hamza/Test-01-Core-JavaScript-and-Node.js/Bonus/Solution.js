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
    return arr.filter(item => Object.keys(item).length > 0);
}

let arrayOfObjects = [{ name: 'hamza', age: 24, gender: 'male' }, { name: 'taha', age: 25, gender: 'male' }, { name: 'john', age: 30, gender: 'male' }]
let setOfKeys = new Set(['name', 'age']);

console.log(filterObjects(arrayOfObjects, setOfKeys));






// Maps + Objects:
// Implement a function that converts an array of Maps into a deeply nested object. For example:
// array = [new Map([['a', 'value1']]), new Map([['b', new Map([['c', 'value2']])]])];
// The result should be:
// { a: 'value1', b: { c: 'value2' } }

function covertMapIntoObjects(arrayOfMaps, result = {}) {
    for (let map of arrayOfMaps) {
        for (let [key, value] of map) {
            if (value instanceof Map) {
                result[key] = {}
                covertMapIntoObjects([value], result[key]);
            }
            else {
                result[key] = value
            }
        }
    }
    return result;
}

let array = [new Map([['a', 'value1']]), new Map([['b', new Map([['c', 'value2']])]])];
console.log(covertMapIntoObjects(array))






// Debouncing with State:
// Write a debouncing function that not only delays execution but also collects all arguments passed during the delay period and passes them as an array when the function is executed.




// Data Transformation:
// Create a function that transforms a nested object with mixed keys (camelCase, snake_case, and kebab-case) into one with all camelCase keys. Ensure the transformation is recursive.

function toCamelCase(keyName) {
    return keyName.replace(/([-_][a-z])/g, (key) => key.toUpperCase().replace('-', '').replace('_', ''));
}

function convertKeysToCamelCase(obj) {
    if (obj instanceof Object && obj !== null) {
        const result = {};
        Object.keys(obj).forEach((key) => {
            const newKey = toCamelCase(key);
            result[newKey] = convertKeysToCamelCase(obj[key])
        });
        return result;
    }
    return obj;

}

let obj7 = {
    'first-name': 'Hamza',
    'last_name': 'Younus',
    'home-address': {
        'house-number': 123,
        'street_number': 11
    }
}

console.log(convertKeysToCamelCase((obj7)));







// Data Aggregation:
// Given an array of objects, write a function that:
// Groups the objects by a specific key.
// Computes an aggregate property (e.g., sum, average) for each group.
// (For example, group employees by department and calculate the average salary for each department.)



