
// Create Empty Set
let emtpySet = new Set();
console.log("Empty Set:", emtpySet);

// Create Set
let mySet = new Set([1, 2, 3, 4]);
console.log("Original Set:", mySet);

// Adding Values
mySet.add(7);
mySet.add(9);
console.log("Set After Adding:", mySet);

// Size
console.log("Set Size:", mySet.size);

// Checking Existence Of Values
console.log("Set has 2:", mySet.has(2));
console.log("Set has 5:", mySet.has(5));

// Using for to print Set
console.log("All Values of Set:")
for (let value of mySet) {
    console.log(value);
}

// Using forEach
mySet.forEach(value => value*2);
console.log("Set Values Multiplied by 2:", mySet);

// Convert to Array
let myArray = [...mySet];
console.log("Sets Converted into Array:", myArray);

// Union of sets
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);
let unionSet = new Set([...setA, ...setB]);
console.log("Union of Set A & B:", unionSet); 

// Intersection of sets
let intersectionSet = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection of Set A & B:", intersectionSet); 

// Difference of sets
let differenceSet = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference of Set A & B:", differenceSet); 

// Subset check
let setC = new Set([1, 2]);
let isSubset = [...setC].every(value => setA.has(value));
console.log("Set C is a Subset of A:", isSubset); 

// Delete Value
mySet.delete(4);
console.log("Set After Deleting 4:", mySet)

// Clear Set
mySet.clear();
console.log("Clear Set:", mySet);

