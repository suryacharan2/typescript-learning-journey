# Day 2 (Week 2): Advanced Generics

## Objective
Go deeper into generics: default type parameters, generic classes, and combining generics with other type features from earlier days.

## Topics Covered
- Default generic types
- Generic classes (recap and extension)
- Generics with union types
- Combining generics with interfaces from Week 1
- `keyof` with generics

## Theory
A generic can have a **default type**, so callers don't always need to specify it:

```ts
interface ApiResponse<T = unknown> {
  data: T;
  success: boolean;
}
```

Generics combine well with everything learned so far. For example, a generic function can be constrained using `keyof` to only accept valid property names of an object:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

This is powerful because TypeScript checks that `key` is actually a valid property of `obj` at compile time — passing a typo'd key would be caught immediately instead of causing a runtime `undefined`.

Generics can also work with union types, so a generic container could hold either one type or another:

```ts
class Result<T, E = string> {
  constructor(public success: boolean, public data?: T, public error?: E) {}
}
```

## Real World Usage
- `keyof`-based generic functions are commonly used for things like generic form field getters/setters
- Default generic types are used in libraries so that most users don't need to think about the generic at all unless they want to customize it
- Generic `Result<T, E>` style types are common in error-handling patterns, especially in APIs that don't want to throw exceptions

## Summary
This built directly on yesterday's generics but pushed into combining them with `keyof`, defaults, and unions — closer to how generics actually show up in real TypeScript codebases rather than toy examples.

## Learning Outcome
By the end of Day 2 (Week 2), I can:
- Use default type parameters in generics
- Use `keyof` together with generics for safer property access
- Build a generic class that models success/failure results
- Combine generics with interfaces and unions from earlier days
