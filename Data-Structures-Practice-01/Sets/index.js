// Question: Create a Set named numbers containing the values 1, 2, 3, 4, 5. Answer:

let numbers  = new Set([1, 2, 3, 4, 5]);
console.log('Set:',numbers);

// Question: Add the value 6 to the numbers set. Answer:

numbers.add(6);
console.log('Set After Adding 6:', numbers);

// Question: Check if the value 3 exists in the numbers set. Answer:

console.log('Set Has 3:',numbers.has(3));

// Question: Remove the value 2 from the numbers set. Answer:

numbers.delete(2)
console.log('Set After Deleting 2:', numbers);

// Question: Clear all values from the numbers set. Answer:

numbers.clear();
console.log('Clear Set:', numbers);

// Question: Create a Set of fruits ['Apple', 'Banana', 'Mango']. Use a for...of loop to print each fruit. Answer:

let fruits = new Set(['Apple', 'Banana', 'Mango']);
console.log('All Fruits Using For..Of Loop:');
for (let f of fruits){
    console.log(f);
}
// Question: Use the forEach method to print each value in the numbers set. Answer:

let numbers2  = new Set([1, 2, 3, 4, 5]);
console.log('Numbers Set Using For..Each:')
numbers2.forEach(n => console.log(n));

// Question: Create two sets, setA = [1, 2, 3] and setB = [3, 4, 5]. Find their union. Answer:

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const unionSet = setA.union(setB);
console.log('Union of Set A & B:', unionSet);

// Question: Find the intersection of setA and setB. Answer:

const intersectionSet = setA.intersection(setB)
console.log('Intersection of Set A & B:', intersectionSet);

// Question: Find the difference between setA and setB (values in setA but not in setB). Answer:

const diffSet = setA.difference(setB);
console.log('Difference between Set A & B:', diffSet);