# Day 4: Union & Intersection Types

## Objective
Learn how to combine types using unions and intersections, and how to safely narrow union types.

## Topics Covered
- Union types (`|`)
- Intersection types (`&`)
- Type narrowing with `typeof` and `in`
- Literal types
- Discriminated unions

## Theory
A **union type** means a value can be one of several types:

```ts
let id: string | number;
id = 101;      // valid
id = "A101";   // also valid
```

An **intersection type** combines multiple types into one, requiring all of their properties:

```ts
type Person = { name: string };
type Employee = { employeeId: number };
type StaffMember = Person & Employee; // must have both name and employeeId
```

Since a union value could be more than one type, TypeScript requires **narrowing** before you can safely use type-specific properties:

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // safe, we know it's a string here
  } else {
    console.log(id.toFixed(2)); // safe, we know it's a number here
  }
}
```

A **discriminated union** is a pattern where each type in the union has a common literal property (like `kind`) that lets TypeScript know exactly which type it's dealing with.

## Real World Usage
- Union types are common for API responses that can return either a success object or an error object
- Intersection types are used to combine smaller reusable types into one bigger type, like combining `Timestamps` and `User` types
- Discriminated unions are widely used for handling different shapes of events or actions in an app

## Summary
Today's concepts are about handling data that isn't always the same shape — which is very close to how real-world data actually behaves.

## Learning Outcome
By the end of Day 4, I can:
- Use union types for values that can be more than one type
- Use intersection types to combine multiple type shapes
- Narrow a union type safely using `typeof` and `in`
- Recognize and use a discriminated union
