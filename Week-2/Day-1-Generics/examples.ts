// examples.ts
// What this file demonstrates: generics basics
// Concepts used: generic functions, generic interfaces, generic constraints, multiple type parameters

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed values showing generics working with different types

// Generic function - works with any type, decided at the call site
function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>("Hello"));
console.log(identity<number>(100));

// Generic interface
interface Box<T> {
  content: T;
}
let numberBox: Box<number> = { content: 42 };
let stringBox: Box<string> = { content: "TypeScript" };
console.log(numberBox, stringBox);

// Generic function returning an array of the same type
function wrapInArray<T>(item: T): T[] {
  return [item];
}
console.log(wrapInArray<string>("apple"));
console.log(wrapInArray<number>(7));

// Generic constraint - only allow types that have a "length" property
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
console.log("String length:", getLength("Hello world"));
console.log("Array length:", getLength([1, 2, 3, 4]));

// Multiple type parameters
function pairValues<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}
console.log(pairValues<string, number>("age", 25));
