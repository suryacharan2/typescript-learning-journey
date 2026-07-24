# Day 1 (Week 2): Generics

## Objective
Understand what generics are and why they let us write reusable, type-safe functions and structures.

## Topics Covered
- What generics are and the problem they solve
- Generic functions
- Generic interfaces
- Generic constraints with `extends`
- Multiple type parameters

## Theory
Without generics, a function that needs to work with multiple types either uses `any` (losing type safety) or needs to be duplicated for each type. Generics solve this by letting the caller specify the type when the function is used, while TypeScript still checks everything properly.

```ts
function identity<T>(value: T): T {
  return value;
}

let output1 = identity<string>("hello"); // T is string
let output2 = identity<number>(42);      // T is number
```

`T` here is a type placeholder — it could be named anything, but `T` is the common convention.

Generic interfaces work the same way:

```ts
interface Box<T> {
  content: T;
}
let stringBox: Box<string> = { content: "books" };
```

A **generic constraint** limits what types can be used with `extends`, so the function only accepts types with certain properties:

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
```

## Real World Usage
- Generics are used constantly in real projects — e.g. an API response wrapper `ApiResponse<T>` that works the same way regardless of whether `T` is a `User`, `Product`, or `Order`
- Arrays themselves are generic (`Array<T>`), which is why `string[]` and `number[]` both work with the same array methods
- Generic constraints are used to make sure only objects with expected properties (like `id`) can be passed into a function

## Summary
Today felt like a shift from "writing type-safe code" to "writing type-safe *reusable* code." Generics were a bit confusing initially, but the `Box<T>` example made it click — it's really just a placeholder for "whatever type gets passed in."

## Learning Outcome
By the end of Day 1 (Week 2), I can:
- Write a basic generic function
- Create a generic interface
- Apply a generic constraint with `extends`
- Understand why generics avoid the need for `any`
