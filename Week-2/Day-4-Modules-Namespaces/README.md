# Day 4 (Week 2): Modules & Namespaces

## Objective
Learn how to organize TypeScript code across multiple files using modules, and understand namespaces as an older alternative.

## Topics Covered
- ES modules: `export` and `import`
- Default exports vs named exports
- Organizing interfaces/types across files
- Namespaces (and why modules are generally preferred today)

## Theory
As a project grows, keeping everything in one file becomes messy. **Modules** let you split code across files and explicitly control what's shared:

```ts
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from "./mathUtils";
console.log(add(2, 3));
```

There are two ways to export: **named exports** (multiple per file, imported with `{ }`) and a **default export** (one per file, imported without `{ }`).

```ts
export default function greet(name: string) {
  return `Hello ${name}`;
}
// import greet from "./greet";
```

**Namespaces** were TypeScript's original way to organize code before ES modules were standard in JavaScript. They group related code under one name using the `namespace` keyword:

```ts
namespace Validation {
  export function isEmail(value: string): boolean {
    return value.includes("@");
  }
}
Validation.isEmail("test@example.com");
```

Namespaces still work, but ES modules are the modern standard and are what real projects use today, since they align with how JavaScript itself organizes code.

## Real World Usage
- Almost every real TypeScript project splits code into modules: `types.ts`, `utils.ts`, `services/`, `components/`, etc. (this repo's own mini projects do this)
- Named exports are generally preferred for utility files since a file often needs to export several related functions
- Namespaces mostly show up in older codebases or specific cases like organizing global type declarations

## Summary
This was less about new syntax and more about project organization — the same ideas from earlier days (interfaces, functions, generics) now spread across multiple files that import from each other, which is how any real codebase is structured.

## Learning Outcome
By the end of Day 4 (Week 2), I can:
- Split TypeScript code across multiple files using `export`/`import`
- Choose between named and default exports appropriately
- Read and understand basic namespace syntax
- Explain why ES modules are preferred over namespaces in modern projects
