// practice.ts
// What this file demonstrates: practice exercises with functions and inference
// Concepts used: function typing, optional/default parameters, rest parameters, function types

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed results for each exercise

// Exercise 1 (easy): function to calculate area of a rectangle
function calculateArea(width: number, height: number): number {
  return width * height;
}
console.log("Area:", calculateArea(5, 10));

// Exercise 2 (easy): function with a default parameter for tax rate
function calculateTotal(price: number, taxRate: number = 18): number {
  return price + (price * taxRate) / 100;
}
console.log("Total with default tax:", calculateTotal(500));
console.log("Total with custom tax:", calculateTotal(500, 5));

// Exercise 3 (medium): function with an optional parameter
function formatName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}
console.log(formatName("Vikram"));
console.log(formatName("Vikram", "Singh"));

// Exercise 4 (medium): rest parameters to find the maximum value
function findMax(...values: number[]): number {
  return Math.max(...values);
}
console.log("Max value:", findMax(12, 45, 3, 89, 22));

// Exercise 5 (harder): function type used for a simple calculator
type Calculator = (a: number, b: number) => number;

const operations: Record<string, Calculator> = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
};

console.log("Add:", operations.add(4, 6));
console.log("Multiply:", operations.multiply(4, 6));

// Exercise 6 (harder): inference practice - guess types before checking
let price = 299.99;         // inferred as number
let productTitle = "Mouse"; // inferred as string
let inStockItems = [1, 2, 3, 4]; // inferred as number[]
console.log(typeof price, typeof productTitle, inStockItems.length);
