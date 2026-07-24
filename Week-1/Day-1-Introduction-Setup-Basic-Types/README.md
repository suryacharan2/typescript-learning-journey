# Day 1: Introduction, Setup & Basic Types

## Objective
Understand what TypeScript is, why it's used over plain JavaScript, set up a working TypeScript environment, and learn the basic types.

## Topics Covered
- What is TypeScript and why companies use it
- Installing TypeScript and setting up `tsconfig.json`
- Compiling `.ts` files to `.js`
- Basic types: `string`, `number`, `boolean`, `array`, `tuple`, `enum`, `any`, `unknown`, `void`, `null`, `undefined`

## Theory
TypeScript is a superset of JavaScript that adds static typing. Regular JavaScript figures out types at runtime, which means type-related bugs (like passing a string where a number was expected) only show up when the code actually runs. TypeScript checks types at compile time, so many of these mistakes are caught before the code ever runs.

Under the hood, TypeScript code is compiled ("transpiled") into plain JavaScript using the `tsc` compiler, so it can run anywhere JavaScript runs — browsers, Node.js, etc.

Basic types in TypeScript map closely to JavaScript types, but you declare them explicitly:

```ts
let age: number = 21;
let name: string = "Ravi";
let isActive: boolean = true;
```

`any` disables type checking for a variable (should be avoided in real projects), while `unknown` is a safer alternative that forces you to check the type before using the value.

## Real World Usage
- Basic types are used everywhere: form inputs, API responses, database records
- Companies use TypeScript in large codebases so that changing one function doesn't silently break another part of the app
- Enums are commonly used for fixed sets of values like order status (`PENDING`, `SHIPPED`, `DELIVERED`)

## Summary
Today was about getting TypeScript installed and understanding the basic type system. Nothing complex yet — just building the foundation that everything else will sit on top of.

## Learning Outcome
By the end of Day 1, I can:
- Set up a TypeScript project from scratch
- Compile `.ts` files into `.js`
- Declare variables with explicit types
- Understand the difference between `any` and `unknown`
