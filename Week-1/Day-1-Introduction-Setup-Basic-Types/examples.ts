// examples.ts
// What this file demonstrates: basic TypeScript types
// Concepts used: string, number, boolean, array, tuple, enum, any, unknown, void, null, undefined

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed values in the terminal when run with ts-node

// Basic primitive types
let studentName: string = "Priya";
let studentAge: number = 20;
let isEnrolled: boolean = true;

console.log(studentName, studentAge, isEnrolled);

// Array types - two ways to write them
let marks: number[] = [88, 92, 76];
let subjects: Array<string> = ["Math", "Science", "English"];

console.log("Marks:", marks);
console.log("Subjects:", subjects);

// Tuple - fixed length array where each position has a known type
let student: [string, number] = ["Priya", 20];
console.log("Student tuple:", student);

// Enum - a fixed set of named values
enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
}
let currentStatus: OrderStatus = OrderStatus.Shipped;
console.log("Order status:", currentStatus); // prints 1 (index in the enum)

// any - avoid using this in real code, it disables type checking
let randomValue: any = "hello";
randomValue = 42; // allowed, but not safe
console.log("randomValue after reassignment:", randomValue);

// unknown - safer alternative to any, forces a type check before use
let userInput: unknown = "some text";
if (typeof userInput === "string") {
  console.log("User input length:", userInput.length);
}

// void - used for functions that don't return a value
function logMessage(message: string): void {
  console.log(message);
}
logMessage("This function returns nothing");

// null and undefined
let emptyValue: null = null;
let notAssigned: undefined = undefined;
console.log(emptyValue, notAssigned);
