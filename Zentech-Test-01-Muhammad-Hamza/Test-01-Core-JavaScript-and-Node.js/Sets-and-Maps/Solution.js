// Sets and Maps
// Write a function that takes two sets and returns their symmetric difference (elements in either set but not both).

function symmetricDiff(A, B) {
    return A.symmetricDiff(B);
}

let setA = new Set([1, 2, 3, 4, 5])
let setB = new Set([4, 5, 6, 7, 8])
console.log(symmetricDiff(setA, setB));

// Given a Map, implement a function to group its values based on a callback function. For example, given:
// map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// callback = (val) => val % 2 === 0;
// The result should be { true: ['b'], false: ['a', 'c'] }.

function groupMapValues(map, callback) {
    let result = new Map();
    for (let [key, value] of map) {
        let groupKey = callback(value) ? 'true' : 'false'
        if (!result.has(groupKey)) {
            result.set(groupKey, []);
        }
        result.get(groupKey).push(key);
    }
    return Object.fromEntries(result);
}
let map1 = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.log(groupMapValues(map1, (val) => val % 3 === 0));


// Write a function to flatten a deeply nested Map into an object with dot notation. For example, given:
// map = new Map([['a', new Map([['b', new Map([['c', 1]])]])]]);
// The result should be { 'a.b.c': 1 }.

function flattenMap(map, parentKey = '', result = {}) {
    for (const [key, value] of map) {
        const newKey = `${parentKey}.${key}`;
        if (value instanceof Map) {
            flattenMap(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    }
    return result;
}

const map2 = new Map([['a', new Map([['b', new Map([['c', 1]])]])]]);
const flattened = flattenMap(map2);
console.log(flattened);

// Implement a function that checks if a Set is a subset of another Set.

function isSubset(A, B) {
    return A.isSubsetOf(B);
}

let set1 = new Set([8, 4, 5])
let set2 = new Set([4, 5, 6, 7, 8])
console.log('Subset:', isSubset(set1, set2));

// Write a function to create a bidirectional Map (i.e., a Map where keys can be looked up by values and vice versa). Ensure it handles duplicate entries gracefully.
