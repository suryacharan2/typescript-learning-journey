# TypeScript Cheat Sheet

Quick reference built up from Week 1 and Week 2 notes.

## Basic Types
```ts
let age: number = 21;
let name: string = "Ravi";
let isActive: boolean = true;
let ids: number[] = [1, 2, 3];
let tuple: [string, number] = ["Ravi", 21];
enum Status { Pending, Shipped, Delivered }
let anything: any;       // avoid in real code
let safeUnknown: unknown; // safer than any
```

## Interfaces & Type Aliases
```ts
interface Employee {
  id: number;
  name: string;
  department?: string; // optional
  readonly hireDate: string; // cannot be changed after creation
}

type ID = string | number; // union
type StaffMember = Employee & { level: number }; // intersection
```

## Functions
```ts
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, title?: string): string { ... }
function multiply(a: number, b: number = 2): number { ... }
function sumAll(...nums: number[]): number { ... }

type MathOp = (a: number, b: number) => number;
```

## Union / Intersection / Narrowing
```ts
function printId(id: string | number) {
  if (typeof id === "string") { ... } else { ... }
}

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };
```

## Generics
```ts
function identity<T>(value: T): T { return value; }
interface Box<T> { content: T; }
function getLength<T extends { length: number }>(item: T): number { return item.length; }
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }
```

## Utility Types
```ts
Partial<T>    // all properties optional
Required<T>   // all properties required
Readonly<T>   // all properties immutable
Pick<T, K>    // only the listed properties
Omit<T, K>    // everything except the listed properties
Record<K, T>  // object type with keys K and values T
```

## Modules
```ts
// utils.ts
export function add(a: number, b: number): number { return a + b; }
export default function greet(name: string) { return `Hello ${name}`; }

// main.ts
import greet, { add } from "./utils";
```

// week-1 comands

npx ts-node "Week-1\Day-1-Introduction-Setup-Basic-Types\examples.ts"
npx ts-node "Week-1\Day-1-Introduction-Setup-Basic-Types\practice.ts"
npx ts-node "Week-1\Day-1-Introduction-Setup-Basic-Types\assignment.ts"

npx ts-node "Week-1\Day-2-Interfaces-Type-Aliases\examples.ts"
npx ts-node "Week-1\Day-2-Interfaces-Type-Aliases\practice.ts"
npx ts-node "Week-1\Day-2-Interfaces-Type-Aliases\assignment.ts"

npx ts-node "Week-1\Day-3-Functions-Type-Inference\examples.ts"
npx ts-node "Week-1\Day-3-Functions-Type-Inference\practice.ts"
npx ts-node "Week-1\Day-3-Functions-Type-Inference\assignment.ts"

npx ts-node "Week-1\Day-4-Union-Intersection-Types\examples.ts"
npx ts-node "Week-1\Day-4-Union-Intersection-Types\practice.ts"
npx ts-node "Week-1\Day-4-Union-Intersection-Types\assignment.ts"

npx ts-node "Week-1\Day-5-Mini-Project\src\index.ts"

week-2 comands

npx ts-node "Week-2\Day-1-Generics\examples.ts"
npx ts-node "Week-2\Day-1-Generics\practice.ts"
npx ts-node "Week-2\Day-1-Generics\assignment.ts"

npx ts-node "Week-2\Day-2-Advanced-Generics\examples.ts"
npx ts-node "Week-2\Day-2-Advanced-Generics\practice.ts"
npx ts-node "Week-2\Day-2-Advanced-Generics\assignment.ts"

npx ts-node "Week-2\Day-3-Utility-Types\examples.ts"
npx ts-node "Week-2\Day-3-Utility-Types\practice.ts"
npx ts-node "Week-2\Day-3-Utility-Types\assignment.ts"

npx ts-node "Week-2\Day-4-Modules-Namespaces\examples.ts"
npx ts-node "Week-2\Day-4-Modules-Namespaces\practice.ts"
npx ts-node "Week-2\Day-4-Modules-Namespaces\assignment.ts"

npx ts-node "Week-2\Day-5-Mini-Project\src\index.ts"

npx ts-node "Week-2\Day-1-Generics\examples.ts"
npx ts-node "Week-2\Day-1-Generics\practice.ts"
npx ts-node "Week-2\Day-1-Generics\assignment.ts"

npx ts-node "Week-2\Day-2-Advanced-Generics\examples.ts"
npx ts-node "Week-2\Day-2-Advanced-Generics\practice.ts"
npx ts-node "Week-2\Day-2-Advanced-Generics\assignment.ts"

npx ts-node "Week-2\Day-3-Utility-Types\examples.ts"
npx ts-node "Week-2\Day-3-Utility-Types\practice.ts"
npx ts-node "Week-2\Day-3-Utility-Types\assignment.ts"

npx ts-node "Week-2\Day-4-Modules-Namespaces\examples.ts"
npx ts-node "Week-2\Day-4-Modules-Namespaces\practice.ts"
npx ts-node "Week-2\Day-4-Modules-Namespaces\assignment.ts"

npx ts-node "Week-2\Day-5-Mini-Project\src\index.ts"