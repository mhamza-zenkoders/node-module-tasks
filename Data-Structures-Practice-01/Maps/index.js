
// Question: Create a Map named student with the following key-value pairs:

let student = new Map([['name', 'Muhammad Hamza'], ['age',24],['grade','A'],['city','Karachi']])
console.log('Student Map:',student);

// Question: Add a new key subject with the value "Mathematics" to the student map. Answer:

student.set('subject','Mathematics');
console.log('Student Map After Adding Subject:', student);

// Question: Retrieve the value associated with the key grade in the student map. Answer:

console.log('Subject:',student.get('subject'));

// Question: Check if the key age exists in the student map. Answer:

console.log('If Age Exists:',student.has('subject'));

// Question: Remove the key grade from the student map. Answer:

student.delete('grade');
console.log('Student Map After Deleting Grade:',student);

// Question: Clear all key-value pairs from the student map. Answer:

student.clear();
console.log('Student After Clearing:',student)

// Question: Create a Map named countryCodes with the following entries:
// US: "United States"
// IN: "India"
// GB: "United Kingdom"
// Use a for...of loop to print all key-value pairs in the map. Answer:

let countryCodes = new Map([['US','United States'],['IN','India'],['GB','United Kingdom']]);
console.log('Print All CountryCodes using For..Of:');
for(let c of countryCodes){
    console.log(c);
}

// Question: Use the forEach method to print all keys in the countryCodes map. Answer:

console.log('All CountryCodes Keys using For..Each:');
countryCodes.forEach((value,key) => console.log(key));

// Question: Get an array of all keys in the countryCodes map using Map.keys. Answer:

let keys = [...countryCodes.keys()];
console.log('All CountryCodes Keys using Map.Keys:',keys);

// Question: Get an array of all values in the countryCodes map using Map.values. Answer:

let values = [...countryCodes.values()];
console.log('All CountryCodes Keys using Map.Keys:',values);

// Question: Get an array of all key-value pairs in the countryCodes map using Map.entries. Answer:

let pairs = [...countryCodes.entries()];
console.log('All CountryCodes Keys using Map.Keys:',pairs);

// Question: Use a Set to remove duplicate values from the array [1, 2, 2, 3, 4, 4, 5]. Answer:
// 3, 4, 5]

let numbers = [1, 2, 2, 3, 4, 4, 5];
let set = new Set(numbers);
numbers = [...set];
console.log(numbers)

// Question: Convert the student map to an object. Answer:
// javascript

student = new Map([['name', 'Muhammad Hamza'], ['age',24],['grade','A'],['city','Karachi']])
let studentObj = Object.fromEntries(student);
console.log('Student Map converted into Object:', studentObj);

// Question: Create a Map from the following object: { name: "Bob", age: 25, city: "Paris" }. Answer:

let obj = { name: "Bob", age: 25, city: "Paris" }
let map = new Map(Object.entries(obj));
console.log("Object Converted into Map:", map);

// Question: Write a function getUniqueCharacters that takes a string and returns a Set of unique characters. Answer:

function getUniqueCharacters(str){
    return new Set(str);
}
let strSet = getUniqueCharacters('racecar');
console.log('Set of Unique Characters:', strSet);