# Day 2: Interfaces & Type Aliases

## Objective
Learn how to describe the shape of an object using interfaces and type aliases, and understand when to use each.

## Topics Covered
- Defining interfaces
- Optional and readonly properties
- Type aliases
- Interfaces vs type aliases
- Extending interfaces

## Theory
An `interface` describes the shape an object must have. If a function expects an object with a certain interface, TypeScript will check that whatever is passed in actually matches that shape.

```ts
interface Employee {
  id: number;
  name: string;
  department: string;
}
```

A `type` alias can do something similar, but is more flexible — it can also represent unions, primitives, and tuples, not just object shapes.

```ts
type ID = number | string;
```

The general rule I'm using for now: use `interface` for defining the shape of objects (especially ones that might be extended later), and use `type` for unions, tuples, or more complex combined types.

Interfaces can also be extended, which is useful when one object type builds on another:

```ts
interface Person {
  name: string;
}
interface Employee extends Person {
  employeeId: number;
}
```

## Real World Usage
- Interfaces are used constantly for defining API response shapes, database models, and function parameters
- `readonly` is useful for values like IDs that should never change after creation
- Optional properties (`?`) model real-world data where not every field is always present, like a middle name

## Summary
Today's focus was moving from single-variable types to describing whole objects. This is closer to how real applications are structured, since most data comes as objects, not standalone variables.

## Learning Outcome
By the end of Day 2, I can:
- Define interfaces for object shapes
- Use optional and readonly properties correctly
- Choose between `interface` and `type` for a given situation
- Extend one interface from another
