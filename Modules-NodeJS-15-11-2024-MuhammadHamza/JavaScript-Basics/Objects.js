let book = {
    bookName: 'Javascript Basics',
    writer: 'Muhammad Hamza',
    numberOfPages: 69,

    describe() {
        return `The book ${this.bookName} is written by ${this.writer} and contains ${this.numberOfPages} pages.`;
    }
};

// Access properties
console.log(book.bookName);
console.log(book['writer']);

// Modify properties
book.numberOfPages = 100;
book.bookName = 'Advanced JavaScript';

// Add new properties
book.genre = 'Programming';
book['publishedYear'] = 2024;

// Delete properties
delete book.genre;
console.log(book.genre);

// Call method
console.log(book.describe());

// Iterate over object
for (let key in book) {
    console.log(key, book[key]);
}
Object.keys(book).forEach(key => console.log(key, book[key]));
Object.values(book).forEach(value => console.log(value));
Object.entries(book).forEach(([key, value]) => console.log(`${key}: ${value}`));

// Check if a property exists
console.log('bookName' in book);
console.log(book.hasOwnProperty('writer'));

// Copy the object
let bookCopy = Object.assign({}, book);
let bookCopy2 = { ...book };

// Merge objects
let additionalInfo = { price: 29.99, publisher: 'Tech Press' };
let mergedBook = { ...book, ...additionalInfo };
console.log(mergedBook);

// Check type
console.log(typeof book);
console.log(Array.isArray(book));

// Destructure object
let { bookName, writer, numberOfPages } = book;
console.log(bookName, writer, numberOfPages);

// Nested objects
let bookDetails = {
    bookName: 'Javascript Basics',
    details: {
        writer: 'Muhammad Hamza',
        numberOfPages: 69,
        genre: 'Programming'
    }
};
console.log(bookDetails.details.writer);
bookDetails.details.numberOfPages = 100;
console.log(bookDetails.details.numberOfPages);

// Object freeze (immutable)
Object.freeze(book);
book.bookName = 'New Title'; 
console.log(book.bookName);

// Object seal (no addition or deletion of properties)
Object.seal(book);
delete book.writer;
book.price = 20;
console.log(book.writer);
console.log(book.price);

// Clone and modify specific properties
let newBook = { ...book, bookName: 'JavaScript Advanced' };
console.log(newBook.bookName);
console.log(book.bookName);

