# Day 3 (Week 2): Utility Types

## Objective
Learn TypeScript's built-in utility types that transform existing types instead of writing new ones from scratch.

## Topics Covered
- `Partial<T>`
- `Required<T>`
- `Readonly<T>`
- `Pick<T, K>`
- `Omit<T, K>`
- `Record<K, T>`

## Theory
Utility types let you derive new types from existing ones instead of duplicating definitions.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;   // every property becomes optional
type ReadonlyUser = Readonly<User>; // every property becomes readonly
type UserPreview = Pick<User, "id" | "name">; // only id and name
type UserWithoutEmail = Omit<User, "email">;  // everything except email
```

`Record<K, T>` builds an object type where all keys are of type `K` and all values are of type `T` — useful for lookup tables:

```ts
type RoleDescriptions = Record<"admin" | "editor" | "viewer", string>;
```

These are especially useful for update functions, where you often only want to change a few fields (`Partial<T>`), or for API responses where you only need a subset of a full type (`Pick<T, K>`).

## Real World Usage
- `Partial<T>` is used constantly in "update" functions where not every field needs to be provided
- `Pick<T, K>` and `Omit<T, K>` are used to create smaller "preview" or "summary" versions of a bigger type, like a `UserSummary` from a full `User`
- `Record<K, T>` is used for things like mapping status codes to messages, or roles to permissions

## Summary
Instead of manually writing separate interfaces for "full user," "user without password," "partial user update," etc., utility types let you derive all of these from a single source of truth type. This feels like a big step toward writing less repetitive TypeScript.

## Learning Outcome
By the end of Day 3 (Week 2), I can:
- Use `Partial`, `Required`, and `Readonly` to transform a type
- Use `Pick` and `Omit` to create smaller derived types
- Use `Record` to build lookup/mapping types
- Recognize when a utility type is a better choice than a brand-new interface
