// complex_code.js

/**
 * This code demonstrates a complex implementation of a library management system.
 */

// Define a class for Library
class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    } else {
      throw new Error("Book not found in the library.");
    }
  }

  displayBooks() {
    console.log(`Books in ${this.name}:`);
    this.books.forEach((book) => {
      console.log(`- ${book.title} by ${book.author}`);
    });
  }
}

// Define a class for Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Create a library instance
const myLibrary = new Library("My Library", "New York");

// Create some book instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("1984", "George Orwell");

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Display books in the library
myLibrary.displayBooks();

// Remove a book from the library
myLibrary.removeBook(book2);

// Display books again
myLibrary.displayBooks();

// Output:
// Books in My Library:
// - The Great Gatsby by F. Scott Fitzgerald
// - To Kill a Mockingbird by Harper Lee
// - 1984 by George Orwell
// Books in My Library:
// - The Great Gatsby by F. Scott Fitzgerald
// - 1984 by George Orwell