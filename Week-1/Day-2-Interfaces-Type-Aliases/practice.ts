// practice.ts
// What this file demonstrates: practice exercises with interfaces and type aliases
// Concepts used: interface, optional properties, readonly, type alias, extending interfaces

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed results for each exercise

// Exercise 1 (easy): interface for a Book
interface Book {
  title: string;
  author: string;
  pages: number;
}
let myBook: Book = { title: "1984", author: "George Orwell", pages: 328 };
console.log(myBook);

// Exercise 2 (easy): type alias for a simple status
type TaskStatus = "todo" | "in-progress" | "done";
let currentStatus: TaskStatus = "in-progress";
console.log("Task status:", currentStatus);

// Exercise 3 (medium): interface with an optional property
interface Movie {
  title: string;
  releaseYear: number;
  rating?: number;
}
let movie1: Movie = { title: "Inception", releaseYear: 2010, rating: 8.8 };
let movie2: Movie = { title: "Unknown Film", releaseYear: 2023 };
console.log(movie1, movie2);

// Exercise 4 (medium): interface with a readonly property
interface Ticket {
  readonly ticketId: string;
  event: string;
  price: number;
}
let concertTicket: Ticket = { ticketId: "TK-001", event: "Music Fest", price: 999 };
console.log(concertTicket);

// Exercise 5 (harder): extending interfaces for a Library system
interface LibraryItem {
  title: string;
  itemId: number;
}
interface Magazine extends LibraryItem {
  issueNumber: number;
}
let issue: Magazine = { title: "National Geographic", itemId: 20, issueNumber: 145 };
console.log(issue);

// Exercise 6 (harder): function that accepts an interface as a parameter
function displayBookSummary(book: Book): string {
  return `${book.title} by ${book.author} (${book.pages} pages)`;
}
console.log(displayBookSummary(myBook));
