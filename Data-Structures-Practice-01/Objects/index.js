// Question: Create an object person with the following properties:
// name: "John"
// age: 30
// city: "New York"
// Answer:

let person = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log('Object:', person);

// Question: Access the name property of the person object and store it in a variable. Answer:

let personName = person.name;
console.log('Name:', personName);

// Question: Add a new property isMarried with the value false to the person object. Answer:

person.isMarried = false;
console.log('IsMarried added into Object:', person);

// Question: Delete the city property from the person object. Answer:

delete(person.city);
console.log('City Property Deleted:', person);

// Question: Add a method greet to the person object that logs "Hello, my name is John" to the console when called. Answer:

person.greet = function(){
    console.log(`Hello, me name is ${this.name}`);
}
person.greet();

// Question: Call the greet method of the person object. Answer:

person.greet();

// Question: Write a loop to print all keys of the person object. Answer:

for (let k of Object.keys(person)){
    console.log(k);
}

// Question: Write a loop to print all values of the person object. Answer:

for (let v of Object.values(person)){
    console.log(v);
}

// Question: Use destructuring to extract the name and age properties from the person object. Answer:

let {name, age} = person;
console.log(`Name: ${name}, Age: ${age}`);

// Question: Provide default values for destructuring if the properties gender and city do not exist. Answer:

let {gender = 'Male', city = 'Karachi'} = person;
console.log(`Gender: ${gender}, Age: ${city}`);

// Section 5: Advanced Operations
// Question: Create a new object student that has the same properties as person, but add an additional property grade: "A". Answer:

let student = Object.assign({}, person, {grade:'A'});
console.log('Student:',student);

// Question: Merge two objects obj1 = { a: 1, b: 2 } and obj2 = { b: 3, c: 4 } into a new object. Answer:

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let mergedObj = Object.assign({},obj1, obj2);
console.log('Merged Object:', mergedObj);

// Question: Use Object.keys to get an array of all keys in the person object. Answer:

console.log('Keys Array:',Object.keys(person));

// Question: Use Object.values to get an array of all values in the person object. Answer:

console.log('Values Array:',Object.values(person));

// Question: Use Object.entries to get an array of key-value pairs in the person object. Answer:

console.log('Key-Value Pairs Array:',Object.entries(person));

// Section 6: Checking Properties
// Question: Check if the age property exists in the person object. Answer:

console.log('Person Has Age Property:',person.hasOwnProperty('age'));

// Question: Use Object.hasOwn() to check if isMarried is a direct property of person. Answer:

console.log('Person Has Own isMarried Property:',Object.hasOwn(person, 'isMarried'));

// Section 7: Freezing and Sealing
// Question: Use Object.freeze to make the person object immutable. Try changing the age property. Answer:

console.log('Age Before Freezing:', person);
Object.freeze(person);
person.age = 21;
console.log('Age After Freezing:', person);

// Question: Use Object.seal on the person object and add a new property salary. Answer:

console.log('Object Before Sealing:', person);
Object.seal(person);
person.age = 21;
person.salary = 120000;
console.log('Object After Sealing:', person);

// Question: Write code to create a deep copy of the person object using JSON.stringify and JSON.parse. Answer:

const jsonPerson = JSON.stringify(person);
console.log("New Person After JSON Parse:",jsonPerson);
const newPerson = JSON.parse(jsonPerson);
console.log("New Person After JSON Parse:", newPerson);

// Question: Create an array of objects representing books:
// javascript

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction", price: 290 },
    { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", price: 120 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Classic", price: 170 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Classic", price: 110 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy", price: 250 }
  ];
  
  console.log('Books Objects Array:', books);

// Use filter to find all books with a price greater than 150. Answer:
// javascript

let expensiveBooks = books.filter(book => book.price>150);
console.log('Books with Price greater than 150',expensiveBooks);

// Question: Use map to create an array of book titles. Answer:
// javascript

let bookTitles = books.map(book => book.title);
console.log('Book Titles:', bookTitles);

// Question: Use reduce to calculate the total price of all books. Answer:

let booksTotalPrice = books.reduce((result,book) => result + book.price,0);
console.log('Books Total Price:', booksTotalPrice);

// Bonus Questions
// Question: Use a for...of loop to print the title and author of each book in the books array. Answer:
console.log('All Books Titles and Author Name:')
for (let b of books){
    console.log(`Title: ${b.title} | Author: ${b.author}`);
}

// Question: Write a function updateAge that takes an object and an age parameter, updates the object's age, and returns the updated object. Answer:

function updateAge(obj, age){
    if(obj.hasOwnProperty('age')){
        obj.age = age; 
    }
    return obj;
}

let myObj = {
    name: "Hamza",
    age: 24, 
    city: "Karachi"
};
console.log('Object:', myObj);
const updatedObj = updateAge(myObj,35);
console.log('Updated Object:',updatedObj);
