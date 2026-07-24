// examples.ts
// What this file demonstrates: modules and namespaces
// Concepts used: export, import (simulated in one file for demo purposes), namespaces

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed values showing modular code organization
//
// Note: since this file is self-contained for demo purposes, the "export/import"
// example is shown as comments describing how it would look across two real files.

/*
  How this would look split across two files in a real project:

  // mathUtils.ts
  export function add(a: number, b: number): number {
    return a + b;
  }
  export function subtract(a: number, b: number): number {
    return a - b;
  }

  // main.ts
  import { add, subtract } from "./mathUtils";
  console.log(add(5, 3));
  console.log(subtract(5, 3));
*/

// Default export example (shown as it would look in its own file "greet.ts")
/*
  export default function greet(name: string): string {
    return `Hello, ${name}!`;
  }

  // imported in another file as:
  import greet from "./greet";
  console.log(greet("Ayaan"));
*/

// Namespace example - this part runs directly since namespaces don't require separate files
namespace Validation {
  export function isEmail(value: string): boolean {
    return value.includes("@") && value.includes(".");
  }

  export function isPhoneNumber(value: string): boolean {
    return /^\d{10}$/.test(value);
  }
}

console.log("Is valid email:", Validation.isEmail("test@example.com"));
console.log("Is valid phone:", Validation.isPhoneNumber("9876543210"));
console.log("Is valid email (bad input):", Validation.isEmail("not-an-email"));
