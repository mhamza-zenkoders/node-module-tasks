/*
Question: Write code to access the second item in the fruits array. Answer:
javascript */

let fruits = ['Apple','Banana','Strawberry','Watermelon', 'Mango'];
console.log('Second Item:', fruits[1]);

/*Question: Use a forEach loop to print each item in the fruits array. Answer:
Javascript */
console.log('Printing Fruits Using ForEach:')
fruits.forEach(fruit => console.log(fruit));

/*Question: Add Orange to the end of the fruits array. Answer: */

fruits.push('Orange');
console.log('Adding Orange at the end:', fruits)

/*Question: Remove the first item (Apple) from the fruits array. Answer: */

fruits.shift();
console.log('Removing First Item:',fruits);

/*Question: Add Grapes to the beginning of the fruits array. Answer: */

fruits.unshift('Grapes');
console.log('Adding Grapes at the start:',fruits);

// Question: Remove the last item (Orange) from the fruits array. Answer:

fruits.pop();
console.log('Removing Last Item:',fruits)

// Question: Create a new array by adding Cherry and Peach to the existing fruits

const newFruits = fruits.concat(['Cherry', 'Peach']);
console.log('Merging Array with Cherry & Peach:', newFruits);

// Question: Use splice to remove Banana from the fruits array (assume it is in the second position). Answer:
fruits.splice(1,1);
console.log('Splicing Banana from Array', fruits);

// Question: Use splice to insert Pineapple at the second position in the fruits array. Answer:

fruits.splice(1,0,'Pineapple');
console.log('Adding Pineapple at 2nd Position: ',fruits)

// Question: Use slice to create a new array with the first two items of the fruits array. Answer:

let temp = fruits.slice(0,2);
console.log('New Array with First Two Items:', temp);

// Question: Find the index of Mango in the fruits array. Answer:

console.log('Index of Mango:', fruits.indexOf('Mango'))

// Question: Check if Banana exists in the fruits array using includes. Answer:

console.log('Banana Exists:', fruits.includes('Banana'))

// Question: Use find to locate the first fruit in the fruits array that starts with M. Answer:
let m = fruits.find(fruit => fruit.startsWith('M'));
console.log('First Fruit that starts with M:', m)

// Question: Use filter to create a new array with fruits that have more than 5 letters. Answer:

const temp2 = fruits.filter(fruit => fruit.length > 5);
console.log('Fruits with more than 5 letters:',temp2);

// Question: Sort the fruits array alphabetically. Answer:

console.log('Fruits Sorted Alphabetically: ', fruits.sort());

// Question: Reverse the fruits array. Answer:

console.log('Reversed Array:', fruits.reverse());

// Question: Use reduce to create a single string from the fruits array, with items separated by a comma and a space (, ). Answer:

const str = fruits.reduce((result, item) => result += ', ' + item)
console.log('Fruits into a String using Reduce:', str);

// Question: Use map to create a new array where each fruit is in uppercase. Answer:

let temp3 = fruits.map(fruits => fruits.toUpperCase())
console.log('Fruits in Uppercase:',temp3)

// Question: Combine all the methods you've learned to:
// Add Kiwi at the start.
// Remove Mango from the array.
// Sort the remaining fruits alphabetically. Answer:

let temp4 = ['Kiwi',...fruits].filter(fruit => fruit != 'Mango').sort();
console.log('Added Kiwi at start, removed Mango then Sorted:', temp4);

// Bonus Questions
// Question: Flatten a nested array [1, [2, 3], [4, [5, 6]]] using flat. Answer:

let nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log('Nested Array into Flat Array:', nestedArray.flat(Infinity));

// Question: Use join to create a string from the fruits array with items separated by a hyphen (-). Answer:

console.log('Fruits Joined into String with hyphen:', fruits.join('-'));