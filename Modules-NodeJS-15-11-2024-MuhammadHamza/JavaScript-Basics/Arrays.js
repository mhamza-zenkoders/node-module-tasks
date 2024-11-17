// Array initialization
let arr = [10, 20, 30, 40, 50];
console.log("Original:", arr);




// Array Converted to String
let convertedToString = arr.toString();
console.log("Converted to String:", convertedToString);

// Filter: Keep nums > 25
let filteredArr = arr.filter(num => num > 25);
console.log("Filtered:", filteredArr);

// Map: Multiply nums by 2
let mappedArr = arr.map(num => num * 2);
console.log("Mapped:", mappedArr);

// Reduce: Sum of nums
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// Shift: Remove first element
let firstElement = arr.shift();
console.log("Shifted:", firstElement);
console.log("After Shift:", arr);

// Unshift: Add to start
arr.unshift(5, 10);
console.log("After Unshift:", arr);

// Push: Add to end
arr.push(60, 70);
console.log("After Push:", arr);

// Pop: Remove last element
let lastRemoved = arr.pop();
console.log("Popped:", lastRemoved);
console.log("After Pop:", arr);

// IndexOf: Find index of 30
let index = arr.indexOf(30);
console.log("Index of 30:", index);

// At: Get by index
let elementAt3 = arr.at(3);
console.log("At index 3:", elementAt3);
console.log("Last Element:", arr.at(-1));

// Slice: Copy part of array
let slicedArr = arr.slice(2, 5);
console.log("Sliced:", slicedArr);

// Splice: Modify in place
arr.splice(2, 2, 25, 35);
console.log("After Splice:", arr);

// Find: First num > 30
let found = arr.find(num => num > 30);
console.log("Found > 30:", found);

// FindIndex: Index of first num > 30
let foundIndex = arr.findIndex(num => num > 30);
console.log("Index > 30:", foundIndex);

// Includes: Check if 40 exists
console.log("Includes 40:", arr.includes(40));

// Sort: Ascending order
let sortedArr = arr.sort((a, b) => a - b);
console.log("Sorted (Asc):", sortedArr);

// Sort: Descending order
let sortedArrDesc = arr.sort((a, b) => b - a);
console.log("Sorted (Desc):", sortedArrDesc);

// Reverse: Reverse array
let reversedArr = arr.reverse();
console.log("Reversed:", reversedArr);

// Join: Convert to string
let joinedStr = arr.join(" - ");
console.log("Joined:", joinedStr);

// Concat: Merge arrays
let mergedArr = arr.concat([70, 80]);
console.log("Merged:", mergedArr);

// Concat: Merge arrays
let copyArr = arr.copyWithin(1,2,4);
console.log("Copied Element:", copyArr);

// ForEach: Iterate and print
console.log("ForEach:");
arr.forEach((num, index) => console.log(`Index ${index}:`, num));
