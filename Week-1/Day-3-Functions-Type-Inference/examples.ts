// examples.ts
// What this file demonstrates: typed functions and type inference
// Concepts used: parameter types, return types, optional params, default params, rest params, inference

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed results of each function call

// Basic typed function
function add(a: number, b: number): number {
  return a + b;
}
console.log("Sum:", add(5, 10));

// Optional parameter
function greetUser(name: string, title?: string): string {
  return title ? `${title} ${name}` : `Hello ${name}`;
}
console.log(greetUser("Meera"));
console.log(greetUser("Meera", "Dr."));

// Default parameter
function calculateDiscount(price: number, discountPercent: number = 10): number {
  return price - (price * discountPercent) / 100;
}
console.log("Discounted price:", calculateDiscount(1000));
console.log("Discounted price with custom %:", calculateDiscount(1000, 25));

// Rest parameters - accepts any number of arguments as an array
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log("Total:", sumAll(1, 2, 3, 4, 5));

// Function type - describing the shape of a function itself
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;
console.log("Difference:", subtract(10, 4));

// Type inference in action - no explicit type needed here
let inferredNumber = 42; // TypeScript infers this as `number`
let inferredArray = [1, 2, 3]; // inferred as number[]
console.log(typeof inferredNumber, inferredArray);
