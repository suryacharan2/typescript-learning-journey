# Day 3: Functions & Type Inference

## Objective
Learn how to type function parameters and return values, and understand how TypeScript infers types automatically.

## Topics Covered
- Typed function parameters and return types
- Optional and default parameters
- Rest parameters
- Function types
- Type inference

## Theory
TypeScript lets you explicitly type both the inputs and output of a function:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Parameters can be made optional with `?`, or given default values:

```ts
function greet(name: string, title?: string): string {
  return title ? `${title} ${name}` : name;
}

function multiply(a: number, b: number = 2): number {
  return a * b;
}
```

**Type inference** means TypeScript can figure out a type on its own, without it being written explicitly. For example, `let count = 5;` is automatically inferred as `number`, so writing `let count: number = 5;` is redundant here. Inference is why TypeScript doesn't feel as verbose as it might look at first — you only need explicit types where TypeScript can't figure it out on its own, like function parameters.

## Real World Usage
- Typed functions catch bugs like passing a string where a number is expected, before the code even runs
- Default parameters are common in configuration functions, e.g. a function that creates a user with a default role
- Rest parameters are useful for functions that take a variable number of arguments, like a `sum(...numbers)` function

## Summary
Today was about making functions predictable — knowing exactly what a function expects and what it returns just by reading its signature, without needing to read the whole function body.

## Learning Outcome
By the end of Day 3, I can:
- Type function parameters and return values
- Use optional and default parameters correctly
- Use rest parameters for variable-length arguments
- Understand when TypeScript infers a type automatically vs when I need to declare it
