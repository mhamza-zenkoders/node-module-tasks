//Sets
let emtpySet = new Set();
let mySet = new Set([1, 2, 3, 4]);
console.log(emtpySet);
console.log(mySet);

//Adding Values
mySet.add(7);
mySet.add(9);
console.log("Set After Adding:", mySet);

//Size
console.log("Set Size:", mySet.size);

//Checking Existence Of Values
console.log("Set has 2:", mySet.has(2));
console.log("Set has 5:", mySet.has(5));

// Using for...of
console.log("All Values of Set:")
for (let value of mySet) {
    console.log(value);
  }

// Using forEach
console.log("Values Multiplied by 2")
mySet.forEach(value => console.log(value*2));


// Convert to Array
let myArray = [...mySet];
console.log(myArray);


// Union of sets
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);
let unionSet = new Set([...setA, ...setB]);
console.log(unionSet); 

// Intersection of sets
let intersectionSet = new Set([...setA].filter(x => setB.has(x)));
console.log(intersectionSet);

// Difference of sets
let differenceSet = new Set([...setA].filter(x => !setB.has(x)));
console.log(differenceSet)

// Subset check
let setC = new Set([1, 2]);
let isSubset = [...setC].every(value => setA.has(value));
console.log(isSubset); 

//Delete Value
mySet.delete(4);
console.log("Set After Deleting 4", mySet)

//Clear Set
mySet.clear();
console.log("Clear Set:",mySet);

