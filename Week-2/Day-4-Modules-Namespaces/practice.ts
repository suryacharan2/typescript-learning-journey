// practice.ts
// What this file demonstrates: practice exercises with namespaces (module-splitting shown in comments)
// Concepts used: namespaces, export within namespaces

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed results for each exercise

// Exercise 1 (easy): namespace for basic string helpers
namespace StringHelpers {
  export function capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  export function reverse(value: string): string {
    return value.split("").reverse().join("");
  }
}
console.log(StringHelpers.capitalize("hello"));
console.log(StringHelpers.reverse("typescript"));

// Exercise 2 (medium): namespace grouping multiple related validators
namespace Validators {
  export function isPositive(value: number): boolean {
    return value > 0;
  }

  export function isEven(value: number): boolean {
    return value % 2 === 0;
  }
}
console.log("Is positive:", Validators.isPositive(-5));
console.log("Is even:", Validators.isEven(8));

// Exercise 3 (harder): nested namespace for grouping related utilities
namespace App {
  export namespace Formatters {
    export function currency(amount: number): string {
      return `Rs.${amount.toFixed(2)}`;
    }
  }
}
console.log(App.Formatters.currency(499.5));

/*
  How Exercise 1 (StringHelpers) would look split into real modules:

  // stringHelpers.ts
  export function capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  export function reverse(value: string): string {
    return value.split("").reverse().join("");
  }

  // main.ts
  import { capitalize, reverse } from "./stringHelpers";
  console.log(capitalize("hello"));
*/
